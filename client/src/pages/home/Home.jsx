import React from 'react'
import SideBar from '../../components/sideBar/SideBar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
    return (
        <>
            <div className='flex w-full sm:h-[650px] md:h-full rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
                <SideBar />
                <MessageContainer />
            </div>
        </>
    )
}

export default Home