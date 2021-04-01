import React, { Component } from 'react';
import "./Body.css";
import Article from '../Article/Article';

class Body extends Component {

    content = 2;

    nbArt = (nombre) => {
        console.log(nombre);
    }
    
    render() {
        return(
            <div className="body">
                {
                    this.content >= 2 &&
                        <div>
                            <Article titre="Les tartines" nbArticle = {(nombreA) => this.nbArt(nombreA)}/>
                            <Article titre="Coding School"/>
                        </div>
                }
                {
                    this.content < 2 &&
                        <div>
                            <h1 className="monh1">Il n'ya a pas d'articles</h1>
                        </div>
                }
            </div>
        )
    }
}

export default Body;