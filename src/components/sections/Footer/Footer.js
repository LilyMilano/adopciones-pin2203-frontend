import React from 'react';
import Logo from './Logo.png';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
	return (
		<footer>
			<Container>
				<Row className="align-items-center">
					<Col id="footer-text" className="text-left" sm={6}>
						&copy; 2023 - LILIANA MILANO
					</Col>
					<Col
						id="footer-img"
						className="text-right justify-content-sm-start justify-content-lg-end"
						sm={6}
					>
						<img
							className="justify-content-center"
							id="footer-logo"
							src={Logo}
							alt="logo"
						></img>
					</Col>
				</Row>
			</Container>
		</footer>
	);
}

export default Footer;
