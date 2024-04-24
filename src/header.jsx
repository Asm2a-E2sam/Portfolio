import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary px-5 sticky-top" >
      <Container>
        <Navbar.Brand href="#home"><img src="./assets/ae-logo.png" alt="logo" width={70}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="link">HOME</Nav.Link>
            <Nav.Link href="#skills" className="link">SKILLS</Nav.Link>
            <Nav.Link href="#projects" className="link">PROJECTS</Nav.Link>
            <Nav.Link href="#contact" className="link">CONTACT</Nav.Link>
            <div  className="link">
            <a href='https://wa.me/201065592662' className='text-black'><i className="fa-brands fa-whatsapp pe-2"></i></a>
            <a href='mailto:asmaaessam514@gmail.com' className='text-black'><i className="fa-regular fa-envelope px-2"></i></a> 
            <a href='https://www.linkedin.com/in/asm2a-e2sam' className='text-black'><i className="fa-brands fa-linkedin px-2"></i></a>
            <a href='https://github.com/Asm2a-E2sam' className='text-black'><i className="fa-brands fa-github ps-2"></i></a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;