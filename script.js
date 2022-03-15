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

      $(".more").on("click", function() {
        $(this).toggleClass("on-click");
        $(".txt-hide").slideToggle(1000);
        $("#contact").css('margin-top','380px');
        $(".txt-hide").css('display','flex');
        $(".more").css('display','none');
        });