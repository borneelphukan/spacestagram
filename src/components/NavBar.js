import React, { Component } from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className='mb-5'>
                    <Navbar bg="dark" variant="dark" fixed='top'>
                        <Container>
                            <Navbar.Brand text="info" href='/'>SPACESTAGRAM </Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">

                                </Nav>
                                <Nav className='m-2'>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar >
                </div>

            </BrowserRouter>

        );
    }
}

export default NavBar;