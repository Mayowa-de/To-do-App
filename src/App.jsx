import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Pages from './pages'
import Auth from './component/UserAuth/auth'
import AccountSetting from './component/AccountSetting'

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
      <div className="h-full flex items-center bg-slate-200/50 px-1   w-full">
        <BrowserRouter>
          <Routes>
            {/* When authenticated show Pages at /, otherwise go to /login */}
            <Route path='/' element={isAuthenticated ? <Pages handleLogOut={handleLogOut}/> : <Navigate to='/auth/login' />} />
            {/* If already authenticated, visiting /login should redirect to home */}
            <Route path='/auth/*' element={isAuthenticated ? <Navigate to='/' /> : <Auth handleLogin={handleLogin} />} />
            <Route path="/settings" element={<AccountSetting/>} />
          </Routes>
        </BrowserRouter>
      </div>
  )
}
export default App