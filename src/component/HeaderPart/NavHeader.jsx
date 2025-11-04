import { useRef, useState } from 'react'
import { FaLightbulb, FaTimes, FaSignOutAlt } from 'react-icons/fa'
import { MdDashboard, MdAdd, MdCalendarToday, MdViewModule } from 'react-icons/md'
import Profile from '../../assets/Avatar.jpg'
import Calendar from 'react-calendar'

export default function NavHeader({ handleLogOut }) {
    const [showCalendar, setShowCalendar] = useState(false)
    const [date, setDate] = useState(new Date())
    const currentRef = useRef()

    const handleShowCalendar = () => {
        setShowCalendar(true)
    }
    return (
        <>
            <nav className='flex  justify-center absolute mt-8  items-center w-full top-0 left-0'>
                <div className='flex flex-col bg-black w-full gap-5 px-2 z-20 rounded-xl pb-7 items-center '>
                    <div className='flex flex-col items-center text-white  relative'>
                        <img src={Profile} alt="profile image" className='rounded-full h-16 w-16 absolute bottom-20' />
                        <div className='flex flex-col gap-3 items-center mt-12'>
                            <p>amanuel</p>
                            <p>
                                amanuel@gmail.com
                            </p>
                        </div>
                    </div>

                    <ul className='flex flex-col   gap-5 text-white text-xl px-3 mx-12 font-bold w-full items-center justify-center'>
                        <li className='flex bg-white rounded-xl gap-3 text-red-500 items-center w-full justify-center p-4 '><MdDashboard className='text-2xl' />Dashboard</li>
                        <li className='flex items-center  gap-5 hover:bg-white rounded-xl hover:text-red-500 hover:p-4 hover:w-full hover:justify-center '><FaLightbulb className='text-2xl' />My Tasks</li>
                        <li className='flex gap-3  items-center hover:bg-white rounded-xl hover:text-red-500 hover:p-4 hover:w-full hover:justify-center'><MdAdd className='text-2xl' />Add Task</li>
                        <li className='flex gap-3 items-center hover:px-32 hover:bg-white rounded-xl hover:text-red-500 hover:p-4 hover:w-full hover:justify-center'><MdViewModule />Tasks Categories </li>
                        <li onClick={handleShowCalendar} className='flex gap-3 items-center  hover:bg-white rounded-xl hover:text-red-500 hover:p-4 hover:w-full hover:justify-center'><MdCalendarToday className='text-2xl' />Calendar</li>
                        <button className='flex mt-20 items-center gap-3 hover:bg-white rounded-xl hover:text-red-500 hover:p-4 hover:w-full hover:justify-center' onClick={handleLogOut}><FaSignOutAlt className='text-2xl' />LogOut</button>
                    </ul>
                </div>
            </nav>
            {showCalendar && (
                <div ref={currentRef} className='flex absolute top-0 justify-center z-50 w-full' >
                    <Calendar onChange={setDate} value={date} className='absolute mt-96 p-4 rounded-xl border-0 shadow-xl' />
                </div>
            )}
        </>

    )
};
