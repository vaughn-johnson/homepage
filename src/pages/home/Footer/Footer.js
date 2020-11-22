import React from 'react';
import * as styles from './styles';
import Signature from 'assets/images/signature_invert.png';

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={{ margin: '3vw' }}>
        <div
          style={styles.imageBackdrop}>
          <img
            style={styles.image}
            src={Signature}
            alt="Vaughn Johnson"
          />
        </div>
      </div>
    </div>
  )
};

export default Footer;