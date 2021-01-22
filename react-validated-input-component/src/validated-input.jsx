import React from 'react';
import { render } from 'react-dom';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.response = {
      message: '',
      icon: ''
    }
    this.state = {value: ''}
  }
  handleSubmit(event) {
    event.preventDefault();
    this.validate();
  }
  handleChange() {
    this.setState({value: event.target.value})
  }
  validate() {
    if (this.state.value.length === 0) {
      this.response.icon = 'fas fa-times fa-2x';
      this.response.message = 'A password is required';
    } if (this.state.value.length < 8 && this.state.value.length > 0) {
      this.response.icon = 'fas fa-times fa-2x';
      this.response.message = 'Your password is too short';
    } if (this.state.value.length > 8) {
      this.response.icon = 'fas fa-check fa-2x';
      this.response.message = '';
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password">Password</label>
        <div className="inputRow">
          <input type="password" id="password" value={this.state.props} onChange={this.handleChange} />
          <i className={this.response.icon}></i>
        </div>
        <p className="message">{this.response.message}</p>
      </form>
    )
  }
}

export default ValidatedInput;
