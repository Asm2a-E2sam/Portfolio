import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
  return (
    <Card className="text-white p-0 rounded-0">
      <Card.Img src="./assets/girl.jpg" alt="Card image" class="rounded-0"/>
      <Card.ImgOverlay>
        <Container>
          <Row>
            <Col md={"4"} className="content ps-5">
              <Card.Title className="fs-1">Asmaa Essam</Card.Title>
              <Card.Text>
                MERN Full Stack Developer
              </Card.Text>
              <button className="btn text-white px-4">CONTACT ME</button>
            </Col>
          </Row>
        </Container>  
      </Card.ImgOverlay>
    </Card>
  );
}

export default Home;