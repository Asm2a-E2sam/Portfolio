import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
        <Container className="my-5">
          <Row>
            <Col md={"4"} className="content ps-5">
              <p className="fs-1">About Me</p>
            </Col>
            <Col md={"8"}>
              <p className="pb-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, quidem exercitationem? Atque quia ex adipisci vitae et nam, veniam beatae deleniti corrupti! Eaque distinctio quam blanditiis facilis corporis! Dicta, qui. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, quidem exercitationem? Atque quia ex adipisci vitae et nam, veniam beatae deleniti corrupti! Eaque distinctio quam blanditiis facilis corporis! Dicta, qui.</p>
              <a href="assets/CV.pdf" download="PDF">
                <button className="btn btn-dark px-4">Download Resume</button>
              </a>
            </Col>
          </Row>
        </Container>  
  );
}

export default About;