import React, {Component} from 'react';


class TodoListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos : [
                { id: 1, description: 'Mehhhhhhh', done: false, targetDate: new Date()}, 
                { id: 2, description: 'Mehhhhhhh', done: false, targetDate: new Date()}, 
                { id: 3, description: 'Mehhhhhhh', done: false, targetDate: new Date()}
            ] 
        };
    }

    render() {
        return (
            <div className="TodoListComponent container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map (
                                todo => 
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toISOString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TodoListComponent;