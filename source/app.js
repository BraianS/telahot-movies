
import telaquenteFilmes from "./data/telaquenteMovies.json" assert { type: "json"};
import generos from "./data/generos.json" assert {type: "json"};


const hero = new HeroController();

const modal = new Modal();
modal.setGeneros(generos);

const movie = new MovieController(modal);

movie.onDisplayMovies(telaquenteFilmes);
