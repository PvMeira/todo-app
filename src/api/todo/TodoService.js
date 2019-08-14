import axios from 'axios'

let context = 'todos';
class TodoService {
    listTodosByUsername(username) {        
        return axios.get(`${process.env.REACT_APP_BACK_END_URL}/${context}/listby/${username}`);
    }

    delete(username, id) {
        return axios.delete(`${process.env.REACT_APP_BACK_END_URL}/${context}/${username}/${id}`);
    }

    findbyId(id) {
        return axios.get(`${process.env.REACT_APP_BACK_END_URL}/${context}/${id}`);
    }

    update(id, body) {
        return axios.put(`${process.env.REACT_APP_BACK_END_URL}/${context}/${id}`, body);
    }

    save(username, body) {
        return axios.post(`${process.env.REACT_APP_BACK_END_URL}/${context}/${username}`, body);
    }
}

export default new TodoService();