import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Pages from './pages'
import Login from './component/login'
function App() {
     const [isAuthenticated, setIsAuthenticated] = useState(false)
    
        useEffect(() => {
            const token = localStorage.getItem('token')
            if (token) {
                setIsAuthenticated(true)
            } else {
                setIsAuthenticated(false)
            }
        }, [])
    
        const handleLogin = () => {
            const token = 'dummy-token'
            localStorage.setItem('token', token)
            setIsAuthenticated(true)
        }
        const handleLogOut = () =>{
            localStorage.removeItem('token')
            setIsAuthenticated(false)
        }
  return (
      <div className="h-full justify-center flex items-center bg-gray-100 px-2 w-full">
        <BrowserRouter>
          <Routes>
            <Route path='/'  element={isAuthenticated ? <Navigate to='/login'/> :  <Pages handleLogOut={handleLogOut}/>} />
            <Route path='/login' element={<Login handleLogin={handleLogin} />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}
export default App