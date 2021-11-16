import React from 'react';
import Logo from '../../images/logo.png';
import './Nav.css';
// import { FaHome } from "react-icons/fa"; //Font Awesome Icons
import Navbar from 'react-bootstrap/Navbar';
// import Container from '../Components/Container/index.js';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';



function Nav() {
    return (
        <div>
           <Navbar bg="dark" className="navbar">
                <Container className="container">
                <Navbar.Brand href="#home">
                <img
                    src={Logo}
                    width="60"
                    height="50"
                    className="d-inline-block"
                    alt="logo"/>
                </Navbar.Brand>
                
                <Link to="/records" className="justify-content-end">
                    <Button
                    type="submit"
                    variant="dark"
                    justify-content="top"
                    className="btn2 ">
                    {/* <FaHome style={{color: 'white', fontSize:'30px', textAlign:'center'}} /> */}
                    home
                    </Button>
                </Link>
          
           </Container>
            </Navbar>
        </div>
    )
}

export default Nav;
