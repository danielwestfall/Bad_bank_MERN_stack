import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { Bank } from "react-bootstrap-icons";

const Navigationbar = () => {
    return (

    <Navbar bg="dark" variant="dark">
    <Container fluid>
        <Navbar.Brand href="/">
                <Bank color="white" size={30}/>
                {' '}
            Bank of Utopia
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <span className="text-center mt-4 mb-4">
        <Nav className="mr-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/createaccount/">Create Account</Link>
            <Link className="nav-link" to="/deposit/">Deposit</Link>
            <Link className="nav-link" to="/withdraw/">Withdraw</Link>
            <Link className="nav-link" to="/alldata/">Account Data</Link>
        </Nav></span>
        </Navbar.Collapse>
    </Container>
    </Navbar>

    )
}

export default Navigationbar
