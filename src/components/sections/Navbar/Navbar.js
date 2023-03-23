import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import Logo from './Logo.png';

function NavBar() {
	const [expanded, setExpanded] = useState(false);

	return (
		<Navbar className="NavBar" fixed="top" expand="lg" expanded={expanded}>
			<Container>
				<Navbar.Brand href="#">
					<img src={Logo} alt="logo"></img>
				</Navbar.Brand>
				<Navbar.Toggle
					aria-controls="navbarScroll"
					onClick={() => setExpanded(expanded ? false : 'expanded')}
				/>
				<Navbar.Collapse id="navbarScroll" className="row justify-content-end">
					<Nav
						className="my-2 my-lg-0 d-flex justify-content-end"
						style={{
							marginLeft: '-16px',
							marginRight: '-16px',
						}}
						navbarScroll
					>
						<Nav.Link
							className="NavLink"
							href="/"
							onClick={() => setExpanded(false)}
						>
							Inicio
						</Nav.Link>
						<Nav.Link
							className="NavLink"
							href="#about"
							onClick={() => setExpanded(false)}
						>
							Sobre Nosotros
						</Nav.Link>
						<Nav.Link
							className="NavLink"
							href="#aboutthem"
							onClick={() => setExpanded(false)}
						>
							Sobre Ellos
						</Nav.Link>
						<Nav.Link
							className="NavLink"
							href="#fqa"
							onClick={() => setExpanded(false)}
						>
							FQA
						</Nav.Link>
						<Nav.Link
							className="NavLink"
							href="#contact"
							onClick={() => setExpanded(false)}
						>
							Contacto
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
