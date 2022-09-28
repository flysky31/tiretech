$('.header nav,.nav_shadow').on('mouseenter mouseleave',function(aa){
    if( $(window).width() > 1060){      //pc(데스크탑) 상태였을때만
      if( aa.type == 'mouseenter') {  //마우스를 올려놨을때
        $('.sub').stop().slideDown();
        $('.nav_shadow').stop().fadeIn();
      } 
      else {
        $('.sub').stop().slideUp(200,function(){
          $('.sub').removeAttr('style');
          });
        $('.nav_shadow').stop().fadeOut(200,function(){ 
          $(this).removeAttr('style');
        });
      }
    }
  });
//mobile



//모바일-메인메뉴 클릭하면 서브메뉴 나옴
const $mainBtn = $('.navbar_gnb > li > a');     //메인메뉴

$mainBtn.click(function(){
  if( $(window).width() < 1060){      //모바일 상태였을때만    
    if( !$(this).parents('li').hasClass('on') ) {   //클릭한 a의 부모 li에 on클라스가 없을때
      $('.sub').slideUp(200);  
      $('.navbar_gnb > li').removeClass('on');
      $(this).siblings('.sub').slideDown(500);
      $(this).parents('li').addClass('on');
    }
    else {    //클릭한 부분이 이미 열려있는 상태(on클라스가 있는 상태)
      $('.sub').slideUp(200); 
      $(this).parents('li').removeClass('on'); 
    }
  }
});


//모바일 상태에서 데스크탑으로 리사이즈 하면 
//모바일에 열렸던 style 그냥 그대로 보이는 현상
$(window).resize(function(){
    if( $(window).width() < 1060){     
        $(".sub").removeAttr("style");
        $(".header").removeAttr("style");
        $("nav ul li.top").removeClass("on");
        $(".header nav").removeAttr("style");
        $(".header .menu_box a").removeClass("open");
    } 
});


//


$('.menu_box a').click(function(){
    $(this).toggleClass('open');
  
    if($(this).hasClass('open')){
      $('.header nav').stop().animate({right:0},400);
      $('header').stop().animate({left:-250},400);    
    } 
    else {    
      $('.header nav').stop().animate({right:-250},200);
      $('header').stop().animate({left:0},200); 
    }
  })