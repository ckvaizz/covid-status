import React from 'react'
import {Navbar,Nav,} from 'react-bootstrap';
import {Link} from 'react-router-dom'


class header extends React.Component{
    render(){
        return(
            <div>
                 <Navbar className="fixed-top" bg="dark" variant="dark">
                <Navbar.Brand href="/">COVID-19</Navbar.Brand>
                <Nav className="mr-auto">
                <Link className="nav-link" to="/india">India</Link>
                <Link className="nav-link" to="/world">World</Link>
                
                </Nav>
                </Navbar>
            </div>
        )
    }

}
export default header;
