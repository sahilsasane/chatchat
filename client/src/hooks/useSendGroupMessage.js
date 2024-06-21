import { useState } from "react";
import useConversations from "../store/useConversations";
import Messages from "../services/Messages";
import { toast } from "react-toastify";

const useSendGroupMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversations();
    const sendGroupMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/groups/send/${selectedConversation._id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ message }),
            });

            const data = await res.json();
            setMessages([...messages, data]);
        } catch (e) {
            console.log(e)
            toast.error("Internal Server Error");
        } finally {
            setLoading(false);
        }
    }
    return { sendGroupMessage, loading }
}

export default useSendGroupMessage;