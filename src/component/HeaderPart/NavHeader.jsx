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
        <div className='flex flex-col relative w-full'>
            <nav className='flex  justify-center  mt-8  items-center w-full top-0 left-0'>
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

                    <ul className='flex flex-col   gap-5 text-white text-xl px-2 mx-12 font-bold w-full items-center justify-center'>
                        <div className='flex gap-5 bg-white p-3 rounded-xl w-full text-red-500 justify-center items-center'>
                            <MdDashboard className='text-2xl items-start' />
                        <li className='font-bold'  >Dashboard</li>
                        </div>
                        <div className='flex items-center rounded-xl p-3  hover:text-red-500 text-white hover:bg-white gap-6 justify-center hover:w-full'>
                            <FaLightbulb className='text-2xl items-start' />
                        <li className='font-bold'>My Tasks</li>
                        </div>
                        <div className='flex gap-5 rounded-xl p-3 hover:bg-white hover:text-red-500 text-white items-center justify-center hover:w-full'>
                            <MdAdd className='text-2xl' />
                        <li className='font-bold'>Add Task</li>
                        </div>
                        <div className='flex items-center hover:w-full hover:bg-white text-white rounded-xl gap-5 p-3 hover:text-red-500 justify-center'>
                            <MdViewModule />
                        <li className='font-bold'>Tasks Categories </li>
                        </div>
                        <div className='flex items-center hover:bg-white hover:text-red-500 rounded-xl p-3 justify-center hover:w-full gap-5'>
                            <MdCalendarToday className='text-2xl' />
                        <li onClick={handleShowCalendar} className='font-bold'>Calendar</li>
                        </div>
                        <div className='flex items-center hover:bg-white p-3 hover:text-red-500 hover:w-full gap-5 justify-center rounded-xl mt-12'>
                            <FaSignOutAlt className='text-2xl' />
                        <button className='font-bold' onClick={handleLogOut}>LogOut</button>
                        </div>
                    </ul>
                </div>
            </nav>
            {showCalendar && (
                <div ref={currentRef} className='flex absolute top-0 justify-center z-50 w-full items-center' >
                    <Calendar onChange={setDate} value={date} className=' w-full p-4 rounded-xl border-0 shadow-xl' />
                </div>
            )}
        </div>

    )
};
