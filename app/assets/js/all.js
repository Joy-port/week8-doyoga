//adobe font Source Han Sans
(function(d) {
  var config = {
    kitId: 'ngn0vic',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

  //loader
  //loader 頁面載完就移出
  $(window).on("load", function() {
    $(".loader").remove();
  });

//Aos 只呈現一次·不會消失
AOS.init({
  once: true,
});
AOS.refresh();

//lax
window.onload = function() {
  lax.setup() // init

  const updateLax = () => {
      lax.update(window.scrollY)
      window.requestAnimationFrame(updateLax)
  }

  window.requestAnimationFrame(updateLax)
}

//swiper for index.html
const recommendSwiper = new Swiper(".swiper-per-column", {

  spaceBetween: 30,
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'row',
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  breakpoints: {
    576:{
      spaceBetween: 15,
      slidesPerView: 1.5,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    768:{
      spaceBetween: 30,
      slidesPerView: 2.2,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },

    992:{
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
});

//swiper for space.html
const swiper = new Swiper(".swiper-auto-play", {
  spaceBetween: 30,  
  slidesPerView: 4.5,  //一次顯示數量
  slidesPerGroup: 2,   //滑動數量
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {  //由pc 轉為 mobile
    992: {
      slidesPerView: 4,
      slidesPerGroup: 2, 
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1, 
    },
    576: {
      slidesPerView: 2,
      slidesPerGroup: 1, 
    },
    414: {
      slidesPerView: 1,
      slidesPerGroup: 1, 
    },
   
    
  },
  navigation: {
    nextEl: ".sp-btn-next",
    prevEl: ".sp-btn-prev",
  },
});

//QQ 超怪的 如果不改變視窗大小，會跑版，但是改了之後又沒事了
var swiperCourse = new Swiper(".swiper-course", {
  slidesPerView: 1,
  spaceBetween: 0,
  grid: {
    rows: 3,
    fill: 'row',
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      grid: {
        rows: 1, 
      },
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 1, 
      },
      spaceBetween: 30,
    },
  },
  direction: 'horizontal',
});

//swiper for course.html
var teacherSwiper = new Swiper(".swiper-teacher", {
  slidesPerView: 1,
  spaceBetween: 0,
  grid: {
    rows: 4,
    fill: 'row',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1, 
      },
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 1, 
      },
      spaceBetween: 30,
    },
  },
  direction: 'horizontal',
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 767 ? 'vertical' : 'horizontal';

  return direction;
}

$(function() {

  //choose courses
  $('.reservation-choose .stretched-link').on('click', function() {
    //aria-expanded
    let isExpanded = $(this).attr('aria-expanded');
    //console.log(isExpanded);
    let browseWidth = window.innerWidth;
  
    if(isExpanded === 'true'){ //展開
      //border-4 border-info
      //手機版適合 需要調整
      //$('.reservation-choose .card').removeClass('border-3').removeClass('border-secondary').hide(); 
      if(browseWidth <= 768){
      $('.reservation-choose .card').hide();
    }
      $('.reservation-choose .stretched-link').addClass('disabled');
      $(this).removeClass('disabled');
      $(this).parent().parent().parent().parent().addClass('border-4').addClass('border-secondary').show();
    }else{
      $('.reservation-choose .card').removeClass('border-4').removeClass('border-secondary');
      $('.choose').addClass('d-none');
      $('.reservation-choose .stretched-link').removeClass('disabled');
      $('.reservation-choose .card').removeClass('border-4').removeClass('border-secondary').show();
    }
  });
  
  
  //切換文字效果
  $('.course-pick').on('click', function() {
    const courseType = $(this).attr('data-tag'); //getAttribute
    const courseChosen = $(this).attr('data-card');
      //切換選擇項目
      $('.swiper-slide .card').removeClass('border-white');
      $('.swiper-slide .check').addClass('opacity-5');
  
      if(courseType == 'first' || courseChosen == 'first'){
        $('#card1').addClass('border-white');
        $('#card1 .check').removeClass('opacity-5');
        
      }else if(courseType == 'short' || courseChosen == 'short'){
        $('#card2').addClass('border-white');
        $('#card2 .check').removeClass('opacity-5');
        
      }else if(courseType == 'long' || courseChosen == 'long'){
        $('#card3').addClass('border-white');
        $('#card3 .check').removeClass('opacity-5');
        
      }
  
  
    //切換標題名稱 
    $('.course-name').removeClass('.d-block').addClass('d-none');
    //console.log(courseType);
    if(courseType == 'first' || courseChosen == 'first'){
      $('#text1').removeClass('d-none').addClass('d-block');
    }else if(courseType == 'short' || courseChosen == 'short'){
      $('#text2').removeClass('d-none').addClass('d-block');
    }else if(courseType == 'long' || courseChosen == 'long'){
      $('#text3').removeClass('d-none').addClass('d-block');
    }
  
  })
  
  })


  const dateDom = document.querySelector('.datepicker-date');
  if (dateDom) {
    const datepicker = new Datepicker(dateDom, {
      autoSize: true,
      gotoCurrent: true,
      daysOfWeekDisabled: [0],
      buttonClass: 'btn btn-outline-primary border-0 fw-normal',

    });
  }

