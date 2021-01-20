import React from 'react'

class ToggleButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOn: false,
      label: 'OFF',
      toggle: 'toggle-btn toggleOff',
      circle: 'circle circleOff'
    };
  }
  handleClick() {
    if (!this.state.isOn) {
      this.setState({
        isOn: true,
        label: 'ON',
        toggle: 'toggle-btn toggleOn',
        circle: 'circle circleOn'
      })
    } else {
      this.setState({
        isOn: false,
        label: 'OFF',
        toggle: 'toggle-btn toggleOff',
        circle: 'circle circleOff'
      })
    }
  }
  render() {
    return (
      <div className="container">
        <div onClick={this.handleClick} className={this.state.toggle}>
          <div className={this.state.circle}></div>
        </div>
        <h1>{this.state.label}</h1>
      </div>
    );
  }
}

export default ToggleButton;
