import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import './Navs.css';

const Navs = () => {
    const {user,signOutClick} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top' className='bg-white px-2'>
            <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Service</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#find">Find Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact Us</Nav.Link>
                        {user.email && <>
                            <Nav.Link as={NavHashLink} to="/addService#addService">Add-Service</Nav.Link>
                            <Nav.Link as={NavLink} to="/myBookings">My Bookings</Nav.Link>
                            <Nav.Link as={NavLink} to="/manageBookings">Manage All Bookings</Nav.Link>
                        </>}
                    </Nav>
                    <Nav>
                    {user.email && <Nav.Link>
                        <div>{user.displayName}</div>
                        <div>{user.email}</div>
                    </Nav.Link>}
                    <Nav.Link>
                        {
                        user.photoURL ? <img src={user.photoURL} alt="" className="icon"/>
                        :<i className="fas fa-user-circle icon-size"></i>
                        }
                    </Nav.Link>
                    {
                    user.email ? <Nav.Link>
                        <Button variant='danger' onClick={signOutClick}>Sign Out</Button>
                    </Nav.Link>
                    :<Nav.Link>
                        <HashLink to='/register#signIn'><Button className='btn-common common-bg btn-hover' variant='transparent'>Sign In</Button></HashLink>
                    </Nav.Link>
                    }

                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
};

export default Navs;