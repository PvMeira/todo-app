import React, {Component} from 'react';
import TodoService from '../../../api/todo/TodoService.js'
import AuthenticationService from '../authentication/AuthenticationService.js'


class TodoListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = { todos : [] };

        this.listTodosByUsername = this.listTodosByUsername.bind(this);
        this.deleteTodo = this.deleteTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    componentDidMount() {
        this.listTodosByUsername(AuthenticationService.getLoggedUsername());
    }

    listTodosByUsername(username) {
        TodoService.listTodosByUsername(username)
                   .then(response => {
                       this.setState({
                           todos: response.data
                       }); 
                   })
                   .catch(error => console.log(error));
    }

    deleteTodo(id) {
        TodoService.delete(AuthenticationService.getLoggedUsername(), id)
                   .then( response => console.log(response))
                   .catch(error => console.error(error));
    }

    updateTodo(id) {
        console.log(id);
        this.props.history.push(`todos/edit/${id}`);
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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map (
                                todo => 
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetData}</td>
                                        <td>
                                            <button className="btn btn-info"
                                                    onClick={() => this.updateTodo(todo.id)}>Edit</button>
                                            <button className="btn btn-warning" 
                                                    onClick={() => this.deleteTodo(todo.id)}>Delete</button>
                                        </td>
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