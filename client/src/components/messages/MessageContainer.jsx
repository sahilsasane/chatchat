import { useEffect } from "react";
import useConversations from "../../store/useConversations";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversations();

    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation])
    return (
        <>
            {!selectedConversation ? (
                <NoChatSelected />
            ) : (
                <div className='md:min-w-[450px] flex flex-col'>
                    {/* Header */}
                    <div className='bg-slate-500 px-4 py-2 mb-2'>
                        <span className='label-text'></span> <span className='text-gray-900 font-bold'>{selectedConversation.fullName}</span>
                    </div>

                    <Messages />
                    <MessageInput />
                </div>
            )}
        </>

    );
};
export default MessageContainer;