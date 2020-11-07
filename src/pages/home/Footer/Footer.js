import React, { useEffect, useState } from 'react';
import tinygradient from 'tinygradient';
import { colors } from 'styles';
import * as styles from './styles';

const SIGNATURE_URL = "assets/images/signature.png";
const colorValues = [colors.orange, colors.pink];
const step = 1 / 256;

const Footer = () => {
  const [gradientPosition, setGradientPosition] = useState(0.004);
  const [colorIndex, setColorIndex] = useState(1);
  const [gradient, setGradient] = useState(tinygradient([colorValues[0], colorValues[1]]));

  useEffect(() => {
    setTimeout(() => {
      if(gradientPosition + step > 1 ) {
        const startColor = gradient.rgbAt(1);
        const nextColor = colorValues[colorIndex];

        setGradientPosition(0);
        setColorIndex((colorIndex + 1) % colorValues.length); 
        setGradient(tinygradient([startColor, nextColor]));
      } 

      setGradientPosition((gradientPosition + step) % 1)
    }, 15);
  });

  return (
    <div style={styles.footerContainer}>
      <div style={{ margin: '3vw' }}>
        <div
          style={{
            ...styles.imageBackdrop,
            background: `${gradient.rgbAt(gradientPosition)}`
          }}
        >
          <img
            style={styles.image}
            src={SIGNATURE_URL}
            alt="😉"
          />
        </div>
      </div>
    </div>
  )
};

export default Footer;