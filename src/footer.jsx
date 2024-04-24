import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css"
function Footer() {
  return (
    <Container className="mt-5 p-5 my-bg2 text-white" id="contact">
      <Row>
        <Col md={"4"} className="d-flex flex-column justify-content-end align-items-start">
          {/* <p className="fs-bold">GET IN TOUCH</p> */}
          <p>asmaaessam514@gmail.com</p>
          <p>( +20 ) 106 5592 662</p>
        </Col>
        <Col md={"4"} className="d-flex flex-column justify-content-center align-items-center">
        <img src="./assets/ae-dark.png" alt="logo" width={100}/>  
        <a href='https://wa.me/201065592662' className="btn btn-dark px-4 my-btn mb-4">CONTACT ME</a>
        </Col>
        <Col md={"4"}  className="d-flex flex-column justify-content-end align-items-end">
          <p>
          <a href='https://wa.me/201065592662' className='text-white'><i className="fa-brands fa-whatsapp"></i></a>
            <a href='mailto:asmaaessam514@gmail.com' className='text-white'><i className="fa-regular fa-envelope px-3"></i></a> 
            <a href='https://www.linkedin.com/in/asm2a-e2sam' className='text-white'><i className="fa-brands fa-linkedin pe-3"></i></a>
            <a href='https://github.com/Asm2a-E2sam' className='text-white'><i className="fa-brands fa-github"></i></a>
          </p>
          <p>Copyright @2024 AE</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
