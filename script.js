$(function(){
    $('.fuwat').css('visibility','hidden');
        $(window).scroll(function(){
        var windowHeight = $(window).height(),
            topWindow = $(window).scrollTop();
        $('.fuwat').each(function(){
        var objectPosition = $(this).offset().top;
        if(topWindow > objectPosition - windowHeight + 200){
        $(this).addClass("fuwatAnime");
        }
        });
        });
    
        $('.slider').slick({
            dots: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive:[{
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slideToScroll: 1
                }
              }],
              respondTo: 'slider'
            });
        });

particlesJS("particles-js", {"particles":{"number":{"value":85,"density":{"enable":true,"value_area":800}},"color":{"value":"#FFFFFF"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#FFFFFF","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":370,"size":50,"duration":2,"opacity":7,"speed":3},"repulse":{"distance":180,"duration":0.2},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});