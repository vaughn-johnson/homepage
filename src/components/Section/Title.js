import React from 'react';
import * as styles from './styles';

const Title = ({ title, subtitle }) => (
  <div>
    <p style={styles.title}>{title}</p>
    <p style={styles.subTitle}>{subtitle}</p>
  </div>
);

export default Title;