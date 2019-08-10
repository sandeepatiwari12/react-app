import React from 'react';

// For Icon and Button Module
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  iconSmall: {
    fontSize: 20
  }
}));
export default function PrimaryButton(props) {
  const classes = useStyles();
  const { variant, size, color, type, btnName } = props;
  return (
    <React.Fragment>
      <Button
        variant={variant}
        size={size}
        color={color}
        type={type}
        className={classes.button}
      >
        <Icon className={classes.leftIcon}>save</Icon>
        {btnName}
      </Button>
    </React.Fragment>
  );
}
