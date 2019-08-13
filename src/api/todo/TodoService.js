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
        return {"id":4,"username":"TB","description":"This is a teste with id 4","targetData":"2019-08-13T01:43:35.712+0000","done":true}
    }
}

export default new TodoService();