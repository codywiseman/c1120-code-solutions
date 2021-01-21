import React from 'react'

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
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
        <div onClick={this.handleClick} className={this.state.isOn ? this.props.toggleOn : this.props.toggleOff}>
          <div className={this.state.isOn ? this.props.circleOn : this.props.circleOff}></div>
        </div>
        <h1>{this.state.isOn ? this.props.labelOn : this.props.labelOff}</h1>
      </div>
    );
  }
}

export default ToggleButton;
