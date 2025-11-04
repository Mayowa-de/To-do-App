import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TextField, Button } from '@mui/material'

export default function SignUp({loginPage}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const onLogin = () => {
        // call the passed handler to set auth/token
        handleLogin()
        // navigate to home after successful login
        navigate('/login')
    }
    return (
        <div className='flex justify-center items-center w-full flex-col px-4 mt-10'>
            <div className='flex flex-col gap-10 w-full'>
                <TextField id='name' label='Name' variant='outlined' type='text' value={name} onChange={(e) => setEmail(e.target.value)} />
                <TextField id='email' label='Email' variant='outlined' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField id='password' label='Password' variant='outlined' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant='contained' onClick={onLogin} className='h-12'>Sign up</Button>
            </div>
            <div className='flex justify-center items-center'>
                <p>Already have an account? <a href="#" className='text-blue-500 underline'>Login</a></p>
            </div>

        </div>
    )
}
