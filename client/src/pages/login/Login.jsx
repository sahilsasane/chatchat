import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [inputs, setInputs] = useState({
        username: '',
        password: ''
    });
    const { login, loading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(inputs);
        await login(inputs.username, inputs.password);
    }
    return (
        <div className='flex flex-col items-center h-screen xs:p-4 justify-center  md:w-[35rem] mx-auto'>
            <div className='w-full p-6 xs:py-20 rounded-lg items-center shadow-md bg-slate-600 bg-clip-padding space-y-6'>
                <h1 className='text-3xl font-semibold text-center'>
                    Login
                </h1>
                <form onSubmit={handleSubmit} className='space-y-2'>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" className='input input-bordered w-full h-10' placeholder='Username'
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="password" className='input input-bordered w-full h-10' placeholder='Password'
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>
                    <div>
                        <button className='btn btn-block btn-sm mt-4'>Login</button>
                    </div>
                </form>
                <div className='mt-3'>
                    <Link to="/signup" className='text-lg text-blue-500 hover:text-blue-600 mt-2 inline-block'>Create Account</Link>
                </div>

            </div>

        </div>
    )
}

export default Login