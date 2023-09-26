 class Modal {
    generos;
    constructor() {
        let modal = document.querySelector(".modal");

        let closeModalButton = document.querySelector(".modal__close");

        closeModalButton.onclick = function () {
            modal.style.display = "none";
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    setGeneros(generos) {
        this.generos = generos;
    }

    openModal(movie) {

        let modal = document.querySelector(".modal");
        let modalTitle = document.querySelector(".modal__title");

        let modalContent = document.querySelector(".modal__content");
        let modalImage = document.querySelector(".modal__image");
        let modalRelease = document.querySelector(".modal__release");
        let modalGenre = document.querySelector(".modal__genre");
        let modalPopularity = document.querySelector(".modal__popularity");
        let modalOverview = document.querySelector(".modal__overview ");

        modal.style.display = "block";

        modalTitle.innerHTML = movie.textContent;

        let title = movie.textContent.replace(/ *\([^)]*\) */g, "")

        let responseData = this.getMovieByName(title);

        responseData.then(response => {

            let data = new Date(response[0]?.release_date).toLocaleDateString();

            modalContent.style.background = `linear-gradient(to right, rgba(10.5, 31.5, 31.5, 1), rgba(10.5, 31.5, 31.5, 0.84) , rgba(10.5, 31.5, 31.5, 0.84) 100%), url(${config.image_base_url}${response[0].backdrop_path})`;
            modalContent.style.backgroundSize = `cover`;

            modalImage.src = `${config.image_base_url}${response[0].poster_path}`;

            modalRelease.innerHTML = `<strong> Release: </strong> ${data}`;

            modalGenre.innerHTML = `<span> <strong> Genre: </strong> ${this.getGenres(response[0].genre_ids)} `;

            modalPopularity.innerHTML = `<strong> Popularity: ${this.getVoteAverage(response[0].vote_average)}  `;

            modalOverview.innerHTML = response[0].overview;
        });
    }

    async getMovieByName(name) {
        let data = [];
        try {
            const response = await fetch(`${config.api_base_url}search/movie?api_key=${config.api_key}&language=pt&query=${name}`);
            const responseData = await response.json();
            data = responseData?.results;
        } catch (error) {
            console.log(error);
        }
        console.log(data);
        return data;
    }

    getVoteAverage(vote) {
        return vote * 10;
    }

    getGenres(genres) {
        let newGenre = [];

        genres.forEach(genre => {
            let filter = this.generos.filter(genero => genero.id === genre)
                .map(genre => {
                    return genre.name;
                });
            newGenre.push(filter);
        })
        return newGenre;
    }
}