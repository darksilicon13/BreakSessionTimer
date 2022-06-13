import React, { Component } from 'react';
import './length-control.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

class Session extends Component {
    render() {
        const withDec = <button id="session-decrement" onClick={() => this.props.onDec(this.props.length)}>
            <FontAwesomeIcon icon={faArrowDown} style={{ color: '#FFFFFF' }} /></button>;
        const withInc = <button id="session-increment" onClick={() => this.props.onInc(this.props.length)}>
            <FontAwesomeIcon icon={faArrowUp} style={{ color: '#FFFFFF' }} /></button>;
        const withoutDec = <button id="session-decrement"><FontAwesomeIcon icon={faArrowDown} style={{ color: '#FFFFFF' }} /></button>;
        const withoutInc = <button id="session-increment"><FontAwesomeIcon icon={faArrowUp} style={{ color: '#FFFFFF' }} /></button>;
        return (
            <div className="container">
                {/* User Story #2: I can see an element with id="session-label" that contains a string (e.g. "Session Length"). */}
                <h2 id="session-label">Session Length</h2>
                <div className="control">
                    {this.props.tick ? withoutDec : withDec}
                    {/* User Story #6: I can see an element with a corresponding id="session-length", which by default displays a value of 25. */}
                    <p id="session-length">{this.props.length}</p>
                    {this.props.tick ? withoutInc : withInc}
                </div>
            </div>
        );
    }
}

export default Session;