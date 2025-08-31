import React from 'react'
import './Style.css';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
function Body() {
    const navigate = useNavigate();

  const handleStudent = () => {
    navigate('/Home');
  };
  const handleAdmin=()=>{
    navigate('/ASignin');
  }
  return (
    <div style={{ alignItems: 'center', justifyContent: 'center' }}>
        <nav className="navbar bg-dark justify-content-left" >
            
            <h1 id="header">
            <h1>WELCOME! - PPM</h1>
            </h1>

            {/* <div className="justify-content-left" >
                <h5 >
                    <Link to="/register" className="btn btn-secondary" style={{margin:"12px"}}>Register</Link>
                    <Link to="/login" className="btn btn-secondary" >Login</Link>&nbsp;&nbsp;
                </h5>
            </div> */}
            
            
        </nav>
    <div style={{flexDirection: 'column',alignItems: 'center', justifyContent: 'center',}}>
    <div className='heading' >
      <h1 >CBIT PLACEMENT MANAGEMENT</h1>
      </div>
      
      <button className='btns' onClick={handleStudent}>
        Student
      </button>
      <button className='btna'onClick={handleAdmin}>Admin</button>
        </div>
        <Footer />
    </div>  
        
  )
}

export default Body