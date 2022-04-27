const navHamburger = document.querySelector(".cabecalho__menu");
const menuLateral = document.querySelector(".menu-lateral")

navHamburger.addEventListener("click", () => {
    menuLateral.classList.toggle("menu-lateral__active");
    const active = menuLateral.classList.contains("menu-lateral__active");
    if (active) {
        navHamburger.setAttribute('aria-label', 'Fechar Menu');
        navHamburger.setAttribute('aria-expanded', true);
    } else {
        navHamburger.setAttribute('aria-label', 'Abrir Menu');
        navHamburger.setAttribute('aria-expanded', false);
    }
})