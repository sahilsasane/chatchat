import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversations from '../../store/useConversations';

const Message = ({ message }) => {
    const { user, setUser } = useAuthContext();
    const { selectedConversation } = useConversations();
    console.log(user)
    const sender = message.senderId === user._id;
    const chatClassName = sender ? 'chat-end' : 'chat-start';
    const profilepic = sender ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = sender ? 'bg-blue-500' : 'bg-gray-500';
    return (
        <div className={`chat ${chatClassName}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src={profilepic} />
                </div>
            </div>
            <div className={`chat-bubble text-white bg-blue-500 ${bubbleBgColor}`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>time</div>
        </div>
    )
}

export default Message;