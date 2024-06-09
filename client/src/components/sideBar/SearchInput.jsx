import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from '../../hooks/useGetConversations';
const SearchInput = () => {

    return (
        <form className='flex gap-2 items-center p-2'>
            <input type="text" className='w-full h-10 rounded-lg p-4' placeholder='Search' />
            <button type='submit' className=' text-white hover:text-slate-500 '>
                <IoSearchSharp className='w-6 h-6 outline-none' />
            </button>
        </form>
    )
}

export default SearchInput