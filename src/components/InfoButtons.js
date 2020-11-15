import React, { useState, useEffect } from "react";
import { Button } from "components";
import * as styles from "./styles";
import { FaGithub, FaEnvelope, FaHome } from "react-icons/fa";
import { isMobile } from 'react-device-detect';
import PropTypes from "prop-types";

const PDF_LINK =
  "https://storage.googleapis.com/vaughn-johnson-resume/latest.pdf";
const GITHUB_LINK = "https://github.com/vaughn-johnson/";
const EMAIL_LINK = "mailto:v@ughn.io?subject=When%20can%20you%20start%3F";

const InfoButton = ({ children, ...props }) => {
  return (
    <Button
      style={styles.infoButton}
      variant="contained"
      {...props}
    >
      <div style={styles.infoButtonChildContainer}>
        {children}
      </div>
    </Button>
  );
};

InfoButton.propTypes = {
  children: PropTypes.string.isRequired,
  aspectRatio: PropTypes.number.isRequired,
};

const ResumeButton = () => (
  <InfoButton href={PDF_LINK}>
    Résumé
  </InfoButton> 
);

const GithubButton = () => (
  <InfoButton href={GITHUB_LINK}>
     <FaGithub style={{ paddingRight: 5 }} /> {"   "} Github
  </InfoButton> 
);

const EmailButton = () => (
  <InfoButton href={EMAIL_LINK} >
    <FaEnvelope style={{ paddingRight: 5 }} /> Email
  </InfoButton>
);

const HomeButton = () => (
  <InfoButton href="/" >
    <FaHome style={{ paddingRight: 5 }} /> Home
  </InfoButton>
);


export {
  ResumeButton,
  GithubButton,
  EmailButton,
  HomeButton,
};

export default InfoButton;
