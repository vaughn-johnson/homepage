import React from 'react';
import { HomeButton } from "components/InfoButtons";
import * as styles from './styles';

const SIGNATURE_URL = 'assets/images/signature_white.png'

const Header = () => {
  return (
    <div style={styles.header}>
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