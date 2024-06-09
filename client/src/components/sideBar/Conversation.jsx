import useConversations from "../../store/useConversations";

const Conversation = ({ conversation, lastidx }) => {
    const { selectedConversation, setSelectedConversation } = useConversations()

    const isSelected = selectedConversation?._id === conversation._id
    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-blue-900 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-blue-900" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className='avatar online'>
                    <div className='w-12 rounded-full'>
                        <img
                            src={conversation.profilePicture}
                            alt='user avatar'
                        />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{conversation.fullName}</p>
                        <span className='text-xl'>🎃</span>
                    </div>
                </div>
            </div>

            {!lastidx && <div className='divider my-0 py-0 h-1' />}
        </>
    );
};
export default Conversation;