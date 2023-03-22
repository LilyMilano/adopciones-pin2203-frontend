import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import Logo from "./Logo.png";

function NavBar() {
  return (
    <Navbar className="NavBar" fixed="top" expand="lg">
      <Container>
        <Navbar.Brand href="#">
          <img src={Logo} alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="row justify-content-end">
          <Nav
            className="my-2 my-lg-0 d-flex justify-content-end"
            style={{
              marginLeft: "-16px",
              marginRight: "-16px",
            }}
            navbarScroll
          >
            <Nav.Link className="NavLink" href="#home">
              Inicio
            </Nav.Link>
            <Nav.Link className="NavLink" href="#about">
              Sobre Nosotros
            </Nav.Link>
            <Nav.Link className="NavLink" href="#aboutthem">
              Sobre Ellos
            </Nav.Link>
            <Nav.Link className="NavLink" href="#fqa">
              FQA
            </Nav.Link>
            <Nav.Link className="NavLink" href="#contact">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
