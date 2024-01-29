import { Form, Button, FormSelect } from "react-bootstrap";
import ContenedorCards from "./ContenedorCards";
import { useState, useEffect } from "react";

const FormularioPeliculas = () => {
  /* Variables --------------------------- */
  const [pelicula, setPelicula] = useState({
    titulo: "",
    descripcion: "",
    genero: "",
  });
  
  const localStoragePeliculas =
    JSON.parse(localStorage.getItem("peliculasKey")) || [];

  const [arrayPeliculas, setArrayPeliculas] = useState(localStoragePeliculas);

  /* Funciones --------------------------- */
  const manejadorSubmit = (e) => {
    e.preventDefault();
    setArrayPeliculas([...arrayPeliculas, pelicula]);
    setPelicula({
      titulo: "",
      descripcion: "",
      genero: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("peliculasKey", JSON.stringify(arrayPeliculas));
  });
  /* maquetado y lógica ext----------------- */

  return (
    <>
      <Form
        className="border px-5 py-5 rounded-1 bg-body-tertiary border-danger"
        onSubmit={manejadorSubmit}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div className="d-flex mb-3 align-items-center justify-content-between inputsColumna">
            <Form.Label>Título:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ej. Los sospechosos de siempre"
              className="color-inputs anchoControls"
              required
              maxLength={30}
              minLength={2}
              onChange={(e) =>
                setPelicula({ ...pelicula, titulo: e.target.value })
              }
              value={pelicula.titulo}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <div className="d-flex mb-3 align-items-center justify-content-between inputsColumna">
            <Form.Label>Descripción:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              className="color-inputs anchoControls"
              placeholder="Ingrese una breve descripción"
              minLength={4}
              maxLength={250}
              required
              onChange={(e) =>
                setPelicula({ ...pelicula, descripcion: e.target.value })
              }
              value={pelicula.descripcion}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <div className="d-flex mb-3 align-items-center justify-content-between inputsColumna">
            <Form.Label>Género:</Form.Label>
            <Form.Select
              className="color-inputs anchoControls w-auto"
              required
              onChange={(e) =>
                setPelicula({ ...pelicula, genero: e.target.value })
              }
              value={pelicula.genero}
            >
              <option disabled value={""}></option>
              <option>Comedia</option>
              <option>Drama</option>
              <option>Infantil</option>
            </Form.Select>
          </div>
        </Form.Group>
        <div className="text-end mt-5">
          <Button variant="outline-secondary" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
      <ContenedorCards arrayPeliculas={arrayPeliculas}></ContenedorCards>
    </>
  );
};

export default FormularioPeliculas;
