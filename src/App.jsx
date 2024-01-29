import { Container } from "react-bootstrap";
import FormularioPeliculas from "./components/FormularioPeliculas";

function App() {
  return (
    <Container className="main my-5">
      <h1 className="text-secondary mb-5 text-center">
        Administrador de Películas
      </h1>
      <FormularioPeliculas></FormularioPeliculas>
    </Container>
  );
}

export default App;
