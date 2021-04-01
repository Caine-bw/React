import React, { Component } from 'react';
import "./Navigation.css";

class Navigation extends Component {

    logLink = (message) => {
        console.log(message);
    }

    render() {
        return(
            <div>
                <a onClick={() => this.logLink('Accueil')} className="link" href="#root">Link 1</a>
                <a onMouseOver={() => this.logLink('Galerie')} className="link" href="#root">Link 2</a>
                <a onDoubleClick={() => this.logLink('Contact')} className="link" href="#root">Link 3</a>
            </div>
        )
    }
}

export default Navigation;