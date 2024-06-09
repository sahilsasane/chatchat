import { useState } from "react";
import useConversations from "../store/useConversations";
import Messages from "../services/Messages";
import { toast } from "react-toastify";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversations();
    const sendMessage = async (message) => {
        setLoading(true);
        try {
            console.log('hello')
            const res = await Messages.sendMessages({ id: selectedConversation._id, message: message })
            console.log(res.data)
            setMessages([...messages, res.data.message]);
        } catch (e) {
            console.log(e)
            toast.error("Internal Server Error");
        } finally {
            setLoading(false);
        }
    }
    return { sendMessage, loading }
}

export default useSendMessage