import React, { Component } from 'react';
//icons
import soundicon from './assets/soundicon.svg';
import playicon from './assets/playicon.svg';
import pauseicon from './assets/pauseicon.svg';
import windowicon from './assets/windowicon.svg';
//style
import './App.css';
//My class
class Title extends Component {
  render() {
    return (
      <div className="title hidden">
        <div className="caption">{this.props.caption}</div>
      </div>
    )
  }
}
class Play extends Component {
  render() {
    return (
      <div className="play icon" onClick={() => this.props.onClick()}>
        <img src={playicon}/>
      </div>
    )
  }
}
class Pause extends Component {
  render() {
    return (
      <div className="pause icon" onClick={() => this.props.onClick()}>
        <img src={pauseicon}/>        
      </div>
    )
  }
}
class PlayControl extends Component {
  constructor() {
    super();
    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handlePauseClick = this.handlePauseClick.bind(this);
    this.state = {isPlayed: false};
  }
  handlePlayClick() {
    this.setState({isPlayed: true});
  }
  handlePauseClick() {
    this.setState({isPlayed: false});
  }
  render() {
    const isPlayed = this.state.isPlayed;    
    return (!isPlayed)
      ? <Play onClick={this.handlePlayClick} />
      : <Pause onClick={this.handlePauseClick} />
  }
}
class Sound extends Component {
  render() {
    return (
      <div className="sound icon">
        <img src={soundicon}/>
      </div>
    )
  }
}
class Window extends Component {
  render() {
    return (
      <div className="window icon">
        <img src={windowicon}/>
      </div>
    )
  }
}
class Time extends Component {
  render() {
    return (
    <div className="time">{this.props.value}</div>)
  }
}
class Board extends Component {
  render() {
    const time = "3:35";
    return(
      <div className="board hidden">
        <div className="left">
          <PlayControl />
          <Sound />          
        </div>
        <div className="right">
          <Time value={time}/>
          <Window /> 
        </div>


      </div>
    )
  }
}

class Clock extends Component {
  constructor(props) {
    super();
    this.state = {date: new Date()}
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    })
  }
  render() {
    let element = (
        <div>
          <h2>{ this.state.date.toLocaleTimeString() }</h2>
        </div> 
      ); 

  return element;
  }

}


class Player extends Component {
  render() {
    const title = "Описание трасляции может быть длинным!";
    return (
      <div className="player">
        <Title caption={title}/>
        <Clock />
        <Board />
      </div>
    );
  }
}

export default Player;
