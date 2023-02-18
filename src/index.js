import './style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'glightbox/dist/css/glightbox.min.css'
import GLightbox from 'glightbox';

const hamburger = document.querySelector('#see-menu');
const menu = document.querySelector('#menu-content');

function seeMenu() {
    hamburger.addEventListener('click', () => menu.classList.toggle('d-none'));
}

function onMobileMenuElementClicked() {
    const menuElements = document.querySelectorAll('#menu-mobile li');

    menuElements.forEach(element => {
        element.addEventListener('click', () => {
            document.querySelector('.animated-icon').classList.remove('open');
            menu.classList.add('d-none');
        })
    })
}

function onClickMenuButton() {
    document.querySelector('.menu-button').addEventListener('click', function () {
        document.querySelector('.animated-icon').classList.toggle('open');
    });
}

function carousel() {
    const items = document.querySelectorAll('.carousel .carousel-item')
    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (let i = 1; i < minPerSlide; i++) {
            if (!next) {
                next = items[0]
            }
            const cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
}

function seeMore() {
    const seeMoreButton = document.querySelector('#see-more');

    function callback() {
        const gallery = document.querySelector("#id-gallery");
        const galleryAnchor = document.querySelector('#gallery');

        gallery.classList.toggle('hidden');

        galleryAnchor.scrollIntoView({
            behavior: 'smooth',
        })
    }

    seeMoreButton.addEventListener('click', callback);
}

function initGLightbox() {
    GLightbox({
        selector: '.glightbox img',
        touchNavigation: true,
        loop: true,
    });
}

function backToTopButton() {
    const mybutton = document.querySelector("#btn-back-to-top");

    window.addEventListener('scroll', () => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    })
    
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    
    mybutton.addEventListener("click", backToTop);
}


seeMenu();
onMobileMenuElementClicked();
onClickMenuButton()
carousel()
seeMore();
initGLightbox();
backToTopButton()