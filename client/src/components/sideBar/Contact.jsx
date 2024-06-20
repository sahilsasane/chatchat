import React from 'react'

const Contact = ({ people, onSelect }) => {
    const handleChange = (e) => {
        onSelect(people._id, e.target.checked)
    }

    return (
        <div className='flex mb-2 mx-2 p-2 text-white'>
            <div className='w-10 rounded-full'>
                <img src={people.profilePicture} alt="" />
            </div>
            <h2 className='p-2 w-full mx-2'>{people.fullName}</h2>
            <div className='flex items-center justify-center'>
                <input className='w-6 h-6 text-blue-800 rounded-full cursor-pointer' type="checkbox" name="" id="" onChange={handleChange} />
            </div>
        </div>
    )
}

export default Contact