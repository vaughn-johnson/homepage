import React from 'react';
import { HomeButton } from "components/Header/InfoButtons";
import { header } from './styles';
import signature from 'assets/images/signature_white.png';

const Header = () => {
  return (
    <div style={header}>
      <div style={{ height: '100%' }}>
        <img style={{ height: "90%" }} src={signature} alt="😉" />
      </div>
      <div>
        <HomeButton />
      </div>
    </div>
  )
};

export default Header;