import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <Container className="my-5 p-5 bg-dark text-white">
      <Row>
        <Col md={"4"}>
          <p className="fs-bold">GET IN TOUCH</p>
          <p>asmaa@gmail.com</p>
          <p>777-222-778</p>
        </Col>
        <Col md={"4"} className="text-center">
          <button className="btn text-white">CONTACT ME</button>
        </Col>
        <Col md={"4"} className="text-end">
          <p>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter px-3"></i>
            <i className="fa-brands fa-instagram"></i>
          </p>
          <p>Copyright @2023 AE</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
