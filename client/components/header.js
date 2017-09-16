import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const Header = () => (
    <header>
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <div className="navbar-link pull-left">
                        <Link to='/'>Home</Link>
                        <Link to='/trending'>Trending</Link>
                    </div>
                </div>
            </div>
        </nav>
    </header>
)

export default Header
