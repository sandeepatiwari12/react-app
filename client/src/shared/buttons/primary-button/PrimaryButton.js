import React from "react";

// For Icon and Button Module
import Button from "../button/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));
export default function PrimaryButton(props) {
  const classes = useStyles();
  const { btnName } = props;
    // variant, size, , type, btnName } = props;
  return (
    <React.Fragment>
      <Button 
      className={classes.button} primary>{btnName}</Button>
    </React.Fragment>
  );
}
