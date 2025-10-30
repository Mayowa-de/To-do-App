import {CircularProgress} from '@mui/material'

const Dashboard = () =>{


    return (
        <div className='justfiy-center flex items-center'>
       <CircularProgress variant='determinate' size={40}  value={75} className='text-blue-600' />
       </div>
    )

}
export default Dashboard