import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';

const Header = () => (
    <Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#"> Fantasy Football Friend </a>
            </Navbar.Brand>
        </Navbar.Header>
        <Nav>
            <NavItem>
                <Link to='/'>Home</Link>
            </NavItem>
            <NavItem>
                <Link to='/trending'>Trending</Link>
            </NavItem>
        </Nav>
    </Navbar>
)

export default Header
