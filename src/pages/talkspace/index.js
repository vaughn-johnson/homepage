import React from 'react';
import { TitleCard, Header } from 'components';
import {
  Introduction,
  GettingTheData
} from './sections';

const Talkspace = () => (
  <div>
    <Header />
    <TitleCard image='assets/images/talkspace/pills.jpg'>Mining my own therapy data</TitleCard>
    <Introduction />
    <GettingTheData />
  </div>
);

export default Talkspace;

