import axios from 'axios';
let envVars = import.meta.env;
let user_add = 'http://localhost:5000/api/users'
class Users {
    getUsers(body) {
        console.log(localStorage.getItem('user'))
        try {
            return axios.get(`${user_add}/`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
        } catch (e) {
            throw e;
        }
    }
}
export default new Users();