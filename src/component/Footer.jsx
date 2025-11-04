import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import { FaBell } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'

export default function Footer() {
  return (
    <div className='flex gap-5 fixed bottom-0 bg-cyan-400 p-4 rounded-t-md w-full md:hidden justify-center'>
      <ul className='flex items-center gap-12 text-xl font-medium'>
        <li className='flex flex-col items-center'><AiFillHome className='text-2xl'/>Home</li>
        <li className='flex items-center flex-col '><FaBell className='text-2xl'/>Notification</li>
      <Link to='/settings'> <li className='flex flex-col items-center'><MdSettings className='text-2xl'/>Setting</li></Link>
      </ul>
    </div>
  )
}
