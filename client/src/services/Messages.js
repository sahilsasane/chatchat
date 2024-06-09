import axios from 'axios';
let envVars = import.meta.env;
let message_add = 'http://localhost:5000/api/messages'
class Messages {

    sendMessages(body) {
        try {
            return axios.post(`${message_add}/send/${body.id}`,
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
    getMessages(body) {
        try {
            return axios.get(
                `${message_add}/${body.id}`,
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