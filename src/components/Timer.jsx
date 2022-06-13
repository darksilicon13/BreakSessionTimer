import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
    state = {
        remainMin: this.props.session,
        remainSec: 0
    }

    getSeconds = () => {
        if(this.state.remainSec < 10) {
            return '0'+this.state.remainSec
        }
        else return this.state.remainSec;
    }

    render() { 
        return (
            <div id="timer-label">
                <h2>Session</h2>
                <p>{this.props.session}:{this.getSeconds()}</p>
            </div>
        );
    }
}
 
export default Timer;