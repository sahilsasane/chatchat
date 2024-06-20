import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'
import useConversations from '../../store/useConversations'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CreateGroup from './CreateGroup'

const SideBar = () => {
    const { selectedConversation, setSelectedConversation } = useConversations();
    return (
        <div className={`md:w-1/4 md:block h-screen overflow-y-auto border-gray-800 p-4 flex flex-col bg-gray-900 ${selectedConversation ? 'xs:hidden' : 'xs:w-full'}`}>
            <SearchInput />
            <div className='flex '>
                <CreateGroup />
                <div className='divider px-3 w-5/6 mx-1'></div>
            </div>
            <Conversations />
            <LogoutButton />
        </div>
    )
}

export default SideBar