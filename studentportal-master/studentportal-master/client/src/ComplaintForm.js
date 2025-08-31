import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
//import axios from 'axios'
import Header from "./Header"
import Footer from './Footer'
const ComplaintForm = () => {
   const navigate = useNavigate();
  console.log('Rendering ComplaintForm'); 
  const [selectedLab, setSelectedLab] = useState('');
  const [complaintText, setComplaintText] = useState('');
  const [supervisorView, setSupervisorView] = useState('');
  const [LabNumber,setLabNumber]=useState();
  const[DepartmentName,setDepartmentName]=useState();
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const submitComplaint = async () => {
      try {
        const response = await fetch('http://localhost:3000/complaints', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            selectedLab,
            complaintText,
            supervisorView,
            LabNumber,
            DepartmentName,
          }),
        });

        if (response.ok) {
          alert('Complaint submitted successfully');
          // You can also redirect the user or perform other actions after successful submission
          navigate('/Thankyou');
        } else {
          const errorData = await response.json();
          
          alert(`Error: ${errorData.error}`);
        }
      } catch (error) {
        console.error('Error submitting complaint:', error);
       
        alert('Error submitting complaint. Please try again later.');
      }
    };

    submitComplaint();}
    
    
    return (
        <div>
            <Header />
            
            <section className="container">
                <h1 className="large " style={{"color":"green","marginTop":"20px"}}>Drop your queries HERE!</h1>
                

            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand"><span style={{color:"blue"}}> 😊 </span></h3>

                    
                    
                </div>
            </nav>
            <div className="complaint-form-container">
      
      <form className="complaint-form" onSubmit={handleFormSubmit}>
      <h2>Register Complaint</h2>
        <div className="form-group">
          <label htmlFor="labSelector">Select your problem:</label>
          <select
            id="labSelector"
            className="form-control"
            value={selectedLab}
            onChange={(e) => setSelectedLab(e.target.value)}
          >
            <option value="">Select an option</option>
            <option value="lab">Internship </option>
            <option value="projector">Placement ppa </option>
            <option value="computer">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="complaintText">Write your complaint:</label>
          <textarea
            id="complaintText"
            className="form-control"
            value={complaintText}
            onChange={(e) => setComplaintText(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="supervisorView">Year</label>
          <input
            id="supervisorView"
            className="form-control"
            value={supervisorView}
            onChange={(e) => setSupervisorView(e.target.value)}
          />
          <label htmlFor="LabNumber">Department Name </label>
          <input
            id="LabNumber"
            className="form-control"
            value={LabNumber}
            onChange={(e) => setLabNumber(e.target.value)}
          />
          <label htmlFor="DepartmentName">Roll Number</label>
          <input
            id="DepartmentName"
            className="form-control"
            value={DepartmentName}
            onChange={(e) => setDepartmentName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-submit">Submit Complaint</button>
      </form>
    </div>

                
                


            </section>


            
            <Footer />
        </div>
    )
}

export default ComplaintForm
