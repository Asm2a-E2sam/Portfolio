import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Project from './project';

function Portifolio() {
    return <>
      <Container className='my-5 text-center'>
            <p className="fs-1" id='projects'>Projects</p>
            <Row>
                <Col className='d-flex justify-content-center'><Project img={"DOTS.png"} title="DOTS" details="Native JS" url="https://asm2a-e2sam.github.io/DOTS-COFFEE"/></Col>
                <Col className='d-flex justify-content-center'><Project img={"DUBIZZLE.png"} title="DUBIZZLE" details="React JS" url="https://dubizzle-zeta.vercel.app"/></Col>
                <Col className='d-flex justify-content-center'><Project img={"DUBIZZLE2.png"}  title="DASHBOARD" details="Angular TS" url="#"/></Col>
            </Row>
            <Row>
                <Col className='d-flex justify-content-center'><Project img={"TMDB.png"}  title="MOVIES" details="React JS" url="https://tmdb-movies-jet.vercel.app"/></Col>
                <Col className='d-flex justify-content-center'><Project img={"E-Commerce.png"}  title="E-Commerce" details="Angular TS" url="#"/></Col>
                <Col className='d-flex justify-content-center'><Project img={"Restaurant.png"}  title="Restaurant" details="WordPress" url="https://dev-e-commerce201.pantheonsite.io"/></Col>
            </Row>
      </Container>
    </>
    
  }
  
  export default Portifolio;