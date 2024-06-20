import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import Contacts from './Contacts';
import useGetConversations from '../../hooks/useGetConversations';
import { toast } from 'react-toastify';

const Modal = ({ showModal, handleCloseModal }) => {
    const [selectedPeople, setSelectedPeople] = useState([]);
    const { conversations, loading } = useGetConversations();
    const [groupName, setGroupName] = useState('');
    const [isNext, setIsNext] = useState(false);
    const handleSelect = (id, isSelected) => {
        if (isSelected) {
            setSelectedPeople(prev => [...prev, conversations.find(p => p._id === id)]);
        } else {
            setSelectedPeople(prev => prev.filter(p => p._id !== id));
        }
    }
    if (!showModal) {
        return null;
    }
    const handleNext = () => {
        if (selectedPeople.length === 0) {
            toast.error('Please select at least one contact');
            return;
        }
        console.log(selectedPeople);
        setIsNext(true);
    }
    return (
        <div className="fixed z-10 inset-0 overflow-y-auto"  >
            <div className="block items-end justify-center pb-18 text-center  p-0">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>
                <div className="inline-block align-middle bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 max-w-md w-full">
                    <div className="flex bg-slate-800 px-2 pt-5 pb-4 ">
                        <h2 className="text-lg leading-6 font-medium text-white w-full px-2">Create a new group</h2>
                        <div
                            onClick={() => {
                                handleCloseModal();
                                setIsNext(false);
                                setSelectedPeople([]);
                            }}
                            className='cursor-pointer hover:text-gray-600 transition duration-200 ease-in-out '
                        >
                            <CloseIcon className='w-8 h-8 text-gray-400 cursor-pointer hover:text-gray-600 transition duration-200 ease-in-out' />
                        </div>
                    </div>
                    <hr className='w-full opacity-10' />
                    {!isNext &&
                        <>
                            <div className='w-full flex justify-between'>
                                <h2 className='px-2 mx-2 m-2'>All Contacts</h2>
                                <button className='m-1 px-4 py-2 bg-slate-700 rounded-2xl hover:bg-slate-600'
                                    onClick={handleNext}
                                >
                                    Next</button>
                            </div>
                            <Contacts onSelect={handleSelect} />
                        </>
                    }
                    {isNext &&
                        <div>
                            <div className='flex flex-col p-2 m-2'>
                                <label className='text-gray-300'>Group Name</label>
                                <input type="text" className='p-2 mt-2 rounded-xl text-gray-400' placeholder='Group Group' />
                            </div>
                            <div className='flex flex-col p-2 m-2'>
                                <label className='text-gray-300'>Group Icon</label>
                                <input type="file" className='my-2 rounded-lg border border-gray-500 cursor-pointer' />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Modal;