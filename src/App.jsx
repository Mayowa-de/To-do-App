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
      <div className="h-full justify-center flex items-center bg-gray-100  w-full">
        <BrowserRouter>
          <Routes>
            {/* When authenticated show Pages at /, otherwise go to /login */}
            <Route path='/' element={isAuthenticated ? <Pages handleLogOut={handleLogOut}/> : <Navigate to='/login' />} />
            {/* If already authenticated, visiting /login should redirect to home */}
            <Route path='/login' element={isAuthenticated ? <Navigate to='/' /> : <Login handleLogin={handleLogin} />} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}
export default App