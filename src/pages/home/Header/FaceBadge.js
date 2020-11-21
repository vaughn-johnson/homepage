import React from "react";
import PropTypes from "prop-types";
import Selfie from 'assets/images/selfie.jpg';

const FaceBadge = ({ style }) => (
  <div
    style={{
      borderRadius: "100%",
      overflow: "hidden",
      display: "inherit",
      ...style,
    }}
  >
    <img style={{ height: "100%", width: "100%" }} src={Selfie} alt="😉" />
  </div>
);

FaceBadge.propTypes = {
  style: PropTypes.object,
};

export default FaceBadge;
