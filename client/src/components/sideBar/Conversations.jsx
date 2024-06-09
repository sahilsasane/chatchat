import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
    const { conversations, loading } = useGetConversations();
    return (
        <div className='py-2 flex flex-col overflow-auto'>
            {conversations &&
                conversations.map((conversation, index) => (
                    <Conversation
                        key={index}
                        conversation={conversation}
                        lastidx={index === conversations.length - 1}
                    />
                ))}
            {loading ? <span className="loading loading-spinner"></span> : null}
        </div>
    );
};
export default Conversations;