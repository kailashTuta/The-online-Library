import { Nav, Navbar } from 'react-bootstrap'
import React from 'react'

export const NavabarComp = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg">

                <Navbar.Brand>
                    The Online Library
                </Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="Home">Home</Nav.Link>
                        <Nav.Link href="Services">Services</Nav.Link>
                        <Nav.Link href="Library">Library</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link href="Login">Login</Nav.Link>
                        <Nav.Link href="Signup">Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div>
    )
}
