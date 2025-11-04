import React from 'react'
import { FaUser, FaQuestionCircle, FaLock, FaAward, FaBell, FaToggleOn, FaToggleOff} from 'react-icons/fa'
import { MdChevronRight, MdBrightnessMedium, MdFormatAlignCenter, MdVibration, MdReportProblem, MdSecurity} from 'react-icons/md'
import Profile from '../assets/Avatar.jpg'
export default function AccountSetting() {
  return (
    <div className='flex flex-col justify-center  w-full gap-5 mt-12'>
      <div className='flex flex-col justify-center items-center gap-3'>
        <img src={Profile} alt="profile image" className='rounded-full h-16 w-16 ' />
        <div className='flex flex-col gap-3 items-center font-medium'>
                            <p>amanuel</p>
                            <p>
                                amanuel@gmail.com
                            </p>
                        </div>
      </div>
      <div className='flex flex-col gap-3'>
      <h3 className='font-medium'>ACCOUNT</h3>
      <div className='flex flex-col gap-[1px]'>
      <div className='flex gap-3 items-center p-4 w-full justify-between bg-white shadow-xl text-xl font-medium '>
        <div className='flex items-center gap-3'>
             <div className='text-blue-600 bg-blue-500/30 p-2'>
      <FaUser/>
       </div>
      <h3 className=''>Edit Profile</h3>
      </div>
      <MdChevronRight className='items-end flex text-3xl text-gray-500'/>
      </div>
      <div className='flex gap-3 items-center p-4 w-full justify-between bg-white shadow-xl text-xl font-medium '>
        <div className='flex items-center gap-3'>
            <div className='text-blue-600 bg-blue-500/30 p-2'>
      <FaLock/>
      </div>
      <h3 className=''>Change Password</h3>
      </div>
      <MdChevronRight className='items-end flex justify-end text-gray-500 text-3xl'/>
      </div>
      <div className='flex gap-3 items-center p-4 w-full justify-between bg-white shadow-xl text-xl font-medium '>
        <div className='flex items-center gap-3'>
             <div className='text-blue-600 bg-blue-500/30 p-2'>
      <FaAward/>
      </div>
      <h3 className=''>Manage Subscription</h3>
      </div>
      <MdChevronRight className='items-end flex justify-end text-gray-500 text-3xl'/>
      </div>
      </div>
  </div>
      <div className='flex flex-col gap-3 '>
      <h3 className='font-medium'>PREFERENCES</h3>
      <div className='flex flex-col gap-[1px] items-center'>
      <div className='flex gap-3 items-center p-4 w-full justify-between bg-white shadow-xl text-xl font-medium  rounded-xl'>
        <div className='flex items-center gap-3'>
             <div className='text-blue-600 bg-blue-500/30 p-2'>
      <FaBell/>
       </div>
      <h3 className=''>Push notification</h3>
      </div>
      <FaToggleOn className='items-end flex text-3xl justify-end text-blue-500'/>
      </div>
      <div className='flex gap-3 items-center p-4 w-full justify-between bg-white shadow-xl text-xl font-medium '>
        <div className='flex items-center gap-3'>
            <div className='text-blue-600 bg-blue-500/30 p-2'>
      <MdBrightnessMedium />
      </div>
      <h3> App Theme</h3>
      </div>
      <MdChevronRight className='items-end flex justify-end text-gray-500 text-3xl'/>
      </div>
      <div className='flex gap-3 items-center p-4 w-full justify-between bg-white shadow-xl text-xl font-medium '>
        <div className='flex items-center gap-3'>
             <div className='text-blue-600 bg-blue-500/30 p-2'>
      <MdFormatAlignCenter/>
      </div>
      <h3 className=''>Default sorting</h3>
      </div>
      <div className='flex items-end '>
       <p className='text-gray-500'>Due Date</p><MdChevronRight className=' flex justify-end text-gray-500 text-3xl'/>
      </div>
      </div>
      <div className='flex gap-3 items-center p-4 w-full justify-between bg-white shadow-xl text-xl font-medium '>
        <div className='flex items-center gap-3'>
            <div className='text-blue-600 bg-blue-500/30 p-2'>
      <MdVibration/>
      </div>
      <h3 className=''>Sound & Haptics</h3>
      </div>
      <FaToggleOff className='items-end flex justify-end text-gray-500 text-3xl'/>
      </div>
      </div>
  </div>
      <div className='flex flex-col gap-3 '>
      <h3 className='font-medium'>ABOUT & SUPPORT</h3>
      <div className='flex flex-col gap-[1px] items-center'>
      <div className='flex gap-3 items-center p-4 w-full justify-between bg-white shadow-xl text-xl font-medium  rounded-xl'>
        <div className='flex items-center gap-3'>
             <div className='text-blue-600 bg-blue-500/30 p-2'>
      <FaQuestionCircle/>
       </div>
      <h3 >Help Center</h3>
      </div>
      <MdChevronRight className=' flex justify-end text-gray-500 text-3xl'/>
      </div>
      <div className='flex gap-3 items-center p-4 w-full justify-between bg-white shadow-xl text-xl font-medium '>
        <div className='flex items-center gap-3'>
            <div className='text-blue-600 bg-blue-500/30 p-2'>
      <MdReportProblem/>
      </div>
      <h3 >Send Feedback</h3>
      </div>
      <MdChevronRight className='items-end flex justify-end text-gray-500 text-3xl'/>
      </div>
      <div className='flex gap-3 items-center p-4 w-full justify-between bg-white shadow-xl text-xl font-medium '>
        <div className='flex items-center gap-3'>
             <div className='text-blue-600 bg-blue-500/30 p-2'>
      <MdSecurity/>
      </div>
      <h3 >Privacy Policy</h3>
      </div>
      <div className='flex items-end '>
         <MdChevronRight className=' flex justify-end text-gray-500 text-3xl'/>
      </div>
      </div>
      </div>
  </div>
  <button className='flex items-center justify-center text-red-500 p-4 w-full bg-white rounded-xl mb-7 font-medium'>Log Out</button>
    </div>
  )
}
