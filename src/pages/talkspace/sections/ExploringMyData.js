import React from 'react';
import { colors } from 'styles';
import { Section, Code, Plot } from 'components';
import PropTypes from "prop-types";

const ExploringMyData = ({ messageData }) => (
  <Section
    title="Exploring my data"
    subtitle="Cleaning and exploring my message history"
  >
    <p>
      Now that I have my data, let&apos;s explore it. The data I have is in the form of an
      array of JSON objects, each with identical structures representing one individual
       &quot;text &quot; exchanged in Talkspace. The messages I scraped include automated messages
      from the application itself prompting me to fill out forms and questionaires. Luckily,
      knowing which texts are sent from a human and which are not is also pertinent to the
      application, so Talkspace denotes these different modes of message with a field
      called <code>message_type</code>. This is easily filtered by MongoDB, and immediately
      eliminates around 10% of the messages I downloaded. Hurray! Smaller problem space!
    </p>
    <p>
      I&apos;m providing some code samples in Python from the notebook I used to do the original analysis.
      To see the original Jupyter notebook in Python or R,
      look <b><a href="https://github.com/vaughn-johnson/talkspace-notebooks/">here</a></b>.
    </p>
    <Code
      lang="python"
      text={
`
RELEVANT_MESSAGE_TYPES = [1]
CONNECTION_STRING =
  os.getenv('MONGO_CONNECTION_STRING')

messages = pd.DataFrame([
  *MongoClient(CONNECTION_STRING)\\
    .talkspace\\
    .messages\\
    .find(
      {
        'message_type': {
          '$in': RELEVANT_MESSAGE_TYPES
        }
      }
    )
])`}
    />
    <p>
      The next step is to eliminate redundant or uninformative text from the messages I
      downloaded. It would be basically impossible for eliminate all forms of this, but
      there are a few obvious patterns I know I want to ignore:
    </p>

    <ul>
      <li>
        Talkspace doesn&apos;t have a threaded reply feature, so I tend to quote my therapist at
        the beginning of our messages. Luckily, I always delimit these quotations with a <code>{'>'}</code>.
      </li>
      <li>
        My therpist consistently greets me with <code>Vaughn, ...</code>, and signs off
        with <code>Respectfully, Dallas</code>
      </li>
    </ul>

    <p>
      I can easily remove these instances with some regex. Because I&apos;m only dealing with a few
      hundred kilobytes, I even have the convience of doing it in memory!
    </p>

    <Code
      lang="python"
      text={
`
ARROW_DELIMITER = re.compile('[^-]> ')
EXTRATA = re.compile(
  '(Vaughn,\\n*|Respectfully,\\n*Dallas)'
)
REPEAT_NEWLINES = re.compile('\\n\\n+')

def extract_my_words(msg):
  if not ARROW_DELIMITER.match(msg):
      return msg

  return ''.join(
    re.split(ARROW_DELIMITER, msg)
  )[1:]

def process_message(msg):
  msg = extract_my_words(msg)
  msg = re.sub(EXTRATA, '', msg)
  msg = re.sub(REPEAT_NEWLINES, '\\n', msg)
  return msg

messages.message = messages.message.apply(
  process_message
)
  `
      }
    />

    <p>
      Now that I have some relatively clean text, it&apos;s time to consolidate consecutive messages
      to make analysis simpler. Nearly alwasy, I will respond to my therapist with multiple messages.
      Each individual message is part of a single reponse, but in the data I scraped, they appear
      as individual records. The abstraction I&apos;d like to work with is that each 
      consecutive <i>block</i> of messages from the same person is considered an individual response.
      I can then redefine some basic aspects of these messages in terms of aggregate functions like
      concatenation, minimum, etc.
    </p>
    <Code
      lang="python"
      text={
  `
  # This is critical for rest of the analysis
  messages.sort_values('created_at', axis='rows', inplace=True)

  # This associates consecutive messages (in time) from the same person
  message_block_index = messages\\
                          .user_id\\
                          .ne(messages.user_id.shift())\\
                          .cumsum()

  message_blocks = messages.groupby(message_block_index).agg({
    'message': lambda l: '\\n'.join(l),
    'created_at': min,
    'display_name': 'first'
  })
  `}
    />
    <p>
      Now I can start to come up with some simple features to characterize these messages. The simplest things that immedately
      come to mind are
    </p>
    <ul>
      <li>Message Length</li>
      <li>Word count</li>
      <li>Question Count</li>
      <li><a href="https://en.wikipedia.org/wiki/Flesch%E2%80%93Kincaid_readability_tests#Flesch_reading_ease">Readability</a></li>
    </ul>
    
    <p>
      These are all relatively easy to extract
    </p>
    <Code
      lang="python"
      text={
`
message_blocks['message_length'] =
  message_blocks.message.apply(len)

message_blocks['question_count'] =
  message_blocks.message.apply(
    lambda x: len(re.findall(r'\\?', x))
  )

message_blocks['word_count'] =
  message_blocks.message.apply(
    lambda x: len(re.findall(r'\\s', x)) + 1
  )

message_blocks['readability'] =
  message_blocks.message.apply(
    textstat.flesch_reading_ease
  )
`
}
    />
    <p>
      I can also start to think about some measures of my engagment. The thing that come to mind are
    </p>
    <ul>
      <li>How quickly do I respond to my therapist</li>
      <li>For every day that it takes me to respond, how much am I writing on average?</li>
    </ul>

    <p>
      I can quickly extract those features as well
    </p>
    <Code
      lang="python"
      text={
`
message_blocks =
pd.concat([message_blocks, message_blocks.shift().add_prefix('prev_')], axis='columns')

message_blocks['response_time'] =
(message_blocks.created_at - message_blocks.prev_created_at) \\
  / pd.Timedelta(days=1)

message_blocks['words_per_day'] =
message_blocks['word_count'] / message_blocks['response_time']
`          
      }
    /> 
    <p>
      Great! Now that I have a handful of features to look at, I can start to make some plots!
      I&apos;ll start by plotting the distributions of the featuers I just extracted. 
    </p>

    <p>
      These are the distributions of some featuers that I suspect would affect my responsiveness:
      readability, message length, word count, and question count
    </p>

    {/* ============== Readability ==========================   */}
    <p>
      As you can see, the readability scores follow a roughly normal distribution
    </p>
    <Plot
      hasData={messageData && messageData?.readability?.length}
      layout={{ 
        title: "Flesch Readability Scores",
        xaxis: { title: 'Greater values indicate greater readability', rangemode: 'normal' },
        yaxis: { rangemode: 'normal' },
        barmode: "overlay"
      }}
      data={[
        {
          name: 'Me',
          x: messageData?.readability.filter((_, i) => messageData.display_name[i] == ['Vaughn']),
          type: 'histogram',
          histnorm: 'probability',
          xbins: { size: 5 },
          marker: { color: colors.orange }
        },
        {
          name: 'My therapist',
          x: messageData?.readability.filter((_, i) => messageData.display_name[i] == ['Dallas']),
          type: 'histogram',
          histnorm: 'probability',
          xbins: { size: 5 },
          marker: { color: colors.pink }
        }
      ]}
    />

    <p>
      Question count, message length, and word count all follow
      a roughly exponential distribution
    </p>
  
    {/* ============== Question count ==========================   */}
    <Plot
      hasData={messageData && messageData?.question_count?.length}
      layout={{ 
        title: "Number of questions asked",
        xaxis: { title: 'Count of occurences of "?"', rangemode: 'normal' },
        yaxis: { rangemode: 'normal' },
        barmode: "overlay"
      }}
      data={[
        {
          name: 'Me',
          x: messageData?.question_count.filter((_, i) => messageData.display_name[i] == ['Vaughn']),
          type: 'histogram',
          histnorm: 'probability',
          xbins: { size: 1 },
          marker: { color: colors.orange }
        },
        {
          name: 'My therapist',
          x: messageData?.question_count.filter((_, i) => messageData.display_name[i] == ['Dallas']),
          type: 'histogram',
          histnorm: 'probability',
          xbins: { size: 1 },
          marker: { color: colors.pink }
        }
      ]}
    />

    {/* ============== Message Length ==========================   */}
    <Plot
      hasData={messageData && messageData?.message_length?.length}
      layout={{ 
        title: "Message Length",
        xaxis: { title: 'character count', rangemode: 'normal' },
        yaxis: { rangemode: 'normal' },
        barmode: "overlay",
      }}
      data={[
        {
          name: 'Me',
          x: messageData?.message_length.filter((_, i) => messageData.display_name[i] == ['Vaughn']),
          type: 'histogram',
          histnorm: 'probability',
          xbins: { size: 1000 },
          marker: { color: colors.orange }
        },
        {
          name: 'My therapist',
          x: messageData?.message_length.filter((_, i) => messageData.display_name[i] == ['Dallas']),
          type: 'histogram',
          histnorm: 'probability',
          xbins: { size: 1000 },
          marker: { color: colors.pink }
        }
      ]}
    />
  
    {/* ============== Word Count ==========================   */}
    <Plot
      hasData={messageData && messageData?.word_count?.length}
      layout={{ 
        title: "Word Count",
        xaxis: { title: 'words', rangemode: 'normal' },
        yaxis: { rangemode: 'normal' },
        barmode: "overlay",
      }}
      data={[
        {
          name: 'Me',
          x: messageData?.word_count.filter((_, i) => messageData.display_name[i] == ['Vaughn']),
          type: 'histogram',
          histnorm: 'probability',
          xbins: { size: 100 },
          marker: { color: colors.orange }
        },
        {
          name: 'My therapist',
          x: messageData?.word_count.filter((_, i) => messageData.display_name[i] == ['Dallas']),
          type: 'histogram',
          histnorm: 'probability',
          xbins: { size: 100 },
          marker: { color: colors.pink }
        }
      ]}
    />

    <p>
      The features I &apos;m intersted in explaing (response time and word count per day)
      both show noticeable differences across my therapist &apos;s messages and my own.
      My response times are much more variable, and on average much longer than
      my therapist &apos;s.

    </p>

    {/* ============== Response Time ==========================   */}
    <Plot
      hasData={messageData && messageData?.response_time?.length}
      layout={{ 
        title: "Response Time",
        xaxis: { title: 'days', rangemode: 'normal' },
        yaxis: { rangemode: 'normal' },
        barmode: "overlay"
      }}
      data={[
        {
          name: 'Me',
          x: messageData?.response_time.filter((_, i) => messageData.display_name[i] == ['Vaughn']),
          type: 'histogram',
          histnorm: 'probability',
          xbins: { size: 1 },
          marker: { color: colors.orange }
        },
        {
          name: 'My therapist',
          x: messageData?.response_time.filter((_, i) => messageData.display_name[i] == ['Dallas']),
          type: 'histogram',
          histnorm: 'probability',
          xbins: { size: 1 },
          marker: { color: colors.pink }
        }
      ]}
    />

    {/* ============== Words per day ==========================   */}
    <Plot
      hasData={messageData && messageData?.words_per_day?.length}
      layout={{ 
        title: "Word count in response per time it took to respond",
        xaxis: { title: 'words / day', rangemode: 'normal' },
        yaxis: { rangemode: 'normal' },
        barmode: "overlay"
      }}
      data={[
        {
          name: 'Me',
          x: messageData?.words_per_day.filter((_, i) => messageData.display_name[i] == ['Vaughn']),
          type: 'histogram',
          histnorm: 'probability',
          xbins: { size: 2000 },
          marker: { color: colors.orange }
        },
        {
          name: 'My therapist',
          x: messageData?.words_per_day.filter((_, i) => messageData.display_name[i] == ['Dallas']),
          type: 'histogram',
          histnorm: 'probability',
          xbins: { size: 2000 },
          marker: { color: colors.pink }
        }
      ]}
    />
    <p>
      Now I &apos;d like to look at the relationship between current and previous messages. For example,
      I want to plot the relationship between the readability of a message sent from my therapist
      and the length of my response. If you have trouble reading this plot, you can see a larger,
      zoomable version <a href="https://storage.googleapis.com/vaughn-public-talksapce-data/pair%20plots.png">here</a>.
    </p>
    <Plot
      layout={{
        title: "Pair Plots (orange indicates me, pink indicates my therapist)",
        font: { size: 8 },
      }}
      style={{ height: 700 }}
      hasData={messageData}
      data={[
        {
          type: 'splom',
          opacity: 0.4,
          name: 'Pair plots',
          dimensions: [
            {
              label: 'Prev Readability',
              values: messageData?.prev_readability
            },
            {
              label: 'Response Time (days)',
              values: messageData?.response_time
            },
            {
              label: 'Prev Word Count',
              values: messageData?.prev_word_count
            },
            {
              label: 'Prev Question Count',
              values: messageData?.prev_question_count
            },
            {
              label: 'Words per Day',
              values: messageData?.words_per_day
            }
            
          ],
          marker: {
            color: messageData?.display_name.map((name) => +(name == 'Vaughn')),
            colorscale: [[0, colors.pink], [1, colors.orange]]
          }
        }
      ]}
    />
    <p>
      As you can see from the plots, there is a slight relationship between previous word count and question
      count, which seems plausible. Other than that, there isn &apos;t an obvious relationship anywhere.
    </p>
    <p>
      Finally, I &apos;d like to look at my messages overd time, 
      which should give a sense of how I &apos;ve used the service over the last year
    </p>
    <Plot
      layout={{
        title: "Message lengths over time (size indicates response time)",
      }}
      hasData={messageData}
      data={[
        {
          type: 'scatter',
          name: 'Me',
          x: messageData?.created_at.filter((_, i) => messageData.display_name[i] == ['Vaughn']),
          y: messageData?.message_length.filter((_, i) => messageData.display_name[i] == ['Vaughn']),
          mode: 'markers',
          marker: {
            size: messageData?.response_time.filter((_, i) => messageData.display_name[i] == ['Vaughn'])
                              .map((size) => size + 8),
            color: colors.orange
          }
        },
        {
          type: 'scatter',
          name: 'My therapist',
          x: messageData?.created_at.filter((_, i) => messageData.display_name[i] == ['Dallas']),
          y: messageData?.message_length.filter((_, i) => messageData.display_name[i] == ['Dallas']),
          mode: 'markers',
          marker: {
            size: messageData?.response_time.filter((_, i) => messageData.display_name[i] == ['Dallas'])
                             .map((size) => size + 8),
            color: colors.pink
          }
        }
      ]}
    />
    <p>
      Long gaps in my use of the service. Trends up  or down indicate longer messages are
      being exchanged between my therapist and me.
    </p>
    <p>
      Again, I &apos;ve provided the R and Python notebooks I originally used to do these analyses. If you &apos;d
      like to play with the data yourself, or just get a better view of the plots, I &apos;d
      highly encourage <b><a href="https://github.com/vaughn-johnson/talkspace-notebooks/">checking them out</a></b>.
    </p>
  </Section>
);

ExploringMyData.propTypes = {
  messageData: PropTypes.object
}

export default ExploringMyData; 