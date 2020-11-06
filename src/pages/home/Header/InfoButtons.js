import React, { useState, useEffect } from "react";
import Button from "components/Button";
import { infoButtons, infoButton } from "./styles";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import PropTypes from "prop-types";

const PDF_LINK =
  "https://storage.googleapis.com/vaughn-johnson-resume/latest.pdf";
const GITHUB_LINK = "https://github.com/vaughn-johnson/";
const EMAIL_LINK = "mailto:v@ughn.io?subject=When%20can%20you%20start%3F";

const InfoButton = ({ children, aspectRatio, ...props }) => {
  const margin = aspectRatio > 1 ? "3vw" : "1em";

  return (
    <div style={infoButton}>
      <Button
        style={{
          margin,
          flex: 1,
          color: "#65219D",
          fontFamily: "Poppins",
          justifyContent: "space-between",
        }}
        variant="contained"
        {...props}
      >
        {children}
      </Button>
    </div>
  );
};

InfoButton.propTypes = {
  children: PropTypes.string.isRequired,
  aspectRatio: PropTypes.number.isRequired,
};

const InfoButtons = () => {
  const [aspectRatio, setAspectRatio] = useState(0);

  const handleResize = () => {
    setAspectRatio(window.innerWidth / window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
  });

  const flexDirection = aspectRatio < 1 ? "column" : "row";

  return (
    <div style={{ ...infoButtons, flexDirection }}>
      <InfoButton href={PDF_LINK} aspectRatio={aspectRatio}>
        Resume
      </InfoButton>

      <InfoButton href={GITHUB_LINK} aspectRatio={aspectRatio}>
        <FaGithub style={{ paddingRight: 5 }} /> {"   "} Github
      </InfoButton>

      <InfoButton href={EMAIL_LINK} aspectRatio={aspectRatio}>
        <FaEnvelope style={{ paddingRight: 5 }} /> Email
      </InfoButton>
    </div>
  );
};

export default InfoButtons;
