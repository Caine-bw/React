import React, { Component } from 'react';
import './Searchbar.css';

class Searchbar extends Component {
    render() {
        return (
            <div>
                <label htmlFor="" className="white">Search : </label>
                <input type="text"/>
                <input className="green" type="submit" value="Go"/>
            </div>
        )
    }
}

export default Searchbar;