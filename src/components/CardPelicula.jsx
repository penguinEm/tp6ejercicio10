import { Card } from "react-bootstrap";

const CardPelicula = ({pelicula}) => {
  return (
    <Card className="my-3 px-0 shadow" style={{ width: "18rem" }}>
      <Card.Header>
        <Card.Title><span className="text-danger">Título </span>{pelicula.titulo} </Card.Title>
        <Card.Subtitle className="text-secondary">Género: {pelicula.genero}</Card.Subtitle>
      </Card.Header>
      <Card.Body className="cardScroll">
        <Card.Text>
         <span className="text-secondary">Descripción: </span>{pelicula.descripcion}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardPelicula;
