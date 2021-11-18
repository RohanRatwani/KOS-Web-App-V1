import React from 'react'
import './login.css';
import Logo from '../../images/logo1.png';
import Picture from '../../images/picture.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';

 
//import {Redirect} from 'react-router-dom';
import {Link } from "react-router-dom";
import { Container } from 'react-bootstrap';



export default function Login() {
    return (

        <>
       
       
        <Container className="c" >
        <Row className="row">
            <Col xs={6} className="col1">
                <img className="lo" alt="logo" src={Picture} />
            </Col>
        </Row>
        <Row className="row">

            <Col xs={6} className="cols">
            <div className="log" style={{ position: "relative", }}>
            <div>
            <img className="logo" alt="logo" src={Logo} /> <br />
            </div>
            <div className="h2">
            <h2 className="title">Welcome to KOS</h2><br />
            </div>
            <div className="container1">
                <input type="password" className="hospital1" placeholder="Hospital ID"></input>
                <input type="password" className="password" placeholder="Password"></input> 


                {/* <div className="btn-ctn">
                    <button onClick={<Redirect to="/ " />} className="btn">Login</button>
                </div> */}

                 <div className="check">
                <Form.Check type="checkbox" label="Remember me" />
                </div>
                

                <div className="btn-ctn">
                    <Link to="/">
                        <button type="submit" className="btn ">
                            <strong>Login</strong>
                        </button>
                    </Link>
                </div> 
            
                <p className="forgot-password1" style={{ float:"right"}}>
                    <a href="/" className=" text-right">Create new account</a>
                </p>
                <br />
                
                <p className="forgot-password" style={{ float:"left"}}>
                    <a href="/" className="text-left">Forgot Password?</a>
                </p>
                
    
            </div>
         </div> 
         </Col>
                
         
         </Row>
         </Container> 
         </> 
   
    )
}




