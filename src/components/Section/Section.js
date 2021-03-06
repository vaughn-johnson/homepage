import React from 'react';
import Title from './Title';
import { section } from './styles';
import PropTypes from "prop-types";

const Section = ({title, subtitle, children}) => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div style={section}>
      <Title title={title} subtitle={subtitle} />
      {children}
    </div>
  </div>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node
};


export default Section;