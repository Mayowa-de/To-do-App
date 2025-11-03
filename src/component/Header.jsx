import React, { useActionState, useEffect, useRef, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import Profile from '../assets/Avatar.jpg'
import { FaSearch, FaBell,FaQrcode, FaLightbulb, FaTimes,  FaSignOutAlt } from 'react-icons/fa'
import { MdDashboard, MdAdd, MdCalendarToday, MdViewModule } from 'react-icons/md'

export default function Header({handleLogOut}) {
    const [showCalendar, setShowCalendar] = useState(false)
    const [showNavbar,setShowNavbar] = useState(false)
    const [date,setDate] = useState(new Date())
    const currentRef = useRef()
  const days =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const dayFormat= date.getDay()
    const month = date.getMonth()
    const year = date.getFullYear()
    const day= days[date.getDay()]

    useEffect(()=>{
        setShowCalendar(true)

        const handleClickOutside= (event)=>{
          if(currentRef.current && !currentRef.current.contains(event.target)){
            setShowCalendar(false)
          }
        }

        document.addEventListener('mousedown',handleClickOutside)

        return () =>{
           document.removeEventListener('mousedown', handleClickOutside)
        }
    },[])

    const handleShowCalendar = () =>{
       setShowCalendar(true)
    }
    const handleShowNavbar = ()=>{
        setShowNavbar(true)
    }
    const handleCloseNavbar = () =>{
        setShowNavbar(false)
    }
  return (
    <header className='flex gap-5 justify-center items-center w-full flex-col md:flex md:flex-row'>
        <div className='flex w-full justify-between'>
        <div className='flex items-center gap-2 text-2xl font-bold'>
        <h1 className=' text-red-500  flex '>To<span className='text-black'>Do</span></h1><span className='text-red-500'>App</span>
        </div>
        <div className='relative flex flex-col w-full items-end'>
        <button onClick={handleShowNavbar} className={`${showNavbar ? 'hidden' : 'block'} text-3xl font-bold md:hidden`}>&#9776;</button>
        <div className='flex relative items-start w-full'>
         <FaTimes onClick={handleCloseNavbar} className={`${showNavbar ? 'block' : 'hidden' } text-3xl text-white z-50 items-start absolute flex mt-10 ml-2 `}/>
         </div>
        {showNavbar &&(
         <div className='flex  justify-center absolute mt-8  items-center w-full top-0 left-0'>
           <div className='flex flex-col bg-black w-full gap-5 px-2 z-50 rounded-xl pb-7 items-center top-0 left-0'>
            <div className='flex flex-col items-center text-white w-full relative'>
            <img src={Profile} alt="profile image" className='rounded-full h-16 w-16 absolute bottom-20' />
            <div className='flex flex-col gap-3 items-center mt-12'>
            <p>amanuel</p>
            <p>
                amanuel@gmail.com
            </p>
            </div>
            </div>

        <ul className='flex flex-col   gap-5 text-white text-xl px-3 font-bold w-full items-center'>
            <li className='flex bg-white rounded-xl gap-3 text-red-500 items-center w-full justify-center p-4 '><MdDashboard className='text-2xl'/>Dashboard</li>
            <li className='flex items-center px-16 gap-5 hover:bg-white rounded-xl hover:text-red-500 hover:p-4 hover:w-full hover:justify-center '><FaLightbulb className='text-2xl'/>My Tasks</li>
            <li className='flex gap-3 px-16 items-center hover:bg-white rounded-xl hover:text-red-500 hover:p-4 hover:w-full hover:justify-center'><MdAdd className='text-2xl'/>Add Task</li>
            <li className='flex gap-3 items-center px-16 hover:bg-white rounded-xl hover:text-red-500 hover:p-4 hover:w-full hover:justify-center'><MdViewModule/>Tasks Categories </li>
            <li onClick={handleShowCalendar} className='flex gap-3 items-center px-16 hover:bg-white rounded-xl hover:text-red-500 hover:p-4 hover:w-full hover:justify-center'><MdCalendarToday className='text-2xl'/>Calendar</li>
            <button className='flex mt-20 items-center px-16 gap-3 hover:bg-white rounded-xl hover:text-red-500 hover:p-4 hover:w-full hover:justify-center' onClick={handleLogOut}><FaSignOutAlt className='text-2xl'/>LogOut</button>
        </ul>
        </div>
        </div>
         )}
        </div>
        </div>
       
        <div className='flex items-center justify-center w-full'>
        <input type="text" className='border-none outline-none  h-12 w-[430px] rounded-xl rounded-r-none p-4' placeholder='Search your task...' />
        <button className='p-4 items-center flex rounded-xl bg-red-500 rounded-l-none h-12'><FaSearch className='text-white text-xl'/></button>
        </div>
        <div className='hidden md:flex justify-center items-center w-full gap-6 relative'>
        <div className='flex gap-5 '>
        <button className='p-3 bg-red-500 rounded-md'><FaBell className='text-white'/></button>
        <button className='bg-red-500 p-3 rounded-md'><FaQrcode className='text-white'/></button>
        </div>

        <div className='flex flex-col items-center'>
            <h2 onClick={handleShowCalendar} className='font-bold cursor-pointer'>{day}</h2>
            <p className='text-blue-500'>{dayFormat}/{month}/{year}</p>
        </div>
        {showCalendar &&(
            <div ref={currentRef} >
        <Calendar onChange={setDate} value={date} className='absolute mt-96 p-4 rounded-xl border-0 shadow-xl'/>
        </div>
        )}
        </div>
    </header>
  )
}
