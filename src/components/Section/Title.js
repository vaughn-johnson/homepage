import React from 'react';
import * as styles from './styles';
import PropTypes from "prop-types";

const Title = ({ title, subtitle }) => (
  <div>
    <p style={styles.title}>{title}</p>
    <p style={styles.subTitle}>{subtitle}</p>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default Title;