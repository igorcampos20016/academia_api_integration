import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './navbar.css';

export default class NavbarMenu extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Resilia-Academy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link eventKey={1} href="#home">HOME</Nav.Link>
                                <Nav.Link eventKey={2} href="#">CONTATOS</Nav.Link>
                                <Nav.Link eventKey={3} href="#">SOBRE</Nav.Link>
                                <Nav.Link eventKey={4} href="#">LOGIN</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Navbar>
        );
    }
}