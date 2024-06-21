import { useEffect, useState } from "react";
import Users from "../services/Users";
import { toast } from "react-toastify";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            let token = localStorage.getItem('token')
            setLoading(true);
            try {
                let result = await fetch("/api/users", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`,
                    }
                });
                const data = await result.json();
                const users = data.users;
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(users)
                setGroups(data.group)
            } catch (e) {
                toast.error("Internal Server Error");
                console.log(e);
            }
            setLoading(false);
        }
        getConversations();
    }, [])

    return { conversations, groups, loading };
}

export default useGetConversations