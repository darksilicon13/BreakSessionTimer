import React, { Component } from 'react';
import './length-control.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

class Break extends Component {
    render() {
        const withDec = <button id="break-decrement" onClick={() => this.props.onDec(this.props.length)}>
            <FontAwesomeIcon icon={faArrowDown} style={{ color: '#FFFFFF' }} /></button>;
        const withInc = <button id="break-increment" onClick={() => this.props.onInc(this.props.length)}>
            <FontAwesomeIcon icon={faArrowUp} style={{ color: '#FFFFFF' }} /></button>;
        const withoutDec = <button id="break-decrement"><FontAwesomeIcon icon={faArrowDown} style={{ color: '#FFFFFF' }} /></button>;
        const withoutInc = <button id="break-increment"><FontAwesomeIcon icon={faArrowUp} style={{ color: '#FFFFFF' }} /></button>;
        return (
            <div className="container">
                {/* User Story #1: I can see an element with id="break-label" that contains a string (e.g. "Break Length"). */}
                <h2 id="break-label">Break Length</h2>
                <div className="control">
                    {this.props.tick ? withoutDec : withDec}

                    <p>{this.props.length}</p>
                    {this.props.tick ? withoutInc : withInc}
                </div>
            </div>
        );
    }
}

export default Break;