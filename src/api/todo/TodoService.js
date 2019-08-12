import axios from 'axios'

let context = 'todos';
class TodoService {
    listTodosByUsername(username) {        
        return axios.get(`${process.env.REACT_APP_BACK_END_URL}/${context}/listby/${username}`);
    }
}

export default new TodoService();