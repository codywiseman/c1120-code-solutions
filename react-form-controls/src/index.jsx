import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {email: ''};
  }
  handleChange(event) {
    this.setState({email: event.target.value })
  }
  handleSubmit(event) {
    event.preventDefault()
    console.log('state:', this.state)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Email:</label>
        <input type="email" onChange={this.handleChange}/>
        <button>Sign Up</button>
      </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
)
