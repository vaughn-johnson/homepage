import React from 'react';
import { Section } from 'components';

const Conclusion = () => (
  <Section
    title="Conclusion"
    subtitle="Takeaways and next steps"
  >
    <p>
      The biggest takeaway I got from this analysis was that my therapist can
      be fairly assured that my responsiveness is not a function of his
      messages&apos; sentence structure, length, or how many questions he&apos;s addressing
      to me. I also took away that the &quot;velocity&quot; of my message writing seems to
      vary a lot. If you look at the residuals plot for message length over
      response time, you can clearly see two outliers. I looked up both of those
      messages, and the content and context of those messages wasn&apos;t particuarly
      special or interesting. This indicates to me that whatever mechanism there is
      that causes me to sometimes reduce my engagment with Talkspace, it&apos;s more complicated
      and nuanced that the factors I looked at here.
    </p>
    <p>
      With that being said, the next thing I&apos;d like to do is build a language model to
      actually consider the linguistic content of my data. Even something as simple
      as <a href="https://www.wikiwand.com/en/Tf%E2%80%93idf">TF-IDF</a> could help pick up on
      signals that might be missed by my therapist. I&apos;d also like to integrate some
      other sources of data on myself that I have, including running and nutrition.
    </p>
  </Section>
);

export default Conclusion;