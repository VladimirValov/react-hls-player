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

class PlayControl extends Component {
  render() {   
    return (
      <div className="play-control icon" onClick={() => this.props.onClick()}>
        <img src={ this.props.isPlayed ? pauseicon : playicon }/>        
      </div>
    )
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
  formatTime(time) {
    let sec = Math.floor(time % 60);
    let min = Math.floor(time / 60);
    let hour = Math.floor(time / 3600);
    if (sec < 10) sec = "0" + sec;
    if (min < 10) min = "0" + min;
    if (hour < 10) hour = "0" + hour;
    return hour +" : " + min + " : " + sec;
  }
  render() {
    return(      
      <div className="board hidden">
        <div className="left">
          <PlayControl isPlayed={this.props.isPlayed}  onClick={() => this.props.togglePlayVideo()}/>
          <Sound />          
        </div>
        <div className="right">
          <Time value={this.formatTime(this.props.currentTime)}/>
          <Window /> 
        </div>
      </div>
    )
  }
}

class Video extends Component {
  render() {
    const video = (
      <video ref={this.props.videoRef} width="100%"  >
        <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" type="video/mp4"/>
        <source src="movie.ogg" type="video/ogg"/>
        Your browser does not support the video tag.
      </video>      
    )
    return video;     
  }
}

class Player extends Component {
  constructor() {
    super();
    this.state = {
      isPlayed: false,
      currentTime: 0
    }
    this.togglePlayVideo = this.togglePlayVideo.bind(this);
  }
  togglePlayVideo() {
    if (this.state.isPlayed) 
      this.pauseVideo();   
    else
      this.playVideo();
    // console.log('toggle play');
    this.setState({
      isPlayed: !this.state.isPlayed
    })
  }
  playVideo() {
    this.videoElement.play(); 
    this.timerID = setInterval(() => this.setState({
      currentTime: this.videoElement.currentTime
    }), 1000);
  }
  pauseVideo() {
    this.videoElement.pause();
    clearInterval(this.timerID);
  }
  render() {
    const title = "Описание трасляции может быть длинным!";
    return (
      <div className="player">
        <Title caption={title}/>        
        <Video videoRef={el => this.videoElement = el}/>
        <Board togglePlayVideo={this.togglePlayVideo} isPlayed={this.state.isPlayed} currentTime={this.state.currentTime}/>        
      </div>
    );
  }
}
export default Player;
