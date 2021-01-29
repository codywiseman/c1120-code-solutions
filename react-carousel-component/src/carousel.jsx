import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.pokemon = {
      1: "images/001.png",
      2: "images/004.png",
      3: "images/007.png",
      4: "images/025.png",
      5: "images/039.png"
    };
    this.intervalId = {
      interval: setInterval(() => {
        this.setState({ activePokeId: this.state.activePokeId + 1 })
        if (this.state.activePokeId === 5) {
          this.setState({ activePokeId: 1 })
        }
      }, 3000)
    }
    this.state = {
      activePokeId: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.intervalId.interval;
  }
  handleClick() {
    if(event.target.id === 'prev') {
      this.setState({activePokeId: this.state.activePokeId - 1})
    } else if (event.target.id === 'next') {
      this.setState({ activePokeId: this.state.activePokeId + 1 })
    } else if (event.target.id === 'first') {
      this.setState({ activePokeId: 1})
    } else if (event.target.id === 'second') {
      this.setState({ activePokeId: 2 })
    } else if (event.target.id === 'third') {
      this.setState({ activePokeId: 3 })
    } else if (event.target.id === 'fourth') {
      this.setState({ activePokeId: 4 })
    } else if (event.target.id === 'fifth') {
      this.setState({ activePokeId: 5 })
    }
  }
  render() {
    return (
      <div className="container flex space-between">
        <i id="prev" onClick={this.handleClick} className="fas fa-chevron-left fa-3x"></i>
        <div>
          <img src={this.pokemon[this.state.activePokeId]} alt="poke"></img>
          <div className="flex justify-center">
            <i id="first" onClick={this.handleClick} className={this.state.activePokeId=== 1 ? "fas fa-circle" : "far fa-circle"}></i>
            <i id="second" onClick={this.handleClick} className={this.state.activePokeId=== 2 ? "fas fa-circle" : "far fa-circle"}></i>
            <i id="third" onClick={this.handleClick} className={this.state.activePokeId=== 3 ? "fas fa-circle" : "far fa-circle"}></i>
            <i id="fourth" onClick={this.handleClick} className={this.state.activePokeId=== 4 ? "fas fa-circle" : "far fa-circle"}></i>
            <i id="fifth" onClick={this.handleClick} className={this.state.activePokeId=== 5 ? "fas fa-circle" : "far fa-circle"}></i>
          </div>
        </div>
        <i id="next" onClick={this.handleClick} className="fas fa-chevron-right fa-3x"></i>
      </div>
    )
  }
}
  export default Carousel;
