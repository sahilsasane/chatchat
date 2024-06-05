import { BsSend } from "react-icons/bs";

const MessageInput = () => {
    return (
        <form className='px-4 my-3'>
            <div className='flex p-2 gap-2 w-full'>
                <input
                    type='text'
                    className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
                    placeholder='Send a message'
                />
                <button type='submit' className='pe-3 hover:text-white'>
                    <BsSend />
                </button>
            </div>
        </form>
    );
};
export default MessageInput;