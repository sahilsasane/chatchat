import React, { useState } from 'react'
import Modal from './Modal';

const CreateGroup = () => {
    const [showModal, setShowModal] = useState(false)
    const handleOpenModal = () => {
        setShowModal(true);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className='flex w-16 items-center'>
            <button
                onClick={() => setShowModal(true)}
                className='w-16 h-10 bg-slate-800 rounded-2xl hover:bg-slate-700 '>Add</button>
            <Modal showModal={showModal} handleCloseModal={handleCloseModal} />
        </div>
    )
}

export default CreateGroup