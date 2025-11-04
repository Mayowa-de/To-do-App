import {CircularProgress} from '@mui/material'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useState } from 'react'

const Dashboard = () =>{
   const [progress, setProgress] = useState(70)

    return (
        <div className='justfiy-center flex px-12  items-center w-full shadow-xl h-52 bg-white rounded-xl'>
        <Box sx={{ position: 'relative', display: 'inline-flex', background:'black'}}>
       <CircularProgress variant='determinate' size={150} justifyContent='center' display='flex' alignItems='center'  value={75} className='text-blue-600 bg-white p-2 rounded  flex h-32 justify-center items-center'/>
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
        <Typography variant='caption' component='div' fontSize={20} fontWeight='bold' color='text.secondary'>
            {progress}%
        </Typography>
       </Box>
         </Box>
       </div>
    )

}
export default Dashboard