import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./header";
import Skills from "./skills";
import Portifolio from "./portifolio";
import Footer from "./footer";
import "./App.css"
// import html2pdf from "html2pdf.js";
function Home() {
  // const generatePDF = () => {
  //   const element = document.getElementById("resume");
  //   html2pdf(element);
  // };

  return (
    <Container fluid="md" id="resume">
      <Header />
      <Card className="text-white p-0 rounded-0" id="home">
        <Card.Img src="./assets/girl.png" alt="Card image" class="rounded-0" />
        <Card.ImgOverlay>
          <Container>
            <Row>
              <Col md={"4"} className="content ps-5">
                <Card.Title className="fs-1">Asmaa Essam</Card.Title>
                <Card.Text>MERN Full Stack Developer</Card.Text>
                <a
                  href="https://wa.me/201065592662"
                  className="btn btn-dark px-4 my-btn"
                >
                  CONTACT ME
                </a>
              </Col>
            </Row>
          </Container>
        </Card.ImgOverlay>
      </Card>
      <Container className="my-5">
        <Row>
          <Col md={"4"} className="content ps-5">
            <p className="fs-1">About Me</p>
          </Col>
          <Col md={"8"}>
            <p className="pb-3">
              A Hardworking, precise, and committed Task, Full stack developer
              using MERN, Passionate about learning new technologies and methods
              to reach the most efficient method to reach specific achievements
              also have a good background in design using Photoshop CC and Adobe
              XD.
            </p>
            <button className="btn btn-dark my-btn px-4">
              Download Resume
            </button>
          </Col>
        </Row>
      </Container>
      <Skills />
      <Portifolio />
      <Footer />
    </Container>
  );
}

export default Home;
