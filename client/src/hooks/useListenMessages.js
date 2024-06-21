import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversations from "../store/useConversations";


const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversations();

    useEffect(() => {
        socket?.on("newMessage", (newMessage) => {
            console.log(newMessage)
            setMessages([...messages, newMessage]);
        });

        return () => socket?.off("newMessage", "receiveMessage");
    }, [socket, setMessages, messages]);
};
export default useListenMessages;