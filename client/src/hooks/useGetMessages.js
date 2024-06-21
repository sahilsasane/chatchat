import { useEffect, useState } from "react";
import useConversations from "../store/useConversations";
import Messages from "../services/Messages";
import { toast } from "react-toastify";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversations();
    let groupName = selectedConversation?.name;
    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                let token = localStorage.getItem('token');
                if (!groupName) {
                    const res = await fetch(`/api/messages/${selectedConversation._id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    const data = await res.json();
                    // console.log(data)
                    setMessages(data);
                } else {
                    const res = await fetch(`/api/groups/${selectedConversation._id}`, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        }
                    });
                    const data = await res.json();
                    console.log(data)
                    setMessages(data);
                }
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