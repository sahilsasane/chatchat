import { useEffect, useState } from "react";
import useConversations from "../store/useConversations";
import Messages from "../services/Messages";
import { toast } from "react-toastify";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversations();
    useEffect(() => {
        const getMessages = async (message) => {
            setLoading(true);
            try {
                console.log('hello')
                const res = await Messages.getMessages({ id: selectedConversation._id })
                console.log(res.data)
                setMessages([...messages, res.data.message]);
            } catch (e) {
                console.log(e)
                toast.error("Internal Server Error");
            } finally {
                setLoading(false);
            }
        }
        if (selectedConversation?._id) getMessages()
    }, [selectedConversation?._id, setMessages])
    return { messages, loading }
}

export default useGetMessages