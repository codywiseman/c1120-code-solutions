import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleIcon = this.handleIcon.bind(this);
    this.state = {value: ''}
    console.log(props)
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state)
  }
  handleChange() {
    this.setState({value: event.target.value})
  }
  handleIcon () {
    if(this.state.value.length > 8) {
      return this.props.message.successIcon;
    } else {
      return this.props.message.failIcon;
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="password">Password</label>
        <div className="inputRow">
          <input type="password" id="password" value={this.state.props} onChange={this.handleChange} />
          <i className={this.handleIcon}></i>
        </div>
        <p className="message"></p>
      </form>
    )
  }
}

export const message = {
  noPassword: 'A password is required',
  tooShort: 'Your password is too short',
  failIcon: 'fas fa-times fa-2x',
  successIcon: 'fas fa-check fa-2x'
}

export default ValidatedInput;
