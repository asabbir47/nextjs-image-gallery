'use client'

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar()
{
    const pathname = usePathname();

    return (
        <Navbar bg="primary" variant="dark" expand="sm" sticky="top" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/" as={Link}>
                    Image Gallery
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav>
                        <Nav.Link href="/static" as={Link} active = {pathname === '/static'}>Static</Nav.Link>
                        <Nav.Link href="/dynamic" as={Link} active = {pathname === '/dynamic'}>Dynamic</Nav.Link>
                        <Nav.Link href="/isr" as={Link} active = {pathname === '/isr'}>ISR</Nav.Link>
                        <NavDropdown title="Topics" id="topic_dropdown">
                            <NavDropdown.Item href="/topics/health" as={Link}>Health</NavDropdown.Item>
                            <NavDropdown.Item href="/topics/coding" as={Link}>Coding</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/search" as={Link} active = {pathname === '/search'}>Search</Nav.Link>
                        <Nav.Link href="/media-query" as={Link} active = {pathname === '/media-query'}>Media Example</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}