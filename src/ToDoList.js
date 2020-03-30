import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import './ToDoList.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        if(this._inputElement !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            this.setState((previousState) => {
                return {
                    items: previousState.items.concat(newItem)
                };
            });
        }
        this._inputElement.value = "";
        console.log(this.state.items);
        e.preventDefault();

    }

    render() {
        return (
            <div className="toDoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._inputElement = a} placeholder="Enter task"></input>
                        <button type="submit">Add</button>
                    </form>
                </div>
                <ToDoItems entries={this.state.items}/>
            </div>
        );
    }
}

export default ToDoList;