import React from 'react';
import * as styles from './styles';
import Signature from 'assets/images/signature_invert.png';

const Footer = () => {
  return (
    <div style={styles.footerContainer}>
      <div style={{ margin: '3vw' }}>
        <a href="https://www.youtube.com/watch?v=FXbEoAqkU8M">
          <div
            style={styles.imageBackdrop}>
            <img
              style={styles.image}
              src={Signature}
              alt="Vaughn Johnson"
            />
          </div>
        </a>
      </div>
    </div>
  )
};

export default Footer;