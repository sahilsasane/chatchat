import React, { useState } from 'react'
import Contact from './Contact'
import useGetConversations from '../../hooks/useGetConversations';

const Contacts = ({ onSelect }) => {
    const { conversations, loading } = useGetConversations();

    return (
        <div >
            {conversations &&
                conversations.map((conversation, index) => (
                    <Contact
                        key={index}
                        people={conversation}
                        onSelect={onSelect}
                    />
                ))
            }
        </div>
    )
}

export default Contacts