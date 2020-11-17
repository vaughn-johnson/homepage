import React from 'react';
import { HomeButton } from "components/Header/InfoButtons";
import { header } from './styles';

const SIGNATURE_URL = 'assets/images/signature_white.png'

const Header = () => {
  return (
    <div style={header}>
      <div style={{ height: '100%' }}>
        <img style={{ height: "90%" }} src={SIGNATURE_URL} alt="😉" />
      </div>
      <div>
        <HomeButton />
      </div>
    </div>
  )
};

export default Header;