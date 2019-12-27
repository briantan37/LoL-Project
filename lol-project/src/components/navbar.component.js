import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expend-lg">
                <Link to="/" className="navbar-brand">LoLProject</Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">Search Player</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/builds" className="nav-link">Champion Builds</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}