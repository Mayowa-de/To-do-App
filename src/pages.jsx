import React from 'react'
import Navbar from './component/Navbar'
import Header from './component/Header'
import Dashboard from './component/Dashboard'
import Footer from './component/Footer'
export default function pages({handleLogOut}) {
  return (
    <>
      <div className=' justify-center gap-2 w-full flex items-start  flex-col '>
        <div className='flex justify-center items-center w-full bg-cyan-400 md:px-4 p-2'>
        <Header handleLogOut={handleLogOut}/>
        </div>
        
        <Navbar/>
        <Footer/>
      </div>
       <Dashboard/>
</>
  )
}
