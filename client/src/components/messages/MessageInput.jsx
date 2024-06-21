import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import useSendGroupMessage from "../../hooks/useSendGroupMessage";

const MessageInput = ({ isGroup }) => {
    const [message, setMessage] = useState('');
    const { sendMessage, loading } = useSendMessage();
    const { sendGroupMessage } = useSendGroupMessage();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;
        if (isGroup) {
            await sendGroupMessage(message);
        } else {
            await sendMessage(message);
        }
        setMessage('');
    }
    return (
        <form className='px-4 my-3' onSubmit={handleSubmit}>
            <div className='flex p-2 gap-2 w-full'>
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type='submit' className='pe-3 hover:text-white'>
                    {loading ? <div className="loading loading-spinner"></div> : <BsSend />}
                </button>
            </div>
        </form>
    );
};
export default MessageInput;