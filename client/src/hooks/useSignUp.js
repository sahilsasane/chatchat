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

            const result = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await result.json();
            if (result.status === 201) {
                toast.success("User created successfully");
                localStorage.setItem('user', JSON.stringify(data));
                localStorage.setItem('token', data.token);
                setUser(data);
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