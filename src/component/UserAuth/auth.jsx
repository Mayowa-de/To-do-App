import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Login from './login'
import SignUp from './SignUp'

export default function auth({ handleLogin }) {
    const [loginPage, setLoginPage] = useState(true)
    const navigate = useNavigate()

    const showLogin = () => {
        setLoginPage(true)
        navigate('/auth/login')
    }
    const showSignUp = () => {
        setLoginPage(false)
        navigate('/auth/signup')
    }
    return (
        <div className='flex w-full min-h-screen justify-center items-center flex-col gap-4'>
            <div className='flex w-full justify-center items-center text-red-500 font-bold text-2xl gap-3'>
                <h1>To Do</h1><span className='text-black'>App</span>
             </div>
            <div className='flex justify-center  items-center w-full rounded-xl bg-gray-400/30 gap-5  p-1 '>
                <div onClick={() => showLogin()} className={` ${loginPage ? 'bg-white rounded-xl p-2 items-center shadow-xl text-blue-600' : 'bg-transparent text-black/50'} flex  w-full items-center justify-center`}>
                    <h1 className='text-2xl font-bold'>Login </h1>
                </div>
                <div onClick={() => showSignUp()} className={` ${!loginPage ? 'bg-white rounded-xl p-2 shadow-xl text-blue-600' : 'bg-transparent text-black/50'} flex w-full items-center justify-center`}>
                    <h1 className='text-2xl  font-bold '>Sign up </h1>
                </div>
            </div>
            {loginPage && (
                <Routes>
                    <Route path='/login' element={<Login handleLogin={handleLogin} />} />\
                </Routes>
            )}
            {!loginPage && (
                <Routes>
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            )}
        </div>
    )
}
