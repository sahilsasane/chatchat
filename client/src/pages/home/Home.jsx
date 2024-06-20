import React from 'react'
import SideBar from '../../components/sideBar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
    return (
        <>
            <div className='flex'>
                <SideBar />
                <MessageContainer />
            </div>
        </>
    )
}

export default Home