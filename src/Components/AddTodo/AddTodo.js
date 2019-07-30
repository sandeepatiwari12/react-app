import React, { Component } from 'react';

export class AddTodo extends Component {
  state = {
    title: ''
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div style={{ margin: '1rem 0' }}>
        <form className="row" onSubmit={this.onSubmit}>
          <div className="col-10">
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Add todo..."
              value={this.state.title}
              onChange={this.onChange}
            />
          </div>
          <div className="col-2">
            <button
              type="submit"
              className="btn btn-outline-primary btn-sm btn-block"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
