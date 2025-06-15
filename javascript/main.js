

document.addEventListener('DOMContentLoaded', function() {
    var myCarousel = document.getElementById('heroCarousel');
    if (myCarousel) {
        myCarousel.addEventListener('slid.bs.carousel', function () {
          
            console.log('O carrossel mudou para um novo slide!');
           
        });

       
    }
});

