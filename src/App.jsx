import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Row from 'react-bootstrap/Row'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Gallery from './Gallery.jsx'


function App() {

  return (
    <>
      <Header></Header>
      <Row xs="auto" md="auto" lg="auto">
        <Gallery></Gallery>
      </Row>
      <Footer></Footer>
    </>
  )
}

export default App
