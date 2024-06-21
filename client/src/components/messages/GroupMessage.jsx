import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversations from '../../store/useConversations';

const GroupMessage = ({ message }) => {
    const { user, setUser } = useAuthContext();
    const { selectedConversation } = useConversations();
    const sender = message.senderId._id === user._id;
    const chatClassName = sender ? 'chat-end' : 'chat-start';
    const bubbleBgColor = sender ? 'bg-blue-500' : 'bg-gray-500';
    let time = new Date(message.createdAt).toLocaleTimeString();
    time = String(time).slice(0, 4);
    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='profile' src={message.senderId.profilePicture} />
                </div>
            </div>

            <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{time}</div>
        </div>
    )
}

export default GroupMessage;