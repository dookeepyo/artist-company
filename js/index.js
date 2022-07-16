$(document).ready(function(){
  console.log($(window).scrollTop()); //콘솔창으로 스크롤 상단px값을 확인하려고 썻음
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });
  
  $('.menu-box').click(function(){
    $('.menu-box').toggleClass('active');
    $('.menus').toggleClass('active');
    $('.menu').toggleClass('active');
    $('.menu-bk').toggleClass('active');
    $('.txtl-box').toggleClass('active');
    $('.txtr-box').toggleClass('active');
  });


  $('.bkbk1').mouseenter(function(){
    $('.sec-bk').stop().addClass('active');
    setTimeout(function(){$(".sec1-hoverbox1").addClass('active');},0);
    // $('.sec1-hoverbox1').delay('2000').addClass('active');
    $('.sec1-img').addClass('active');
    setTimeout(function(){$(".sec1-hovertxt1").stop().addClass('active');});
    // $('.sec1-hovertxt1').delay('2000').addClass('active');
    
  });
  $('.sec1-hoverbox1').mouseleave(function(){
    $('.sec-bk').stop().removeClass('active');
    $('.sec1-hoverbox1').stop().removeClass('active');
    $('.sec1-img').removeClass('active');
    $('.sec1-hovertxt1').stop().removeClass('active');
  });

  $('.bkbk2').mouseenter(function(){
    $('.sec-bk').stop().addClass('active1');
    $('.sec1-hoverbox2').stop().addClass('active');
    $('.sec1-img').addClass('active');
    setTimeout(function(){$(".sec1-hovertxt2").stop().addClass('active');});
    // $('.sec1-hovertxt2').stop().addClass('active');
  });
  $('.sec1-hoverbox2').mouseleave(function(){
    $('.sec-bk').stop().removeClass('active1');
    $('.sec1-hoverbox2').stop().removeClass('active');
    $('.sec1-img').removeClass('active');
    $('.sec1-hovertxt2').stop().removeClass('active');
  });

  $('.bkbk3').mouseenter(function(){
    $('.sec-bk').stop().addClass('active2');
    $('.sec1-hoverbox3').stop().addClass('active');
    $('.sec1-img').addClass('active');
    setTimeout(function(){$(".sec1-hovertxt3").stop().addClass('active');});
    // $('.sec1-hovertxt3').stop().addClass('active');
  });
  $('.sec1-hoverbox3').mouseleave(function(){
    $('.sec-bk').stop().removeClass('active2');
    $('.sec1-hoverbox3').stop().removeClass('active');
    $('.sec1-img').removeClass('active');
    $('.sec1-hovertxt3').stop().removeClass('active');
  });

  $('.bkbk4').mouseenter(function(){
    $('.sec-bk').addClass('active3');
    $('.sec1-hoverbox4').addClass('active');
    $('.sec1-img').addClass('active');
    setTimeout(function(){$(".sec1-hovertxt4").addClass('active');});
    // $('.sec1-hovertxt4').stop().addClass('active');
  });
  $('.sec1-hoverbox4').mouseleave(function(){
    $('.sec-bk').stop().removeClass('active3');
    $('.sec1-hoverbox4').stop().removeClass('active');
    $('.sec1-img').removeClass('active');
    $('.sec1-hovertxt4').stop().removeClass('active');
  });

  $('.bkbk5').mouseenter(function(){
    $('.sec-bk').stop().addClass('active4');
    $('.sec1-hoverbox5').stop().addClass('active');
    $('.sec1-img').addClass('active');
    setTimeout(function(){$(".sec1-hovertxt5").stop().addClass('active');});
    // $('.sec1-hovertxt5').stop().addClass('active');
  });
  $('.sec1-hoverbox5').mouseleave(function(){
    $('.sec-bk').stop().removeClass('active4');
    $('.sec1-hoverbox5').stop().removeClass('active');
    $('.sec1-img').removeClass('active');
    $('.sec1-hovertxt5').stop().removeClass('active');
  });
$('.sec2-accordionbox li').mouseover(function(){
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});
  $(window).scroll(function(){
    const sct = $(window).scrollTop();

  }); // 스크롤이벤트부분


  $(window).scroll(function(){
    var ww = $(window).width();

    const sct = $(window).scrollTop();
    var myPos = $(window).scrollTop();
    var sec2Pos = $('.sec-2').offset().top;
    var sec3Pos = $('.sec-3').offset().top - $(window).height();
    // var auditionPos = $('.audition').offset().top - 300;
    if(sct <= 3599){
      $('.sec-3').removeClass('active');
    }
    if(sct >= 3600){
      $('.sec-3').addClass('active');
    }



    if(myPos < sec2Pos && ww > 1200){

        skrollr.init().destroy();

    }
    
    else if(myPos >= sec2Pos && myPos < sec3Pos && ww > 1200) {
        console.log('working')
        skrollr.init();
        $('.horizontal-scroll').css({
            position: 'fixed',
            top: 0,
            left: 0
        })
        $('body').css({
          background:'#000',
      })
    }else if(myPos >= sec3Pos && myPos < auditionPos){

    }else if(myPos >= (auditionPos)) {
        auditionScr();
    }

})

//배경색 전환
$('.sec3-txt-bg').mouseenter(function(){
  $(this).addClass('active');
  $(this).siblings().removeClass('active');
});

//이미지전환
$('.sec3-r div').mouseenter(function(){
  var changeImage = $(this).attr('data-image');
  $('.sec3l-img').css({
      'background-image':'url( ' + changeImage + ')'
  });
});

// $('.sec3-r div').mouseleave(function(){
//   $('.sec3l-img').css({
//       'background-image': ''
//   });
// });
// $('.sec3-r div').mouseleave(function(){
//   $(this).siblings().removeClass('active');
// });

});// END