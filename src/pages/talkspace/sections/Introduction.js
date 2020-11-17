/* react/no-unescaped-entities */
import React from 'react';
import { Section } from 'components';

const Introduction = () => (
  <Section
    title='Introduction'
    subtitle='What am I trying to understand?'
  >
    <p>
      First, some context: About a year and a half ago, I was feeling deeply unwell. I had just graduated
      college, started my first job, and the gravity of being the custodian of my own life was weighing
      heavily on me. I had experienced depressive episodes like this before and had sought professional
      help. Previously, through my university, I started seeing a therapist and started a
      course of antidepressants which provided some modest benefit. However, after I graduated 
      those university resources went away, and I was now feeling worse than I had ever felt before.
    </p>
    <p>
      If you&apos;re familiar with depression, you know it can be quite difficult to follow through with
      anything, especially self-care. The process of finding a new therapist and psychiatrist felt
      insurmountable, but as time went on, my symptoms were getting worse. Eventually, I decided to
      try something new, so I signed up for online therapy through a service {'called '}
      <a href="https://www.talkspace.com/">Talkspace</a>.
    </p>
    <p>
      I have been using the service for about a year, and over that time, I&apos;ve seen meaningful improvment
      to my mood and quality of life (even in the midst of a global pandemic). However, I&apos;ve noticed it&apos;s
      sometimes hard for me to stay engaged. I&apos;ve gone through long periods of radio silence with my
      therpist, and I suspect that that has been an impediment. <a href="http://dx.doi.org/10.3389/fpsyg.2015.02013">Patient engagement</a>
      {' is'} critical to developing a therapeutic relationship, so if I can increase my own responsiveness,
      I might increase the efficacy of my therapy.
    </p>
    <p>
      That brings me to the first thing I want to understand: <b>How enganged and responsive am I to my therapist?</b>.
      With my own data, I can gain some insight into how long it takes me to respond, and how long those responses are.
      Ideally, I could develop a model that could estimate my engagement based on the actual language I send (or
      don&apos;t send), but I don&apos;t have any &quot;ground truth&quot; with which to build a supervised model with (and
      it&apos;s unclear to me what an unsupervised version of an engagment model would even look like), so I&apos;ll have
      to use my own naive, intutive measures of engagemnt.
    </p>
    <p>
      Once I have a way of measuring my engagment, I want to answer a deeper {'question: '}
      <b>What explains my responsiveness or engagement with my therapist?</b> If I can find some simple
      relationship between something I can change and how engaged I am, I have a lever to pull. It would be
      fabulous to be able to characterize something about my therapist&apos;s messages that causes me to engage. That&apos;s
      valuable information not just for me, but for my therapist. Moreso, if I find an effect that
      generalizes to other people, then I could potentially not only help my therapist&apos;s <i>other</i> clients,
      but an enourmous and growing pool of people who used texted based therapy.
    </p>
    <p>
      The last thing I want to look at is: <b>Can I tell a difference in my messages over time, and what is that
      difference?</b> If I could build a classifier that could, for example, distinguish before and after
      I restarted a course of antidepressants (which has helped me tremendously), I might gain some insight
      into what the internal change was. I don&apos;t have access to my historical mood data, but if I did, I would 
      really want to know if I could meaningfully estimate what my <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1495268/">PHQ-9</a>
      {' score'} was on a particular day based on a message. When I asked my therapist what kinds of things
      he would be interseted in investigating, he brought up detecting suicidal ideation. Like the 
      question, I don&apos;t have any ground truth to build a model from, but this question really interests me, too. 
    </p>
  </Section>
);

export default Introduction;