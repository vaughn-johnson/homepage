import React from 'react';
import * as styles from './styles';

const SIGNATURE_URL = "assets/images/signature_invert.png";

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={{ margin: '3vw' }}>
        <div
          style={styles.imageBackdrop}>
          <img
            style={styles.image}
            src={SIGNATURE_URL}
            alt="Vaughn Johnson"
          />
        </div>
      </div>
    </div>
  )
};

export default Footer;