import React from 'react';
import FaceBadge from "./FaceBadge";
import * as styles from './styles';


const Greeting = () => (
  <div style={styles.greetingContainer}>
    <div style={styles.greetingText}>{"Hi, I'm Vaughn!"}</div>

    <div style={styles.faceBadgeContainer}>
      <FaceBadge style={{ ...styles.border }} />
    </div>
  </div>
);

export default Greeting;