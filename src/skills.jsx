import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Progress from './progress'

function Skills() {
  return (
        <Container className="my-5 p-6 bg-dark text-white">
          <Row>
              <p className="fs-1 text-center">Skills</p>
              <p className="pb-5 px-6 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, quidem exercitationem? corporis! Dicta, qui. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, quidem exercitationem? Atque quia ex adipisci vitae et nam, veniam beatae deleniti corrupti! Eaque distinctio quam blanditiis facilis corporis! Dicta, qui.</p>
          </Row>
          <Row className="px-6 center">
            <Col md={"6"} className="px-5 focus"> 
              <p className="fs-5 text-center fw-bold">MY FOCUS</p>
              <hr/>
              <p className="fs-5 px-3">UI/UX Design</p>
              <p className="fs-5 px-3">Responsive Design</p>
              <p className="fs-5 px-3">Web Design</p>
              <p className="fs-5 px-3">Mobile App Design</p>
            </Col>
            <Col md={"6"}>
              <Progress  name={"HTML"} size={"95"}/>
              <Progress  name={"CSS"}  size={"85"}/>
              <Progress  name={"JS"} size={"90"}/>
              <Progress  name={"PHP"} size={"75"}/>
              <Progress  name={"HTML"} size={"95"}/>
              <Progress  name={"JS"} size={"90"}/>
              <Progress  name={"PHP"} size={"75"}/>
              <Progress  name={"HTML"} size={"95"}/>
              <Progress  name={"JS"} size={"90"}/>
            </Col>
          </Row>
        </Container>  
  );
}

export default Skills;