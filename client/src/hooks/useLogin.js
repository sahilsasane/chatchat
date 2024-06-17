import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Auth from '../services/Auth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { user, setUser } = useAuthContext();
    const login = async (username, password) => {
        if (!username || !password) {
            toast.error("Please fill all fields");
            return;
        }
        setLoading(true);
        try {
            let body = {
                "username": username,
                "password": password,
            }

            let result = await Auth.login(body);
            if (result.status === 200) {
                toast.success("Logged in successfully");
                navigate('/');
            }
            else if (result.status === 400) {
                toast.error("Invalid user data");
            }
            else if (result.status === 500) {
                toast.error("Internal Server Error");
            }
            console.log(result.data)
            localStorage.setItem('user', JSON.stringify(result.data));
            localStorage.setItem('token', result.data.token);
            setUser(result.data);
        } catch (e) {
            toast.error("Internal Server Error");
            console.log(e);
        }
        setLoading(false);
    }
    return { login, loading };
}

export default useLogin;