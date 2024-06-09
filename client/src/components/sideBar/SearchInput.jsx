import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import useConversations from '../../store/useConversations'
import useGetConversations from '../../hooks/useGetConversations';
const SearchInput = () => {
    const [search, setSearch] = useState('');
    const { setSelectedConversation } = useConversations();
    const { conversations } = useGetConversations()
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            toast.error('Search query must be at least 3 characters long')
            return;
        }
        const conversation = conversations.find(c => c.fullName.toLowerCase().includes(search.toLowerCase()))
        if (conversation) {
            setSelectedConversation(conversation)
            setSearch('')
        } else {
            toast.error('No conversation found')
        }
    }
    return (
        <form className='flex gap-2 items-center p-2' onSubmit={handleSubmit}>
            <input type="text" className='w-full h-10 rounded-lg p-4' placeholder='Search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type='submit' className=' text-white hover:text-slate-500 '>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput