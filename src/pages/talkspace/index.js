import React, { useEffect, useState } from 'react';
import { TitleCard, Header } from 'components';
import {
  Introduction,
  GettingTheData,
  ExploringMyData
} from './sections';
import axios from 'axios';

const TALKSPACE_DATA_API_URL = 'https://us-central1-talkspace-293821.cloudfunctions.net/talkspace-public-api';

const Talkspace = () => {
  const [messageData, setMessageData] = useState(null);

  useEffect(() => {
    if(!messageData) getMessageData();
  });

  const getMessageData = async () => {
    if(messageData) return messageData;

    try {
      const messages = await axios.get(TALKSPACE_DATA_API_URL + '?format=json');
      const messageData = {};

      for(let index in messages.data) {
        let message = messages.data[index];
        for(let field in message) {
          if(!messageData[field]) messageData[field] = [];
          messageData[field].push(message[field]);
        }
      }
      setMessageData(messageData);
    } catch(e) {
      setMessageData(null); 
    }
  };

  return (
    <div>
      <Header />
      <TitleCard image='assets/images/talkspace/pills.jpg'>
        Mining my own therapy data
      </TitleCard>
      <Introduction />
      <GettingTheData />
      <ExploringMyData messageData={messageData} />
    </div>
  );
}

export default Talkspace;
