import { useEffect, useState } from "react";
import useConversations from "../store/useConversations";
import { toast } from "react-toastify";

const useGetGroupMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversations();
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                let token = localStorage.getItem('token');
                const res = await fetch(`/api/groups/${selectedConversation._id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await res.json();
                // console.log(data)
                setMessages(data);

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

export default useGetGroupMessages;