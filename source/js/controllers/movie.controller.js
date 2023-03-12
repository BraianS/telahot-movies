class MovieController {

    constructor(modal) {
        this.modal = modal;
    }

    setModal(modal) {
        this.modal = modal;
    }

    onDisplayMovies(telaquenteFilmes) {
        let moviesList = [];

        let modal = this.modal;

        let buttons = document.querySelectorAll(".hero__item");

        let movie = document.querySelector(".movie__content");
        let titulo = document.querySelector(".movie__title");

        buttons.forEach(button => {
            button.addEventListener('click', function () {
                const ano = parseInt(button.textContent);

                telaquenteFilmes?.filmes.filter((filmes) => {

                    movie.innerHTML = filmes[ano]?.map(function (movie) {
                        let month = new Date(Math.round((movie?.Data - 25569) * 86400 * 1000)).getMonth();
                        let day = new Date(Math.round((movie?.Data - 25569) * 86400 * 1000)).getDate();

                        return (
                            `
                            <li id="btn" class="movie__item"  ">
                                <span class="movie__date"> ${day}/${month} </span>
                                <span class="movie__name">${movie?.Filmes.replace(/ *\([^)]*\) */g, "")} </span>
                              </li>
                            `
                        )
                    }, this)
                    titulo.innerHTML = "<h2> Filmes passados na Tela Quente em  " + `${ano}` + "</h2>";
                });

                moviesList = document.querySelectorAll('.movie__name');

                moviesList.forEach(movie => {
                    movie.addEventListener('click', function () {
                        modal.openModal(movie);
                    })
                })
            })
        });
    }
}