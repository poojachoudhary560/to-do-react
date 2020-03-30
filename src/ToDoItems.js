import React, { Component } from 'react';

class ToDoItems extends Component {
    createTasks(item) {
    return <li key={item.key}>{item.text}</li>
    }
    render() {
        var toDoEntries = this.props.entries;
        var listItems = toDoEntries.map(this.createTasks);
        return(
            <ul className="theList">
                {listItems}
            </ul>
        );
    }
}

export default ToDoItems;