import React from 'react';
import Plot from 'react-plotly.js';
import * as plotlyStyles from './plotlyStyles';
import PropTypes from "prop-types";
import * as styles from './styles';

const UhOh = () => (
  <div style={styles.errorMessage}>
    😞 Failed to load external data!
  </div>
);

const WrappedPlot = ({ hasData, ...props }) => {
  if(hasData) {
    const layout = {
      ...plotlyStyles.font,
      autosize: true,
      ...props.layout
    }
    return (
      <div style={{ paddingTop: '3vh', paddingBottom: '3vh', maxWidth: '90vw' }}>
        <Plot style={{ width: '100%' }} {...{...props, layout, useResizeHandler: true }} />
      </div>
    );
  }
  return (<UhOh />);
};

Plot.propTypes = {
  hasData: PropTypes.bool,
}

export default WrappedPlot; 