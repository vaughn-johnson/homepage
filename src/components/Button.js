import React from "react";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

// TODO: Reimplement this to pass
// styles as props
const styles = {
  root: {
    background: "white",
    borderRadius: 3,
    border: 0,
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
};

function ClassNames(props) {
  const { classes, children, className, ...other } = props;

  return (
    <Button className={clsx(classes.root, className)} {...other}>
      {children}
    </Button>
  );
}

ClassNames.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
};

export default withStyles(styles)(ClassNames);
