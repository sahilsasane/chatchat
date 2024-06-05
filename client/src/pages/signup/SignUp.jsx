import React from 'react'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className='w-full p-6 rounded-lg shadow-md bg-slate-600 bg-clip-padding'>
                <h1 className='text-3xl font-semibold text-center'>
                    Signup
                </h1>
                <form >
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type="text" className='input input-bordered w-full h-10' placeholder='Full Name' />
                    </div>
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
                    <div>
                        <label className='label p-2'><span className='text-base label-text'>Gender</span></label>
                        <div className='py-1'>
                            <select name="" id="" className='dropdown p-2 rounded-lg cursor-pointer'>
                                <option value="" selected disabled>Choose Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>Signup</button>
                    </div>
                </form>
                <a href="#" className='text-lg mt-2 hover:text-blue-600  inline-block'>Login</a>
            </div>

        </div>
    )
}

export default SignUp