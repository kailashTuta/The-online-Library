import { Nav, Navbar, Container } from 'react-bootstrap'
import React from 'react'
import logo from '../assets/logo.jpg'

const NavabarComp = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top" expand="lg">

                <Container>
                    <Navbar.Brand>
                        The Online Library
                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse>
                        <Nav className="me-auto">
                            <Nav.Link href="Home"><i className="fas fa-home"></i> Home</Nav.Link>
                            <Nav.Link href="Services"><i className="fas fa-users-cog"></i> Services</Nav.Link>
                            <Nav.Link href="Library"><i className="fas fa-book-reader"></i> Library</Nav.Link>
                        </Nav>

                        <Nav>
                            <Nav.Link href="Login"><i className="fas fa-sign-in-alt"></i> Login</Nav.Link>
                            <Nav.Link href="Signup"><i className="fas fa-user-plus"></i> Signup</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>



            </Navbar>
        </div>
    )
}
export default NavabarComp