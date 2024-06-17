import { useEffect } from "react";
import useConversations from "../../store/useConversations";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversations();
    const { user } = useAuthContext();

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation])
    return (
        <>
            {!selectedConversation ? (
                <NoChatSelected name={user.fullName} />
            ) : (
                <div className='w-full flex flex-col bg-gray-800'>
                    {/* Header */}
                    <div className='flex items-center bg-slate-500 px-4 py-2 mb-2'>
                        <img alt="profile photo" src={selectedConversation.profilePicture} className="w-10 rounded-full"></img>
                        <div className='font-bold  text-xl mx-2 text-black'>
                            {selectedConversation.fullName}
                        </div>
                    </div>

                    <Messages />
                    <MessageInput />
                </div>
            )}
        </>

    );
};
export default MessageContainer;