import React, { Component } from 'react';

class Flagbutton extends Component {
    render() {
        return (
            <button
                onClick={this.props.callback}
                className="dropdown-item"
                value={this.props.lang}
                href="/"><img className="flag-image" src={this.props.flag} width="25" height="25" alt={this.props.country} />
            </button>
        )
    }
}

export default Flagbutton;