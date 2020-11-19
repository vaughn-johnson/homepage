import React from "react";
import { Button } from "components";
import { infoButton, infoButtonChildContainer } from "./styles";
import { FaGithub, FaEnvelope, FaHome } from "react-icons/fa";
import PropTypes from "prop-types";

const PDF_LINK =
  "https://storage.googleapis.com/vaughn-johnson-resume/latest.pdf";
const GITHUB_LINK = "https://github.com/vaughn-johnson/";
const EMAIL_LINK = "mailto:v@ughn.io?subject=When%20can%20you%20start%3F";

const InfoButton = ({ children, ...props }) => {
  return (
    <div>
      <Button
        style={infoButton}
        variant="contained"
        {...props}
      >
        <div style={infoButtonChildContainer}>
          {children}
        </div>
      </Button>
    </div>
  );
};

InfoButton.propTypes = {
  children: PropTypes.node.isRequired,
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
