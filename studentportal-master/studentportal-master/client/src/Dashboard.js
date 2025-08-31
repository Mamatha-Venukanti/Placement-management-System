import React from 'react'
import {useState,useEffect} from 'react'
import { Link,Navigate } from 'react-router-dom'
import axios from 'axios'
import Header from "./Header"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from './Footer'
import './Dashboard.css';
const Dashboard = () => {
    const [search,setSearch] = useState(null);
    const [data,setData] = useState ([]);
    const [tokenn,setTokenn] = useState(localStorage.getItem('token'))
    const [y,setY] = useState("")
    useEffect(()=>{
        axios.get('http://localhost:5000/getcomp').then(res => 
                !search ? setData(res.data) : setData(res.data.filter(profile => profile.compname.includes(search.toUpperCase()) | profile.email.toLowerCase().includes(search.toLowerCase()) | profile.eligibility.toLowerCase().includes(search.toLowerCase()))))

        axios.get('http://localhost:5000/getpresentuser',{
            headers : {
                'x-token' : localStorage.getItem('token')
            }
        }).then(
            res =>  setY(res.data._id)
        )

    },[search])
    if(!localStorage.getItem('token')){
        return <Navigate to='/login' />
    }
    console.log(tokenn)


        
        
    const searchHandler = e =>{
        e.preventDefault();
        console.log(search);
        axios.get('http://localhost:5000/getcomp').then(res => 
                !search ? setData(res.data) : setData(res.data.filter(profile => profile.compname.includes(search.toUpperCase()) | profile.email.toLowerCase().includes(search.toLowerCase()) | profile.eligibility.toLowerCase().includes(search.toLowerCase()))))
    
    }
    
    
    return (
        <div>
            <Header />
            
            <section className="container">
                <h1 className="large " style={{"color":"green","marginTop":"20px"}}>Companies Hub</h1>
                

            <nav className="navbar navbar-light">
                <div className="container-fluid">
                    <h3 className="navbar-brand">Browse and Apply Companies <span style={{color:"blue"}}> 🤝 </span></h3>

                    <form className="d-flex" onSubmit={searchHandler} >
                        <input className="form-control me-2" type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Enter to Search" aria-label="Search" />
                        <input className="btn btn-outline-success" type="submit" value="Search" />
                    </form>
                    
                </div>
            </nav>
            <br>
            </br>
            <CardGroup className="custom-card-group">
            <Card className="custom-card" key={1}>
                <Card.Img variant="top" src="./Amazon.jpg" />
                <Card.Body>
                <Card.Title>AMAZON</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                <a href="https://careers.microsoft.com/v2/global/en/home.html" className="card-link">
                    APPLY NOW
                </a>
                
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className="custom-card" key={2}>
                <Card.Img variant="top" src="./atlassian.png" />
                <Card.Body>
                <Card.Title>ATLASSIAN</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                <a href="https://careers.microsoft.com/v2/global/en/home.html" className="card-link">
                    APPLY NOW
                </a>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className="custom-card" key={3}>
                <Card.Img variant="top" src="./microsoft.jpg" />
                <Card.Body>
                <Card.Title>MICROSOFT</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                <a href="https://careers.microsoft.com/v2/global/en/home.html" className="card-link">
                    APPLY NOW
                </a>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            {/* Add more Card components with similar structure as above */}
            </CardGroup>
            

                <div className="profiles ">
                <div className = "row" >
                    {data.length>=1 ? 
                    data.map(profile => 
                        <div className='col-md-4'>
                        <div className="profile bg-light card " style={{"margin":"10px","width": "25.5rem"}}>
                        <center>
                        
                            <div>
                            <h2 style={{"color":"green"}}>{profile.compname}</h2>
                                <p>Company Mail ID: {profile.email}</p>
                                <p>Minimum Eligibility: {profile.eligibility} CGPA</p>
                                <p>Last date of application: {profile.lastdate}</p>
                                {/* <p>{profile.mobile}</p>*/}
                                <Link to={`/indprofile/${profile._id}/${y}`} className="btn btn-primary">View Profile</Link><br /><br />
                            </div>

                            
                        </center>
                        </div>
                        </div>
                        )
                    : null}
                </div>
                </div>
                
            
                


            </section>
            
            

            
            
            <Footer />
        </div>
        
            
        
    )
}

export default Dashboard
