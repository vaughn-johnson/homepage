import React from "react";
import PropTypes from "prop-types";

const SELFIE_URL = "assets/images/selfie.jpg";

const FaceBadge = ({ imageURL = SELFIE_URL, style }) => (
  <div
    style={{
      borderRadius: "100%",
      overflow: "hidden",
      display: "inherit",
      ...style,
    }}
  >
    <img style={{ height: "100%", width: "100%" }} src={imageURL} alt="😉" />
  </div>
);

FaceBadge.propTypes = {
  imageURL: PropTypes.string,
  style: PropTypes.object,
};

export default FaceBadge;
