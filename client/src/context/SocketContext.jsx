import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const { user } = useAuthContext()
    useEffect(() => {
        if (user) {
            //http://localhost:5000
            const socket = io("https://chatchat-m052.onrender.com", {
                query: {
                    userId: user._id
                }
            });
            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null)
            }
        }
    }, [user])
    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    )
}