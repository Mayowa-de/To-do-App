import React from 'react'
import {MdDashboard, MdSettings, MdViewModule} from 'react-icons/md'
import {FaLightbulb,FaClipboardList, FaQuestionCircle, FaSignOutAlt} from 'react-icons/fa'
import Profile from '../assets/Avatar.jpg'
export default function Navbar() {
  return (
   <nav className='flex-col gap-10 bg-black rounded-xl shadow-xl px-2 justify-center items-center p-4 text-white top-5 mt-8 hidden md:flex'>
    <div className='flex flex-col items-center  relative'>
        <img src={Profile} alt="profile image" className='w-16 h-16 rounded-full absolute bottom-16' />
        <div className='flex flex-col gap-3 mt-5 justify-center items-center'>
        <h3>amanuel</h3>
        <p>amanuel@gmail.com</p>
        </div>
    </div>

    <ul className='flex flex-col gap-7 items-start font-bold justify-center'>
        <li className='flex bg-white rounded-xl w-full text-red-500 p-4 px-16 pr-12 items-center gap-3'><MdDashboard/> Dashboard</li>
        <li className='flex gap-3 items-center text-white justify-center px-16'><FaLightbulb className=''/> Vital Task</li>
        <li className='flex items-center px-16 gap-3'><FaClipboardList/>My Task</li>
        <li className='flex items-center gap-3 text-white px-16'><MdViewModule/>Task Categories</li>
        <li className='flex gap-3 items-center px-16'><MdSettings/>Setting</li>
        <li className='flex gap-3 items-center px-16'><FaQuestionCircle/>Help</li>
        <button className='mt-10 flex px-16 items-center gap-3'>
           <FaSignOutAlt/> Logout
        </button>
    </ul>
   </nav>
  )
}
