import React, { useEffect, useState } from 'react'
import { Button, TextField, Checkbox, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import Image from '../assets/image.jpg'
import { useNavigate } from 'react-router-dom'

export default function Login({handleLogin}) {
   const [open, setOpen] = useState(false)
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const navigate = useNavigate()

  useEffect(()=>{
    // keep this effect if you plan to add side-effects later
  }, [])

   const handleOpen  = () =>{
    setOpen(true)
   }
   const handleClose = () =>{
    setOpen(false)
   }

   const onLogin = () =>{
    // call the passed handler to set auth/token
    handleLogin()
    // navigate to home after successful login
    navigate('/')
   }

  return (
    <section className='flex w-full min-h-screen justify-center items-center'>
        <div className='flex gap-5 justify-center items-center border-[1px] shadow-xl border-gray-500/50 md:w-1/2 p-2 px-4 w-full py-10 '> 
        <img src={Image} alt="image" className='w-72 h-72 hidden md:flex' />

        <div className='flex flex-col gap-5 w-full justify-center '>
            <div className='flex justify-center md:justify-start items-center w-full'>
            <h1 className='text-2xl font-bold '>Login <span className='text-blue-600' >&lt;&#92;&gt;</span></h1>
            </div> 
            <div className='flex flex-col gap-10'>
            <TextField id='email' label='Email' variant='outlined' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <TextField id='password' label='Password' variant='outlined' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
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
                    <Button  onClick={handleClose} > Cancel</Button>
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
