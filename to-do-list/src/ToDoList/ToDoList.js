import React, { Component } from 'react';

class ToDoList extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            userInput: "",//valeur de linput a la base
            objets: [],
        }
    }
    onChange(event){
        this.setState({
            userInput: event.target.value
        });
    }
    //update mon state = Onchange change la valeur de linput quand lutilisateur le remplis
    
    addToDo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            objets: [...this.state.objets, this.state.userInput]
        });
    }

    deleteToDo(event){
        event.preventDefault();
        let tableau = this.state.objets;
        let index = tableau.indexOf(event.target.value);
        tableau.splice(index, 1);
        this.setState({
            objets: tableau
        });

    }
    
    renderAjoutItem(){
        return this.state.objets.map((objets)=>{
            return (
                <div key={objets}>
                    {objets} <button className="btn bg-danger mx-1" onClick={this.deleteToDo.bind(this)}><span className="p-auto">x</span></button>
                </div>
            );
        });
    }
//key est comme un id pour les objets de mon tableau
    render() {
        return (
            <div className="text-center">
                <h1 className=" my-5 text-danger border-bottom" > my To-do-list</h1>
                <form className="form-row justify-content-center">
                    <input
                        value={this.state.userInput}
                        type="text" 
                        placeholder="qu'avez vous prévus ?"
                        onChange={this.onChange.bind(this)}
                        className="form-control mr-2 mb-2 w-50 "
                        />
                <button className="btn bg-success" onClick={this.addToDo.bind(this)}>ajouter</button>
                </form>
                <div>
                    {this.renderAjoutItem()}
                </div>
            </div>
        );
    }
}

export default ToDoList;