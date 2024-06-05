import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import SignUp from '../pages/signup/SignUp'
import Login from '../pages/login/Login'
import { useAuthContext } from '../context/AuthContext'
const Router = () => {
    const { user } = useAuthContext();
    return (
        <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
            <Route path='/signup' element={user ? <Navigate to='/' /> : <SignUp />} />
            <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
        </Routes>
    )
}

export default Router