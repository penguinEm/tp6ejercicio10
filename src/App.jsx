import { Container } from "react-bootstrap";
import FormularioPeliculas from "./components/FormularioPeliculas";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container className="main my-5">
        <h1 className="text-secondary mb-5 text-center">
          Administrador de Películas
        </h1>
        <FormularioPeliculas></FormularioPeliculas>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
