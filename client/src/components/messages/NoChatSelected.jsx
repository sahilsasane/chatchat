import React from 'react'
import { TiMessages } from "react-icons/ti";
const NoChatSelected = ({ name }) => {
    return (
        <div className='justify-center items-center bg-gray-800 xs:hidden md:flex w-full h-full '>
            <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
                <p>Hello {name}!</p>
                <p>Select a chat to start messaging</p>
                <TiMessages className='text-3xl md:text-6xl text-center' />
            </div>
        </div>
    );
};
export default NoChatSelected; 