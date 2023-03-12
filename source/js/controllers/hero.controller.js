class HeroController {

    constructor() {
        let categories = document.querySelector(".hero__categorias");

        let array = [];
        for (let year = 1988; year < 2023; year++) {
            array.push(this.getCategories(year));
        }
        categories.innerHTML = array.join(" ");
    }

    getCategories(anos) {
        return (
            `<li class="hero__item">${anos} </div>`
        )
    }
}