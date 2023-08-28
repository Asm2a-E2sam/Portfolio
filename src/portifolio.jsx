import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './project';

function Portifolio() {
    return <>
      <Container className='my-5'>
            <p className="fs-1">Portifolio</p>
            <Row>
                <Col><Project pro={"Web Design1"} bg={"333"}/></Col>
                <Col><Project pro={"Web Design2"} bg={"999"}/></Col>
                <Col><Project pro={"Web Design3"} bg={"333"}/></Col>
            </Row>
            <Row>
                <Col><Project pro={"Web Design4"} bg={"999"}/></Col>
                <Col><Project pro={"Web Design5"} bg={"333"}/></Col>
                <Col><Project pro={"Web Design6"} bg={"999"}/></Col>
            </Row>
      </Container>
    </>
    
  }
  
  export default Portifolio;