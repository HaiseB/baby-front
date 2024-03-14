import { Outlet, Link } from "react-router-dom"; import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Layout({ siteTitle }) {
    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">{siteTitle}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/Users">Users</Nav.Link>
                        <Nav.Link href="/Teams">Teams</Nav.Link>
                        <NavDropdown title="Games" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/Games">Game list</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/CreateReadUpdateGame">
                                Create a game
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <Container>
            <Outlet />
        </Container>
    </>
}

export default Layout;