import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
    const { Signup, loading } = useSignUp();
    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(inputs);
        await Signup(inputs.fullName, inputs.username, inputs.password, inputs.password, inputs.gender);
    }
    return (
        <div className='flex flex-col h-screen items-center justify-center mx-auto md:w-[35rem] xs:p-4'>
            <div className='w-full xs:py-20 p-6 rounded-lg shadow-md bg-slate-600 bg-clip-padding'>
                <h1 className='text-3xl font-semibold text-center'>
                    Signup
                </h1>
                <form onSubmit={handleSubmit} className='space-y-2'>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" className='input input-bordered w-full h-10' placeholder='Full Name'
                            value={inputs.fullName}
                            onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
                            required
                        />
                    </div>
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
                        <label className='label p-2'><span className='text-base label-text'>Gender</span></label>
                        <div className='py-1'>
                            <select name="" id="" className='dropdown p-2 rounded-lg cursor-pointer'
                                value={inputs.gender}
                                onChange={(e) => setInputs({ ...inputs, gender: e.target.value })}
                            >
                                <option value="" disabled hidden>Choose Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-block btn-sm mt-4'>Signup</button>
                    </div>
                </form>
                <div className='mt-3'>
                    <Link to="/login" className='text-lg text-blue-500 hover:text-blue-600'>Login</Link>
                </div>
            </div>

        </div>
    )
}

export default SignUp