import React, { useEffect, useState } from 'react'
import { Button, TextField, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import SignUp from './SignUp'

export default function Login({ handleLogin }) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginPage, setLoginPage] = useState(true)
  const navigate = useNavigate()

  const handleClick = (div) =>{
    setLoginPage(div)
    navigate(div === true ? '/login' : '/signup')
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const onLogin = () => {
    // call the passed handler to set auth/token
    handleLogin()
    // navigate to home after successful login
    navigate('/')
  }

  return (
    <section className='flex w-full  justify-center items-center'>
      <div className='flex gap-5 justify-center items-center  md:w-1/2 p-2 px-4 w-full py-10 '>
        <div className='flex flex-col gap-5 w-full justify-center '>
          <div className='flex flex-col gap-10'>
            <TextField id='email' label='Email' variant='outlined' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField id='password' label='Password' variant='outlined' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button variant='contained' onClick={onLogin} className='h-12'>Login</Button>
          </div>
  
          <section className='flex justify-between items-center'>
            <div className='flex gap-1 items-center'>
              <Checkbox />
              <p>Remember me</p>
            </div>
            <a href="#" onClick={handleOpen} className='text-blue-500 underline' >Forgot Password</a>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle className='font-bold'>Reset Password</DialogTitle>
              <DialogContent>Are sure you want to reset Password</DialogContent>
              <DialogActions>
                <Button onClick={handleClose} > Cancel</Button>
                <Button onClick={handleClose}>Reset</Button>
              </DialogActions>
            </Dialog>
          </section>
          <div className='flex justify-center items-center'>
            <p>Don't have an account? <a href="#" className='text-blue-500 underline'>Sign up</a></p>
          </div>

        </div>
      </div>
    </section>
  )
}
