import React, { Component } from "react";

class Header extends Component {
    render() {
        const headerContent = this.props;
        return (
            <>
            <header className={headerContent.content.className}>

            </header>
            </>
        )        
    }
}

export default Header;