import React from 'react';
import Loadable from 'react-loadable';
import BarLoader from 'react-spinners/BarLoader';

const Plotly = Loadable({
  loader: () => import(`react-plotly.js`),
  /* eslint-disable-next-line no-alert, react/display-name,  react/prop-types */
  loading: ({ timedOut }) =>
    timedOut ? (
      <blockquote>Error: Loading Plotly timed out.</blockquote>
    ) : (
      <BarLoader />
    ),
  timeout: 1000,
});

const LazyPlot = (props) => (
  <Plotly {...props} />
);

export default LazyPlot;