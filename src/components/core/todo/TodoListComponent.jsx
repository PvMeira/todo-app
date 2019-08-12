import React, {Component} from 'react';
import TodoService from '../../../api/todo/TodoService.js'
import AuthenticationService from '../authentication/AuthenticationService.js'


class TodoListComponent extends Component {

    constructor(props) {
        super(props);
        this.listTodosByUsername = this.listTodosByUsername.bind(this);
        this.state = { todos : [] };
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
                       console.log(response)
                   })
                   .catch(error => console.log(error));
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
                                        <td>{todo.targetData}</td>
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