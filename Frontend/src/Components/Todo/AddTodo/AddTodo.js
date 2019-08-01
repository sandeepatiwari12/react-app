import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PrimaryButton from '../../../Shared/Buttons/PrimaryButton/PrimaryButton';
import InputField from '../../../Shared/Inputs/Input/InputField';
export class AddTodo extends Component {
  state = {
    title: ''
  };

  onSubmit = e => {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.state.title);
    this.setState({ title: '' });
  };

  onChange = title => {
    this.setState({ title });
  };

  render() {
    const { title } = this.state;
    const submitBtn = {
      variant: 'outlined', // or we can use contained
      size: 'large',
      color: 'primary',
      type: 'submit',
      btnName: 'Submit'
    };
    const inputField = {
      label: 'Add Todo',
      name: 'title',
      placeholder: 'Enter The Task Name',
      fullWidth: true,
      onChange: this.onChange,
      value: title
    };

    return (
      <div style={{ margin: '1rem 0' }}>
        <form className="row" onSubmit={this.onSubmit}>
          <div className="col-10">
            <InputField {...inputField} />
          </div>
          <div className="col-2">
            <PrimaryButton {...submitBtn} />
          </div>
        </form>
      </div>
    );
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};
export default AddTodo;
