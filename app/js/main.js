
$(document).ready(function(){
    $('h2').each(function(){
     var title = $(this);
     title.text( title.text().replace(/(^\w+)/,'<span>$1</span>') );
    });
   });
   Источник: https://danilin.biz/css-first-word.htm

$(".slider").slick({
    prevArrow: "<button class='prev'>пред</button>",
    nextArrow: "<button class='next'>след</button>",
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

