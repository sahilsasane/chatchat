import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

const Conversations = () => {
    const { conversations, groups, loading } = useGetConversations();
    let grps = groups;
    return (
        <div className='py-2 flex flex-col'>
            {conversations &&
                conversations.map((conversation, index) => (
                    <Conversation
                        key={index}
                        conversation={conversation}
                        lastidx={index === conversations.length - 1}
                    />
                ))}
            {grps &&
                grps.map((group, index) => (
                    <Conversation
                        key={index}
                        conversation={group}
                        lastidx={index === grps.length - 1}
                        isGroup={true}
                    />
                ))}
            {loading ? <span className="loading loading-spinner"></span> : null}
        </div>
    );
};
export default Conversations;