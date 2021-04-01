import React, { Component } from 'react';
import { render } from 'react-dom';

class Header extends Component {

    navigation = () => {
        alert('Salut');
    }
    
    render(){
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span onClick={() => this.navigation()} className="navbar-brand mb-0 h1">Navbar</span>
                </div>
                </nav>
            </div>
        );
    }
}

export default Header;