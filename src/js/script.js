window.addEventListener('DOMContentLoaded', function () {

    //slider
    const prev = document.querySelector('.about__prev'),
        next = document.querySelector('.about__next'),
        slides = document.querySelectorAll('.about__slide');
    let slideIndex = 1;

    showSildes(slideIndex);

    function showSildes(n) {
        if(n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.classList.add('hide'));

        slides[slideIndex - 1].classList.remove('hide');
    }

    function plusSlides(n) {
        showSildes(slideIndex += n);
    }
   
    prev.addEventListener('click', () => {
        plusSlides(-1);
    });

    next.addEventListener('click', () => {
        plusSlides(1);
    });

    // modal 

    const promoBtn = document.querySelector('.promo__submit'),
            closeBtn = document.querySelector('.modal__close'),
            modal = document.querySelector('.modal'),
            promoInput = document.querySelector('.promo__input'),
            formBtn = document.querySelector('.form__form-btn'),
            formInputs = document.querySelectorAll('.form__wrapper input'),
            form = document.querySelector('.form__form');

    function showModal() {
        modal.classList.remove('hide');
        modal.classList.add('show');
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
    }
    
    promoBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (promoInput.value) {
            showModal();
        } 
    });

    closeBtn.addEventListener('click', () => {
        closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show') ) {
            closeModal();
        }
    });

    formBtn.addEventListener('click', (e) => {
        e.preventDefault();
        let sum = 0;
        formInputs.forEach( item => {
            if ( item.value ) {
                sum++;
            }
        });

        if (sum == 4) {
            showModal();
        }
    });


    //hamburger menu

    const hamburger = document.querySelector('.hamburger__icon'),
        menu = document.querySelector('.hamburger__menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('show');
    })
    

});