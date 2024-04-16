var carouselWidth = $('.carousel-inner')[0].scrolWidth;
var cardWidth = cardWidth = $('.carousel-item').width();

var scrollPosition = 0;
$('carousel-control-next').on('click', function(){
    console.log('next');
scrollPosition = scrollPosition + cardWidth;
$('.carousel-inner').animate({scrollLeft: scrollPosition},600);

});