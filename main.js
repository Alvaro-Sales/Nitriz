class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this);
    }

    //criando animação para o link, estilo link fade
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
              ? (link.style.animation = "")
              : (link.style.animation = `navLinkFade .5s ease forwards ${index / 7 + .3}s`);
        });
    }

    //criando captura de click para abrir o menu
    handleClick() {
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    //criando captura de click no menu
    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    //deixando o menu ativo
    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);

mobileNavbar.init();


//criando função para barra de progresso animado
let progress = document.getElementById('progressBar')
let totalHeight = document.body.scrollHeight - window.innerHeight
window.onscroll = function() {
  let progressHeight = (window.pageYOffset / totalHeight) * 100
  progress.style.height = progressHeight + '%'
}

//Criando função para mudar de tema claro para escuro
var icon = document.getElementById("icon")

icon.onclick = function() {
    document.body.classList.toggle("dark-theme")
}
