import React from 'react';
import Plot from 'components/Plotly';
import BarLoader from 'react-spinners/BarLoader';
import * as plotlyStyles from './plotlyStyles';
import PropTypes from "prop-types";
import * as styles from './styles';

const UhOh = () => (
  <div style={styles.errorMessage}>
    😞 Failed to load external data!
  </div>
);

const WrappedPlot = ({ loading, loadFailed, ...props }) => {
  if(loading) return (
    <div style={styles.loadingContainer}>
      <BarLoader />
    </div> 
  );

  if(loadFailed) return (<UhOh />);
  
  const layout = {
    ...plotlyStyles.font,
    autosize: true,
    ...props.layout
  }

  const data = props.data.map((datum) => ({ opacity: 0.7, ...datum }));

  return (
    <div style={{ paddingTop: '3vh', paddingBottom: '3vh', maxWidth: '90vw' }}>
      <Plot style={{ width: '100%' }} {...{...props, data, layout, useResizeHandler: true }} />
    </div>
  );
};

WrappedPlot.propTypes = {
  loading: PropTypes.bool,
  loadFailed: PropTypes.bool,
  data: PropTypes.array,
  layout: PropTypes.object
}

export default WrappedPlot; 