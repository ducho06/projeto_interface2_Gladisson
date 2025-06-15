// Arquivo: main.js

// Exemplo de como interagir com o carrossel do Bootstrap via JavaScript, se necessário.
// A funcionalidade básica já é controlada pelos atributos data-bs-* no HTML.

document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.getElementById('heroCarousel');
    if (myCarousel) {
        myCarousel.addEventListener('slid.bs.carousel', function () {
            // Este código será executado toda vez que o carrossel terminar de deslizar para um novo item.
            // Você pode adicionar qualquer lógica personalizada aqui, como:
            console.log('O carrossel mudou para um novo slide!');
            // alert('Novo slide visível!'); // Apenas um exemplo, evite alertas em produção.
        });

        // Se você quiser iniciar o carrossel programaticamente (geralmente não é necessário com data-bs-ride="carousel")
        // var carouselInstance = new bootstrap.Carousel(myCarousel, {
        //     interval: 2000, // Altera o intervalo de transição para 2 segundos
        //     pause: 'hover'  // Pausa o carrossel ao passar o mouse
        // });
    }
});

// Você pode adicionar outros scripts e funcionalidades personalizadas aqui
// Por exemplo:
// console.log('Seu script JavaScript personalizado está rodando!');