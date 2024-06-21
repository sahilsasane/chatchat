import { useEffect } from "react";
import useConversations from "../../store/useConversations";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import NoChatSelected from "./NoChatSelected";
import { useAuthContext } from "../../context/AuthContext";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversations();
    const { user } = useAuthContext();
    const groupName = selectedConversation?.name;
    useEffect(() => {
        return () => setSelectedConversation(null);
    }, [setSelectedConversation])
    return (
        <div className={`md:w-3/4 md:block h-screen ${selectedConversation ? 'xs:w-full' : 'xs:hidden'}`}>
            {!selectedConversation ? (
                <NoChatSelected name={user.fullName} />
            ) : (
                <div className='flex flex-col bg-gray-800 h-full'>
                    {/* Header */}
                    <div className='flex items-center bg-slate-500 px-4 py-2 mb-2'>
                        <div className='cursor-pointer mr-2 rounded-full p-2 bg-slate-500 hover:bg-slate-600'
                            onClick={() => setSelectedConversation(null)}
                        >
                            <ArrowBackIcon />
                        </div>
                        <img alt="profile photo" src={selectedConversation.profilePicture} className="w-10 rounded-full"></img>
                        <div className='font-bold  text-xl mx-2 text-black'>
                            {groupName ? groupName : selectedConversation.fullName}
                        </div>
                    </div>

                    <Messages isGroup={groupName} />
                    <MessageInput isGroup={groupName} />
                </div>
            )}
        </div>

    );
};
export default MessageContainer;