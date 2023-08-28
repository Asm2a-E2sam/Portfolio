import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header'
import Home from './home'
import About from './about'
import Skills from './skills'
import Container from 'react-bootstrap/Container';
import Portifolio from './portifolio'
import Footer from './footer';

function App() {

  return (
    <>
      <Container fluid="md">
        <Header/>     
        <Home/>
        <About/>
        <Skills/>
        <Portifolio/>
        <Footer/>
      </Container>
      



    </>
  )
}

export default App
