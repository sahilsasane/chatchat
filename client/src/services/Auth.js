import axios from 'axios';
let envVars = import.meta.env;
let auth_add = 'http://localhost:5000/api/auth'
class Auth {

    login(body) {
        try {
            return axios.post(
                `${auth_add}/login`,
                body
            )
        } catch (e) {
            throw e;
        }
    }

    signup(body) {
        try {
            return axios.post(
                `${auth_add}/signup`,
                body
            )
        } catch (e) {
            throw e;
        }
    }
    logout() {
        try {
            return axios.post(
                `${auth_add}/logout`
            )
        } catch (e) {
            throw e;
        }
    }
}
export default new Auth();