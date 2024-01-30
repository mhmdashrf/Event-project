
$(document).ready(function () {
  let width = $('.nav-menu ul').outerWidth();
  $('.nav-menu ul').animate({ marginLeft: `${- width}` }, 500)
  $('.contact').animate({ marginLeft: '0px' }, 500)
  $(".accordion").on("click", ".heading", function () {

    $(this).toggleClass("active").next().slideToggle();

    $(".contents").not($(this).next()).slideUp(300);

    $(this).siblings().removeClass("active");
  });
  $('.bars-icon').on('click', function () {
    let menuLeft = $('.contact').css('marginLeft');
    if (menuLeft === '200px') {
      $('.nav-menu ul').animate({ marginLeft: `${- width}` }, 500)
      $('.contact').animate({ marginLeft: '0px' }, 500)
    } else {
      $('.nav-menu ul').animate({ marginLeft: `0` }, 500)
      $('.contact').animate({ marginLeft: '200px' }, 500)
      $('.close').on('click', function () {
        $('.nav-menu ul').animate({ marginLeft: `${- width}` }, 500)
        $('.contact').animate({ marginLeft: '0px' }, 500)
      })
    }

  })
  $(function () {
    $('.skitter-large').skitter();
  });

   $('.navLink').on('click',function () {
    let sectionSpace = $($(this).attr("href")).offset().top;
    $("html , body").animate({scrollTop:sectionSpace},1500);
   })
  });
  let day = document.querySelector('.counter-days');
  let min = document.querySelector('.counter-mints');
  let sec = document.querySelector('.counter-Seconds');
  let hour= document.querySelector('.counter-hours');
  
  var countDownDate = new Date("Feb 30, 2024 15:37:25").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();

  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

 day.innerHTML = days+'D'
 hour.innerHTML = hours+'h'
 min.innerHTML = minutes+'m'
 sec.innerHTML = seconds+'s'
 
}, 1000);
let num1 = 100;
  $('textarea').keyup(function() {
    let valuee = $('textarea').val().length;
    let maxlen = num1 - valuee;
    $("p .remaining").html(maxlen);
  })
  