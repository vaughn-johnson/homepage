import React from 'react';
import { TitleCard, Header } from 'components';
import {
  Introduction
} from './sections';

const Talkspace = () => (
  <div>
    <Header />
    <TitleCard image='assets/images/talkspace/pills.jpg'>Mining my own therapy data</TitleCard>
    <Introduction />
  </div>
);

export default Talkspace;

