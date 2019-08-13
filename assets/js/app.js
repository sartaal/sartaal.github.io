

 $.noConflict();
 $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    dots: false,
    prevArrow:'<i class="fas fa-angle-left button-left"></i>',
    nextArrow:'<i class="fas fa-angle-right button-right"></i>'
  });

 


  $("#datepicker1" ).datepicker({
      showWeek: true,
      firstDay: 1
  });
  $("#datepicker2" ).datepicker({
      showWeek: true,
      firstDay: 1
  });
$("#datepicker3" ).datepicker({
      showWeek: true,
      firstDay: 1
  });
$("#datepicker4" ).datepicker({
      showWeek: true,
      firstDay: 1
  });

  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });


$(window).on("resize", function (){
  var width = $(window).width();

  $("#size").html(width);
})



 






 