import React from 'react'
import { useNavigate} from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import AddSenders from './ComplaintForm';
import AStatus from './AStatus';
import './Style.css';
import { NavLink } from 'react-router-dom';
import Overall from './FeedbackForm';
import Footer from './Footer';
function ADashboard() {
  const navigate = useNavigate();
    
      const handleStatusClick = () => {
        navigate('/AStatus');
      };
      const handleOverallClick = () => {
        navigate('/Overall');
      };
  return (
    <div>
        <nav className="navbar bg-dark justify-content-left" >
            
            <h1 id="header">
            <h1>ADMIN DASHBOARD</h1>
            </h1>

            {/* <div className="justify-content-left" >
                <h5 >
                    <Link to="/register" className="btn btn-secondary" style={{margin:"12px"}}>Register</Link>
                    <Link to="/login" className="btn btn-secondary" >Login</Link>&nbsp;&nbsp;
                </h5>
            </div> */}
            <li className="nav-link">
            <NavLink to="/Body" className="nav-link" onClick={() => localStorage.clear()} style={({ isActive }) => ({ color: isActive ? 'green' : 'white' })}>
            Logout
        </NavLink>
      </li>
            
        </nav>
    <div className="dashboard-container" >
  <div className="dashboard-sidebar">
    <ul>
      <li>
        <button onClick={handleStatusClick}>Complaints Raised</button>
      </li>
      <li>
        <button onClick={handleOverallClick}>Overall</button>
      </li>
    </ul>
  </div>
  <div className="dashboard-content">
    <Routes>
      <Route path="sender" element={<AddSenders />} />
      <Route path="status" element={<AStatus />} />
      <Route path="overall" element={<Overall />} />
    </Routes>
  </div>
  <Footer />
</div>
</div>

    );
  };

export default ADashboard