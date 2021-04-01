import React, { Component } from 'react';
import "./Article.css";
import tartine from '../../img/tartine.jpg';

class Article extends Component {

    nombreArticle = 2;

    render() {
        return(
            <div className="article">
                <img src={tartine} alt="tartine" />
                <div className="article2">
                    <h3 className="titre">{this.props.titre}</h3>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, delectus, fuga consequatur expedita ullam totam, corrupti veniam tenetur explicabo modi</p>
                    <button onClick={() => console.log(this.props.titre) }>Click me</button>
                    <button onClick= {()=>this.props.nbArticle(this.nombreArticle)}>Console me</button>
                </div>
            </div>
        )
    }
}

export default Article;