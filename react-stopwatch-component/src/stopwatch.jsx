import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.state = {
      timer: 0,
      isRunning: false
    }
  }
  handleClick() {
    if(!this.state.isRunning) {
      this.setState({isRunning: true});
      this.timerID = setInterval(() => {
        this.setState({timer: this.state.timer + 1})
      }, 1000)
    } else {
      this.setState({isRunning: false});
      clearInterval(this.timerID);
    }
  }
  resetTimer() {
    if(!this.state.isRunning) {
      this.setState({timer: 0})
    }
  }
  render() {
    return (
      <div className="container">
        <div onClick={this.resetTimer} className="circle">
          <div className="number">{this.state.timer}</div>
        </div>
        <div onClick={this.handleClick} className={this.state.isRunning ? this.props.start.pause : this.props.start.play}></div>
      </div>
    );
  }
}

export const pausePlay = {
  pause: "fas fa-pause fa-3x",
  play: "fas fa-play fa-3x"
}

export default StopWatch;
