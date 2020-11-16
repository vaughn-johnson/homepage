import React from 'react';
import Title from './Title';
import * as styles from './styles';

const Section = ({title, subtitle, children}) => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div style={styles.section}>
      <Title title={title} subtitle={subtitle} />
      {children}
    </div>
  </div>
);

export default Section;