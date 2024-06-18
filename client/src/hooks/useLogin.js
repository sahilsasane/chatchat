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

            const result = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });
            const data = await result.json();
            if (result.status === 200) {
                toast.success("Logged in successfully");
                localStorage.setItem('user', JSON.stringify(data));
                localStorage.setItem('token', data.token);
                setUser(data);
            }
            else if (result.status === 400) {
                toast.error("Invalid username or password");
            }
            else if (result.status === 500) {
                toast.error("Internal Server Error");
            }
            navigate("/");
        } catch (e) {
            toast.error("Internal Server Error");
            console.log(e);
        }
        setLoading(false);
    }
    return { login, loading };
}

export default useLogin;