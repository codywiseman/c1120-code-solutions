import React from 'react'

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    console.log(props)
    this.state = {
      isOn: false,
    };
  }
  handleClick() {
    if (!this.state.isOn) {
      this.setState({
        isOn: true,
      })
    } else {
      this.setState({
        isOn: false,
      })
    }
  }
  render() {
    return (
      <div className="container">
        <div onClick={this.handleClick} className={this.props.toggle}>
          <div className={this.props.circle}></div>
        </div>
        <h1>{this.props.label}</h1>
      </div>
    );
  }
}

export default ToggleButton;
