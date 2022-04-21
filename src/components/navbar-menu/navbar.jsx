import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './navbar.css';

export default class NavbarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar: [
                {
                    id: 1,
                    name: 'Home',
                    onClick: this.props.onClick
                },
                {
                    id: 2,
                    name: 'About',
                    onClick: this.props.onClick
                },
                {
                    id: 3,
                    name: 'Contact',
                    onClick: this.props.onClick
                }
            ]
        };
    }
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="navMenu">
                    <Container>
                        <Navbar.Brand href="#home">Resilia-Academy</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#">HOME</Nav.Link>
                                <Nav.Link href="#">CONTATOS</Nav.Link>
                                <Nav.Link href="#">SOBRE</Nav.Link>
                                <Nav.Link href="#">LOGIN</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Navbar>
        );
    }
}