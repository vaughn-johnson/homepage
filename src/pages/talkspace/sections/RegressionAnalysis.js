import React from 'react';
import { Section, Plot, CaptionedImage } from 'components';
import { colors } from 'styles';
import PropTypes from "prop-types";
import MessageLengthResults from 'assets/images/talkspace/message-length-results.png';
import MessageLengthResiduals from 'assets/images/talkspace/message-length-residuals.png';
import ResponseTimeResults from 'assets/images/talkspace/response-time-results.png'; 
import ResponseTimeResiduals from 'assets/images/talkspace/response-time-residuals.png'; 
import ResponseVelocityResults from 'assets/images/talkspace/response-velocity-results.png'; 
import ResponseVelocityResiduals from 'assets/images/talkspace/response-velocity-residuals.png'; 

const RegressionAnalysis = ({ messageData, loading, loadFailed }) => (
  <Section
    title='Regression Analysis'
    subtitle="Do my therapist's messages affect my engagement?"
  >
    <p>
      I want to develop a model that explains my engagement. I think an imperfect but at
      least obvious and accessible proxy is my responsiveness. I have a simple hypothesis:
      I tend to be overwhelmed by long messages that are hard to read and
      contain lots of questions. Specificaly, I think I tend to take longer to respond,
      and have less to say. If I had to take a guess, I would assume that these would have
      a roughly linear relationship. That is, I imagine for every additional question my
      therapist asks me, I take some additional unit time to respond. With that kind of model,
      linear regression seems like an obvious choice to test my hypothesis.
    </p>
    <p>
      To be clear, this data is not perfectly suited for linear regression. The response variables
      I&apos;m interested in does not appear to be normally distributed with any of its covariates,
      and the covariants aren&apos;t perfectly non-collinear. The observations are obviously not independent
      (though my response time, message length, and message length over response time don&apos;t seem
      to show any obvious autocorrelation). However, I think it&apos;s still worth taking a look.
    </p>

    <p>
      The way I see it, I think I have three explanatory varaibles and three response variables.
      My response variables are 
    </p>
    <ol>
      <li>Response time</li>
      <li>Message length</li>
      <li>Message length per unit response time </li>
    </ol>

    My explanatory variables are
    <ol>
      <li>Previous message readability</li>
      <li>Previous message length</li>
      <li>Previous message question count</li>
    </ol>

    <p>
      At this point, it&apos;s farily easy to set up three regressions for my three response
      variables. Let&apos;s first look at message length. I&apos;ll fit a model, look at some 
      results and some diagnotistic plots.
    </p>
  
    <CaptionedImage
      src={MessageLengthResults}
    />

    <p>
      The first thing I notice from these results is that this model is not a very good
      fit. The R squared is very low. Sure, I have some significant results, but 
      statistical significance is a test of sample size, not whether my model is
      appropriate. Looking to a plot of the residuals is a <i>clear</i> indication
      the relationship between my features and response is non-linear
    </p>

    <CaptionedImage
      src={MessageLengthResiduals}
    />
    
    <p>
      Looking at the outcomes of response time and message length over response time produce
      similarly poor fits with clearly patterned residual plots
    </p>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around'}}>
      <div>
        <CaptionedImage
          src={ResponseTimeResults}
        />
        <CaptionedImage
          src={ResponseTimeResiduals}
        />
      </div>
      <div>
        <CaptionedImage
          src={ResponseVelocityResults}
        />
        <CaptionedImage
          src={ResponseVelocityResiduals}
        /> 
      </div>
    </div>
    <p>
      While these results aren&apos;t particularly spectacular, they&apos;re still informative.
      We can say pretty confidently that there isn&apos;t an obvious linear relationship
      between any of the measurements of engagment I have and the messages from my
      therapist. It also gives great indications for areas to look at next. For both
      response time and message length, there is a statistically significant relationship
      with the length of my therapist&apos;s messages, but that relationship doesn&apos;t show
      up when I regress on the ratio of those two values. While the effect isn&apos;t very
      strong, and certainly isn&apos;t linear, there&apos;s definitley <i>something</i> there.
      This is probably an indication that my response times and message lengths are
      positively correlated, which is why their ratio doesn&apos;t have any significant
      covariates.
    </p>
    <Plot
      loading={loading}
      loadFailed={loadFailed}
      layout={{ 
        title: "Time for me to write a message vs. how long it is",
        xaxis: { title: 'days', rangemode: 'normal' },
        yaxis: { title: 'character count', rangemode: 'normal' },
        trendline: 'ols'
      }}
      data={[
        {
          y: messageData?.message_length.filter((_, i) => messageData.display_name[i] == ['Vaughn']),
          x: messageData?.response_time.filter((_, i) => messageData.display_name[i] == ['Vaughn']),
          type: 'scatter',
          mode: 'markers',
          marker: { color: colors.orange },
          trendline: 'ols'
        },
      ]}
    />

  </Section>
);

RegressionAnalysis.propTypes = {
  messageData: PropTypes.object,
  loading: PropTypes.bool,
  loadFailed: PropTypes.bool
};

export default RegressionAnalysis; 