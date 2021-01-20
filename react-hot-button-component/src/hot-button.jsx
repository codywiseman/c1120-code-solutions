import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getButtonColor = this.getButtonColor.bind(this);
    this.state = {
      clickCount: 1,
      boxColor: 'button noClicks'
    };
  }
  handleClick() {
    this.setState({clickCount: this.state.clickCount + 1})
    this.getButtonColor();
  }
  getButtonColor() {
    if (this.state.clickCount >= 3 && this.state.clickCount < 6) {
      this.setState({boxColor: 'button firstClicks'});
    } else if (this.state.clickCount >= 6 && this.state.clickCount < 9) {
      this.setState({ boxColor: 'button secondClicks' });
    } else if (this.state.clickCount >= 9 && this.state.clickCount < 12) {
      this.setState({ boxColor: 'button thirdClicks' });
    } else if (this.state.clickCount >= 12 && this.state.clickCount < 15) {
      this.setState({ boxColor: 'button fourthClicks' });
    } else if (this.state.clickCount >= 15 && this.state.clickCount < 18) {
      this.setState({ boxColor: 'button fifthClicks' });
    } else if (this.state.clickCount >= 18) {
      this.setState({ boxColor: 'button sixthClicks' });
    }
  }
  render() {
    return (
      <button onClick={this.handleClick} className={this.state.boxColor}>Hot Button</button>
    );
  }
}

export default HotButton;
