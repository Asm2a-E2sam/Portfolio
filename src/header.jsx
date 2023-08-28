import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-5 py-1" >
      <Container>
        <Navbar.Brand href="#home" className="fs-0 py-0 my-0">AE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="link">HOME</Nav.Link>
            <Nav.Link href="#link" className="link">LINK</Nav.Link>
            <Nav.Link href="#projects" className="link">PROJECTS</Nav.Link>
            <Nav.Link href="#link" className="link">CONTACT</Nav.Link>
            <Nav.Link href="#link" className="link">
            <i className="fa-brands fa-facebook px-3"></i> 
            <i className="fa-brands fa-twitter px-3"></i>
            <i className="fa-brands fa-instagram px-3"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;