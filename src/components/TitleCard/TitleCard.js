import React from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import PropTypes from "prop-types";
import { blurryTextBox } from './styles';

const BlurryTextBox = ({ children }) => (
  <div style={blurryTextBox}>
    {children}
  </div>
);

BlurryTextBox.propTypes = {
  children: PropTypes.string.isRequired,
};

const TitleCard = ({ children, image }) => (
  <ParallaxBanner
    layers={[{ image, amount: -0.9 }]}
    style={{ height: 'calc(30vw + 50px)' }}
  >
    <BlurryTextBox>{children}</BlurryTextBox>
  </ParallaxBanner>
);

TitleCard.propTypes = {
  children: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};


export default TitleCard;