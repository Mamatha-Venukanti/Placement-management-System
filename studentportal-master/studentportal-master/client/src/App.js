import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Addcomp from './Addcomp'
import Register from './Register'
import ComplaintForm from './ComplaintForm'
import Indregcomp from './Indregcomp'
import Selectedcomp from './Selectedcomp'
import Dsa from './Dsa'
import Dbms from './Dbms'
import OS from './Os'
import Footer from './Footer'
import Body from './Body'
import Asignin from './Asignin'
import ALogin from './ALogin'
import ADashboard from './ADashboard'
const App = () => {
  
  return (
    <div>
      <BrowserRouter>   
      <Routes>
        <Route path='/Body' exact element={<Body />} />
        <Route path='/Home' exact element={<Home />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/register' exact element={<Register />} />
        <Route path='/dashboard' exact element={<Dashboard />} />
        <Route path='/ADashboard' exact element={<ADashboard />} />
        <Route path='/addcompany' exact element={<Addcomp />} />
        <Route path='/Dsa' exact element={<Dsa />} />
        <Route path='/Dbms' exact element={<Dbms />} />
        <Route path='/Os' exact element={<OS/>} />
        <Route path='/ALogin' exact element={<ALogin/>} />
        <Route path='/Asignin' exact element={<Asignin/>} />
        <Route path='/Footer' exact element={<Footer />} />
        <Route path='/addcompany' exact element={<Addcomp />} />
        <Route path='/selectedcompanies' exact element={<Selectedcomp />} />
        <Route path='/ComplaintForm' exact element={<ComplaintForm />} />
        <Route path='/indprofile/:id/:sid' exact element={<Profile />} />
        <Route path='/indregcompprofile/:id' exact element={<Indregcomp />} />
      </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
