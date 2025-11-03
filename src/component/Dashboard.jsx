import {CircularProgress} from '@mui/material'

const Dashboard = () =>{


    return (
        <div className='justfiy-center flex items-center w-full bg-white rounded-xl'>
       <CircularProgress variant='determinate' size={120}  value={75} className='text-blue-600 bg-white p-2 rounded  flex h-32 justify-center items-center'/>
       </div>
    )

}
export default Dashboard