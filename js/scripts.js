$(document).ready(function(){

    $('.post-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:$('.next'),
        prevArrow:$('.prev'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]

    });
});
function pop(num) {
  var num;
  if (num==1) {
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup1=document.getElementById('popup1');
    popup1.classList.toggle('active');
  }

  else if (num==2) {
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup2=document.getElementById('popup2');
    popup2.classList.toggle('active');
  }
  else if (num==3) {
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup3=document.getElementById('popup3');
    popup3.classList.toggle('active');
  }
  else if (num==4) {
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup4=document.getElementById('popup4');
    popup4.classList.toggle('active');
  }
  else if (num==5) {
    var blur=document.getElementById('blur');
    blur.classList.toggle('active');
    var popup5=document.getElementById('popup5');
    popup5.classList.toggle('active');
  }

  else{
      var blur=document.getElementById('blur');
      blur.classList.toggle('active');
      var popup6=document.getElementById('popup6');
      popup6.classList.toggle('active');
  }
}

