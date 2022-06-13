import React, { Component } from 'react';
import './App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRefresh, faPlay, faPause} from '@fortawesome/free-solid-svg-icons'
import Break from './components/Break';
import Session from './components/Session';
import Timer from './components/Timer';

class App extends Component {
  state = {
    breaklen: 5,
    sessionlen: 25,
    ticking: false,
    countdown: 'session',
  }

  // User Story #12: When I click the element with the id of break-decrement, 
  // the value within id="break-length" decrements by a value of 1, 
  // and I can see the updated value.
  handleBreakDecrement = (length) => {
    if (length > 1) {
      this.setState({
        breaklen: length - 1
      })
    }
  }
  // User Story #13: When I click the element with the id of break-increment, 
  // the value within id="break-length" increments by a value of 1,
  // and I can see the updated value.
  handelBreakIncrement = (length) => {
    if (length < 60) {
      this.setState({
        breaklen: length + 1
      })
    }
  }
  // User Story #14: When I click the element with the id of session-decrement, 
  // the value within id="session-length" decrements by a value of 1, 
  // and I can see the updated value.
  handleSessionDecrement = (length) => {
    if (length > 1) {
      this.setState({
        sessionlen: length - 1
      })
    }
  }
  // User Story #15: When I click the element with the id of session-increment, 
  // the value within id="session-length" increments by a value of 1, 
  // and I can see the updated value.
  handleSessionIncrement = (length) => {
    if (length < 60) {
      this.setState({
        sessionlen: length + 1
      })
    }
  }

  handleReset = () => {
    this.setState({
      breaklen: 5,
      sessionlen: 25
    })
  }

  render() {
    return (
      <div className="App">
        <h1>25 + 5 Clock</h1>
        <div className="length-control">
          <Break tick={this.state.ticking} length={this.state.breaklen} onDec={this.handleBreakDecrement} onInc={this.handelBreakIncrement} />
          <Session tick={this.state.ticking} length={this.state.sessionlen} onDec={this.handleSessionDecrement} onInc={this.handleSessionIncrement} />
        </div>
        <Timer session={this.state.sessionlen} break={this.state.breaklen}/>
        <div>
          <button>
            {this.state.ticking? <FontAwesomeIcon icon={faPause} style={{color: 'white'}}/>:<FontAwesomeIcon icon={faPlay} style={{color: 'white'}}/>}
          </button>
          <button><FontAwesomeIcon icon={faRefresh} style={{color: 'white'}}/></button>
        </div>
      </div>
    );
  }
}

export default App;
