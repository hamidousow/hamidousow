import React, { Component } from "react";

class Text extends Component {
    render() {
        const textContent = this.props;
        return <p className="text">{textContent.text}</p>
    }
}

export default Text;