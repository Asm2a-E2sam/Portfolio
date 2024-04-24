import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css'
// import Progress from './progress'

function Skills() {
  return (
        <Container className="my-5 p-6 my-bg text-white" id='skills'>
          <Row className='text-center'>
              <p className="fs-1 text-center text-dark fw-bold">Skills</p>
              <div className='d-flex flex-column'>
              <hr className='text-dark w-50 m-auto pb-1'/>
              <hr className='text-dark w-50 m-auto'/>
              </div>
          </Row>
          <Row className="pt-5 text-dark">
          <Col md={"4"} className=""> 
            <h5>Front End</h5>
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>JavaScript</li>
                <li>Typescript</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </Col>
            <Col md={"4"} className=""> 
            <h5>Back End </h5>
              <ul>
                <li>Node JS</li>
                <li>Restful API</li>
              </ul>
            <h5>DataBase</h5>
              <ul>
                <li>Mongo DB</li>
                <li>MySQL</li>
              </ul>
            </Col>
            <Col md={"4"} className="" >
              <h5>Software Tools</h5>
              <ul>
                <li>Git</li>
                <li>GitHub</li>
                <li>Photoshop CC</li>
                <li>Postman</li>
                <li>MongoDB Compass</li>
              </ul> 
              <br />
            </Col>
          </Row>
        </Container>  
  );
}

export default Skills;