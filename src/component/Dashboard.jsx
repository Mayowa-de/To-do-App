import {CircularProgress} from '@mui/material'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useState } from 'react'

const Dashboard = () =>{
   const [progress, setProgress] = useState(70)

    return (
        <div className='justfiy-center flex flex-col  items-center w-full shadow-xl gap-5 bg-white rounded-xl p-4'>
          <Box sx={{ display:'inline-flex', alignItems:'center', position:'relative'  }}>
       <CircularProgress variant='determinate' enableTrackSlot size={170} justifyContent='center'  display='flex' alignItems='center'  value={75} className='text-blue-600 bg-white p-2 rounded  flex h-32 justify-center items-center '/>
       <Box sx={{
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
       }}>
        <div className='flex flex-col items-center font-bold text-gray-500'>
        <Typography variant='caption' component='div' fontSize={30} alignItems='center' display='flex' flexDirection='column' fontWeight='bold' color='dark' className='text-black font-bold'>
            {progress}%  
        </Typography>
        <h3> Completed</h3>
        </div>
       </Box>
       </Box>
       <div className='flex gap-5'>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-bold'>15</h1>
          <h3 className='text-gray-500 text-xl'>Total Tasks</h3>
        </div>
        <hr className='text-gray-500 ' />
       </div>
       </div>
    )

}
export default Dashboard