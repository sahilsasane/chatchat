import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import useConversations from '../../store/useConversations'

const SideBar = () => {
    const { selectedConversation, setSelectedConversation } = useConversations();
    return (
        <div className={`md:w-1/4 md:block w-1/4  border-gray-800 p-4 flex flex-col bg-gray-900 ${selectedConversation ? 'xs:hidden' : 'xs:w-full'}`}>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default SideBar