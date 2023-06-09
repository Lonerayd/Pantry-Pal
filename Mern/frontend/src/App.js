import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Footer from './components/Footer'
import ContactUs from './pages/ContactUs'
import Profile from './components/profile'


import Story from './pages/OurStory'
import './index.css'

function App() {
  const { user } = useAuthContext()

  return (
    
    <div className="App">
      
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route 
              path="/" 
              element={user ? <Home /> : <Navigate to="/pantrypal" />} 
            />
            <Route
              path="/pantrypal"
              element={!user ? <Landing/>:<Navigate to="/login"/>}
            />
             <Route
              path='/OurStory'
              element={!user ? <Story/>:<Navigate to="/login"/>}
             />
            <Route 
              path="/login" 
              element={!user ? <Login /> : <Navigate to="/" />} 
            />
            <Route 
              path="/profile" 
              element={!user ? <Login /> : <Profile/>} 
            />
            <Route 
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
            <Route
              path="/ContactUs"
              element={!user ? <ContactUs /> : <Navigate to="/" />} 
            />


          </Routes>
        </div>
        {!user ? <Footer/> :null}
       
      </BrowserRouter>
    </div>
  );
}

export default App;
