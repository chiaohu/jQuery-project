$(document).ready(function(){ 
      
    //下拉式選單
      $(".dropdown-product").click(function(){
        event.preventDefault
       $(".dropdown-product").toggleClass("active");
      $(".dropdown-open-product").slideToggle();
     });
    
    //下拉式選單
     $(".dropdown-contact").click(function(){
       event.preventDefault
       $(".dropdown-contact").toggleClass("active");
      $(".dropdown-open-contact").slideToggle();
     });
     
    
    //關閉廣告
     $(".ad-close").click(function(){
       event.preventDefault
      $(".ad").slideToggle();
     });




    $('.top a').click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        },  700);    
    }); 

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 2000,
          },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      })

    
});