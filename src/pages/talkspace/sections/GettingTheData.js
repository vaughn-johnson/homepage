import React from 'react';
import { Section, CaptionedImage } from 'components';
import BlurredMessages from 'assets/images/talkspace/blurred-messages.png';
import NetworkTab from 'assets/images/talkspace/network-tab.png';
import Postman from 'assets/images/talkspace/postman.png';



const GettingTheData = () => (
  <Section
    title='Getting the Data'
    subtitle='How I got, and how you can too'
  >
    <p>
      Now that I have a relatively clear picture of questions I&apos;m trying to answer,
      I need to actually get my data. Talkspace has no button to download all of your
      data (To be totally candid, there probably <i>ought</i> to be one, but I dream).
      Another option is writing a utility that would parse the data from an HTML document.
      I checked, and it wasn&apos;t particularly hard to scroll to the beginning of my message
      history, and I could write something using selenium or detox to automatically
      scroll to the beginning. However, this approach isn&apos;t ideal
      for two main reasons:
    </p>
    <ol>
      <li>
        There is a lot of complexity to take on to write a <b>fragile</b> automated
        worker to run through the UI and scrape my data for me, and having that features
        seems crucial for this project to be useful to other people
      </li>
      <li>
        The HTML representation does not match up very with the abstraction I&apos;m trying
        to work with, which is individual messages with consistent fields {'like '}
        <code>author</code>{' or '}<code>created_at</code>.
      </li>
    </ol>
    
    <CaptionedImage
      src={BlurredMessages}
      caption="The HTML has totally distinct concerns from what I'm trying to do"
    />

    <p>
      So, abandoning that idea, I think it makes sense to try to call Talkspace&apos;s API directly.

      I can figure out what endpoints to hit by watching what calls the application makes using
      the network tab in Chrome,
    </p>

    <CaptionedImage
      src={NetworkTab}
      caption="I can see what calls the application makes"
    />

    and then I can try to replicate the procedure the application uses through trial and error
    in an application like Postman
      
    <CaptionedImage
      src={Postman}
      caption="The results of trial and error: a successful call to Talkspace"
    />
    <p>
      Now that I have that working, I can build a tool that anyone can use to scrape his
      or her data. That tool is
      available <a href="https://github.com/vaughn-johnson/talkspace-scraper">here</a> and
      this is what it looks like:
    </p>
    
    <a href="https://asciinema.org/a/370236">
      <img src="https://asciinema.org/a/370236.svg" style={{ width: '100%' }} />
    </a>

    <p>
      It scrapes all of the messages you&apos;ve exchanged with your therapist in the form
      of an array of JSON objects that all share consistent keys such
      as <code>display_name</code>, <code>created_at</code>, etc. . The tool provides
      the option to save your data to a local file or to a MongoDB instance.
    </p>

    <p>
      Now that I have my data, I want to be able to show you, the audience reading this, some
      of the interesting things I found. However, I <i>obviously</i> don&apos;t want to reveal
      my entire message history with my personal therapist to the open internet. I am,
      however, comfortable sharing <i>some</i> information, such as how often I send messages
      and how long my messages are. With that in mind, I built a public API that takes requests
      for my scraped messages, extracts relevant features I&apos;m comfortable sharing, and
      responds with the results in JSON. I&apos;ll explain the specific features I&apos;m extracting
      below, but the API is how I&apos;ll access my data here. I&apos;m hosting the API in a serverless framework
      called <a href="https://cloud.google.com/functions">Google Cloud Functions</a>.
      You can view the source code running there
      at <a href='https://github.com/vaughn-johnson/talkspace-public-api'>my Github</a> and
      you can use the API
      yourself <a href="https://us-central1-talkspace-293821.cloudfunctions.net/talkspace-public-api">here</a> (results
      are cached once a day).
    </p>
    
  </Section>
);

export default GettingTheData;