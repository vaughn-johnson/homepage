import React from 'react';
import { title as titleStyle, subTitle as subTitleStyle } from './styles';
import PropTypes from "prop-types";

const Title = ({ title, subtitle }) => (
  <div>
    <p style={titleStyle}>{title}</p>
    <p style={subTitleStyle}>{subtitle}</p>
  </div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.element
};

export default Title;