import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-slate-600 bg-clip-padding'>
                <h1 className='text-3xl font-semibold text-center'>
                    Login
                </h1>
                <form >
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" className='input input-bordered w-full h-10' placeholder='Username' />
                    </div>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="text" className='input input-bordered w-full h-10' placeholder='Password' />
                    </div>
                    <a href="#" className='text-sm  hover:text-blue-600 mt-2 inline-block'>Create Account</a>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Login</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login