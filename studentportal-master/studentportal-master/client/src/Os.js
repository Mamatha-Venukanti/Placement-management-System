import React from 'react'
import Footer from './Footer'
import Header from "./Header"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Dashboard.css';
const OS = () => {
    
    
    
    return (
        <div>
            <Header />
            
            <section className="container">
                <h1 className="large " style={{"color":"green","marginTop":"20px"}}>WEBSITES</h1>
                

            
            <br>
            </br>
            <CardGroup className="custom-card-group">
            <Card className="custom-card" key={1}>
                <Card.Img variant="top" src="./tuf.png" />
                <Card.Body>
                <Card.Title>TUF</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                <a href="https://careers.microsoft.com/v2/global/en/home.html" className="card-link">
                    PRACTICE NOW
                </a>
                
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className="custom-card" key={2}>
                <Card.Img variant="top" src="./Codechef.png" />
                <Card.Body>
                <Card.Title>CODECHEF</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                <a href="https://codechef.com/" target="_blank" rel="noopener noreferrer" className="card-link">
                    PRACTICE NOW
                </a>
                    
                
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card className="custom-card" key={3}>
                <Card.Img variant="top" src="./hackerrank.jpg" />
                <Card.Body>
                <Card.Title>HACKERRANK</Card.Title>
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.
                </Card.Text>
                <a href="https://leetcode.com/" target="_blank" rel="noopener noreferrer" className="card-link">
                    PRACTICE NOW
                </a>
                </Card.Body>
                <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            {/* Add more Card components with similar structure as above */}
            </CardGroup>
            <h1 className="large " style={{"color":"green","marginTop":"20px"}}>YOUTUBE</h1>
            <CardGroup className="custom-card-group">
            <Card className="custom-card" key={1}>
                <Card.Img variant="top" src="./tuf.jpg" />
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
            
            {/* Add more Card components with similar structure as above */}
            </CardGroup>
            <Footer />
                
            
                

            </section>
            

            
            
            

        </div>
        
    )
}

export default OS
