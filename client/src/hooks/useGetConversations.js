import { useEffect, useState } from "react";
import Users from "../services/Users";
import { toast } from "react-toastify";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                let result = await Users.getUsers();
                if (result.status === 200) {
                    setConversations(result.data);
                }
                if (result.status === 500) {
                    toast.error("Internal Server Error");
                }
            } catch (e) {
                toast.error("Internal Server Error");
                console.log(e);
            }
            setLoading(false);
        }
        getConversations();
    }, [])

    return { conversations, loading };
}

export default useGetConversations