import React, { Component } from 'react';

// For Icon and Button Module
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

export class PrimaryButton extends Component {
  render() {
    const { variant, size, color, type, btnName } = this.props;
    return (
      <React.Fragment>
        <Button variant={variant} size={size} color={color} type={type}>
          <Icon>save</Icon>
          {btnName}
        </Button>
      </React.Fragment>
    );
  }
}

export default PrimaryButton;
