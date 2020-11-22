import React from 'react';
import { HomeButton } from "components/Header/InfoButtons";
import { header } from './styles';
import signature from 'assets/images/signature_white.png';

const Header = () => {
  return (
    <div style={header}>
      <div style={{ height: '100%' }}>
        <a href="/">
          <img style={{ height: "90%" }} src={signature} alt="😉" />
        </a>
      </div>
      <div>
        <HomeButton />
      </div>
    </div>
  )
};

export default Header;