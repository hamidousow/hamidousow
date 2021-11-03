import React, {Component} from 'react';

class Button extends Component {
    render() {
        const { buttonContent } = this.props;
        return (
            <button className={buttonContent.className}>{buttonContent.text}</button>
        )
    }
}

export default Button;
    
