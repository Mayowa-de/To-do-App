import React, {  useEffect, useRef, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { FaSearch, FaBell,FaQrcode,  FaTimes } from 'react-icons/fa'
import NavHeader from './NavHeader'

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
        <div className='flex items-center gap-2 text-2xl font-bold '>
        <h1 className=' text-red-500  flex '>To<span className='text-black'>Do</span></h1><span className='text-red-500'>App</span>
        </div>
        <div className='relative flex flex-col w-full items-end'>
        <button onClick={handleShowNavbar} className={`${showNavbar ? 'hidden' : 'block'} text-3xl font-bold md:hidden z-30`}>&#9776;</button>
        <div className='flex relative items-start w-full'>
         <FaTimes onClick={handleCloseNavbar} className={`${showNavbar ? 'block' : 'hidden' } text-3xl text-white z-30 items-start absolute flex mt-10 -ml-10 left-0`}/>
         </div>
        {showNavbar &&(
          <div className='flex absolute'>
          <NavHeader handleLogOut={handleLogOut}/>
          </div>
         )}
        </div>
        </div>
       
        <div className='flex items-center justify-center w-full shadow-xl'>
        <input type="text" className='border-none outline-none  h-12 w-[430px] rounded-xl rounded-r-none p-4' placeholder='Search your task...' />
        <button className='p-4 items-center flex rounded-xl bg-red-500 rounded-l-none h-12'><FaSearch className='text-white text-xl'/></button>
        </div>
        <div className='hidden md:flex justify-center items-center w-full gap-6 relative'>
        <div className='flex gap-5 '>
        <button className='p-3 bg-red-500 rounded-md'><FaBell className='text-white'/></button>
        <button className='bg-red-500 p-3 rounded-md '><FaQrcode className='text-white'/></button>
        </div>

        <div className='md:flex flex-col items-center '>
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
