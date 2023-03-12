const elements = document.querySelectorAll("[data-reveal]");

function reveal(){
    for(let i = 0; i < elements.length; i++){
        elements[i].classList.add("revealed");
    }
}

window.addEventListener('load',reveal);
window.addEventListener('scroll', reveal);