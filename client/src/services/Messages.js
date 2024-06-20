import axios from 'axios';
let envVars = import.meta.env;
let message_add = 'http://localhost:5000/api/messages'

const api = axios.create({
    baseURL: '/api/messages',
});
class Messages {

    async sendMessages(body) {
        console.log('body', body.id)
        try {
            return await api.post(`/send/${body.id}`,
                body,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
        } catch (e) {
            console.log(e)
        }
    }
    async getMessages(body) {
        try {
            return await api.get(
                `/${body.id}`,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`

                    }
                }
            )
        } catch (e) {
            console.log(e)
        }
    }
}
export default new Messages();