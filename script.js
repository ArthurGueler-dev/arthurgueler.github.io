document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.querySelector('.home');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                homeSection.classList.add('visible'); 
            } else {
                homeSection.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.5 
    });

    observer.observe(homeSection);
});


document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.cards .card'); 

    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); 
            } else {
                entry.target.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.5 
    });

    
    cards.forEach(card => {
        observer.observe(card);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.querySelector('#Experiencia');

   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                homeSection.classList.add('visible'); 
            } else {
                homeSection.classList.remove('visible'); 
            }
        });
    }, {
        threshold: 0.5 
    });

    
    observer.observe(homeSection);
});


window.addEventListener('scroll', function() {
    var habilidadesTitulo = document.querySelector('.habilidades-titulo');
    var position = habilidadesTitulo.getBoundingClientRect().top;
    var screenHeight = window.innerHeight;

    if (position < screenHeight && position > -10) {
        habilidadesTitulo.classList.add('visible');
    } else {
        habilidadesTitulo.classList.remove('visible'); 
    }
});


window.addEventListener('scroll', function() {
    var formulario = document.querySelector('.formulario');
    var formularioPosition = formulario.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (formularioPosition < screenPosition && formularioPosition > -100) {
        formulario.classList.add('visible');
    } else {
        formulario.classList.remove('visible');
    }
});


