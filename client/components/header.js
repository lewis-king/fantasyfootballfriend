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
                <Link to='/'>Player Search</Link>
            </NavItem>
            <NavItem>
                <Link to='/trending'>Trending</Link>
            </NavItem>
          <NavItem>
            <Link to='/top-picked'>Top Picked</Link>
          </NavItem>
        </Nav>
    </Navbar>
);

export default Header
