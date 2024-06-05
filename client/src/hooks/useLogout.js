import React, { useState } from 'react'
import Auth from '../services/Auth';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { user, setUser } = useAuthContext();
  const logout = async () => {
    setLoading(true);
    try {
      const res = await Auth.logout();
      if (res.status === 200) {
        localStorage.removeItem('user');
        setUser(null);
        toast.success("Logged out successfully");
      }
      else if (res.status === 500) {
        toast.error("Internal Server Error");
      }

    } catch (e) {

    }
  }
  return { logout, loading };
}

export default useLogout