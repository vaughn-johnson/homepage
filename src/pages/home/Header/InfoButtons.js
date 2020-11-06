import React, { useState, useEffect } from "react";
import Button from "components/Button";
import * as styles from "./styles";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { isMobile } from 'react-device-detect';
import PropTypes from "prop-types";

const PDF_LINK =
  "https://storage.googleapis.com/vaughn-johnson-resume/latest.pdf";
const GITHUB_LINK = "https://github.com/vaughn-johnson/";
const EMAIL_LINK = "mailto:v@ughn.io?subject=When%20can%20you%20start%3F";
const SMOL_WINDOW = 800;

const InfoButton = ({ children, alignButtonsVertically, ...props }) => {
  const margin = alignButtonsVertically ? "1vw" : "3vw";

  return (
    <div style={{
      flex: 1,
      display: "flex",
    }}>
      <Button
        style={{
          margin,
          fontSize: isMobile ? '4vw' : '1.5vw',
          padding: isMobile ? '4vw' : '2vw',
          ...styles.infoButton
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

  const alignButtonsVertically = isMobile || aspectRatio < 1 || window.innerWidth < SMOL_WINDOW;

  const flexDirection = alignButtonsVertically ?  "column" : "row"; 

  return (
    <div style={{ ...styles.infoButtons, flexDirection }}>
      <InfoButton href={PDF_LINK} alignButtonsVertically={alignButtonsVertically}>
        Resume
      </InfoButton>

      <InfoButton href={GITHUB_LINK} alignButtonsVertically={alignButtonsVertically}>
        <FaGithub style={{ paddingRight: 5 }} /> {"   "} Github
      </InfoButton>

      <InfoButton href={EMAIL_LINK} alignButtonsVertically={alignButtonsVertically}>
        <FaEnvelope style={{ paddingRight: 5 }} /> Email
      </InfoButton>
    </div>
  );
};

InfoButton.propTypes = {
  alignButtonsVertically: PropTypes.boolean,
};

export default InfoButtons;
