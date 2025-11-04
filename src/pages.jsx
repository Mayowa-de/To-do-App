import Navbar from './component/Navbar'
import Header from './component/HeaderPart/Header'
import Dashboard from './component/Dashboard'
import Footer from './component/Footer'
export default function pages({handleLogOut}) {
  return (
    <div className='flex flex-col gap-5 w-full justify-center items-center'>
      <div className=' justify-center gap-2 w-full flex items-start  flex-col '>
        <div className='flex justify-center items-center w-full bg-cyan-400 md:px-4 p-2'>
        <Header handleLogOut={handleLogOut}/>
        </div>
        
        <Navbar/>
        <Footer/>
      </div>
      <div className='flex items-center justify-center w-full px-4'>
       <Dashboard/>
       </div>
</div>
  )
}
