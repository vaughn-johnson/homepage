import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import * as styles from './styles';
import PropTypes from "prop-types";

const CaptionedImage = ({ src, caption }) => (
  <div style={styles.container}> 
    <Zoom>
      <img src={src} style={styles.image} />
    </Zoom>
    <p style={styles.caption}>{caption}</p>
  </div>
);


CaptionedImage.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default CaptionedImage;