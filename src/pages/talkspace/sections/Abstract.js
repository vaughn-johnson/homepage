import React from 'react';
import { Section } from 'components';

const Abstract = () => (
  <Section title='Abstract'>
    <p>
      In this blog post I explore my own data from the online therapy
      platform Talkspace. I explain how I acquired my data and
      how <a href="https://github.com/vaughn-johnson/talkspace-scraper">others can acquire
      their own</a>. I describe how I extract some features from my data,
      and make those features from my own data available
      via <a href="https://github.com/vaughn-johnson/talkspace-public-api">a public API</a>.
      I plot my data and do a
      basic <a href="https://github.com/vaughn-johnson/talkspace-notebook">regression analysis</a> to
      test if there
      is a relationship between the length and complexity of the messages
      my therapist sends me and the length and response time of my own messages.
      I find that there is a very weak linear relationship between the length of
      my therapist&apos;s messages and my response time, but this does not affect my 
      velocity (that is, the length of my messages per unit time that I take to
      respond). This suggests that the messages I am responding to have a 
      limited impact on my own level of activity on the Talkspace platform.
    </p> 
  </Section>
);

export default Abstract;