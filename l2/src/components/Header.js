import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
    <header>
        <Navbar bg='light' expand='lg'>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='mr-auto'>
                    <LinkContainer to='/meals'>
                        <Nav.Link>Restaurant Menu</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/order'>
                        <Nav.Link>Shopping Card</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </header>
);

export default Header;