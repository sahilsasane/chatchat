import axios from 'axios';
let envVars = import.meta.env;

const api = axios.create({
    baseURL: '/api/auth',
});
class Auth {
    async login(body) {
        try {
            return await api.post('/login', body);
        } catch (e) {
            if (e.response) {
                return e.response;
            } else {
                console.log(e)
                throw e;
            }
        }
    }

    async signup(body) {
        try {
            return await api.post('/signup', body);
        } catch (e) {
            if (e.response) {
                return e.response;
            } else {
                console.log(e)
                throw e;
            }
        }
    }

    async logout() {
        try {
            return await api.post('/logout');
        } catch (e) {
            if (e.response) {
                return e.response;
            } else {
                console.log(e)
                throw e;
            }
        }
    }
}
export default new Auth();