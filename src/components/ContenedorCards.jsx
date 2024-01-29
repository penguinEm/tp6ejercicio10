import CardPelicula from "./CardPelicula";

const ContenedorCards = ({arrayPeliculas}) => {
  return (
    <section className="mb-5 d-flex justify-content-around row mt-5">
     {
        arrayPeliculas.map((pelicula, indicePelicula)=> <CardPelicula key={indicePelicula} pelicula={pelicula}></CardPelicula>)
     }
     
      
    </section>
  );
};

export default ContenedorCards;
