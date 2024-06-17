import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Auth from '../services/Auth';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';
const useSignUp = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { user, setUser } = useAuthContext();
    const Signup = async (name, username, password, confirmPassword, gender) => {
        if (!name || !username || !password || !gender) {
            toast.error("Please fill all fields");
            return;
        }
        setLoading(true);
        try {
            let body = {
                "fullName": name,
                "username": username,
                "password": password,
                "confirmPassword": password,
                "gender": gender
            }

            let result = await Auth.signup(body);
            if (result.status === 201) {
                toast.success("User created successfully");
                localStorage.setItem('user', JSON.stringify(result.data));
                localStorage.setItem('token', result.data.token);
                setUser(result.data);
                navigate('/login');
            }
            if (result.status === 400) {
                toast.error("Invalid user data");
            }
            if (result.status === 500) {
                toast.error("Internal Server Error");
            }

        } catch (e) {
            toast.error("Internal Server Error")
            console.log(e);
        }
        setLoading(false);
    }
    return { Signup, loading };
}

export default useSignUp