import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

        &:hover{
            color:white;
        }
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">GG.OP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item><Nav.Link href="/search">Search Player</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/builds">Champions List</Nav.Link></Nav.Item>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/login">Log In</Nav.Link></Nav.Item>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    </Styles>
)