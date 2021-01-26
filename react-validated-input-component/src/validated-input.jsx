import React from 'react';
import { render } from 'react-dom';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.response = {
      messageReq: 'A password is required',
      messageShort: 'Your password is too short',
      default: '',
      iconCheck: 'fas fa-check fa-2x',
      iconX: 'fas fa-times fa-2x'
    }
    this.state = {value: ''}
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  handleChange() {
    this.setState({value: event.target.value})
  }
  validate() {
    if(this.state.value === '' ){
      return this.response.messageReq;
    } else {
      return this.response.messageShort;
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password">Password</label>
        <div className="inputRow">
          <input type="password" id="password" value={this.state.props} onChange={this.handleChange} />
          <i className={this.state.value.length < 8 ? this.response.iconX : this.response.iconCheck}></i>
        </div>
        <p className="message">{this.state.value.length < 8 ? this.validate() : this.response.default}</p>
      </form>
    )
  }
}

export default ValidatedInput;
