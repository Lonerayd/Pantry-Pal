import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Footer from './components/Footer'
<<<<<<< HEAD
import ContactUs from './pages/ContactUs'

=======
import Story from './pages/OurStory'
>>>>>>> 47f3414dbc746379f67dfdd27c014f897e13943f
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
              path="/signup" 
              element={!user ? <Signup /> : <Navigate to="/" />} 
            />
<<<<<<< HEAD
            <Route
              path="/ContactUs"
              element={!user ? <ContactUs /> : <Navigate to="/" />} 
            />
=======

>>>>>>> 47f3414dbc746379f67dfdd27c014f897e13943f
          </Routes>
        </div>
        {!user ? <Footer/> :null}
       
      </BrowserRouter>
    </div>
  );
}

export default App;
