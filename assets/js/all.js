"use strict";

//adobe font Source Han Sans
(function (d) {
  var config = {
    kitId: 'ngn0vic',
    scriptTimeout: 3000,
    async: true
  },
      h = d.documentElement,
      t = setTimeout(function () {
    h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;

  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded") return;
    f = true;
    clearTimeout(t);

    try {
      Typekit.load(config);
    } catch (e) {}
  };

  s.parentNode.insertBefore(tk, s);
})(document); //swiper
//only auto play


var swiperAutoPlay = new Swiper(".swiper-auto-play", {
  spaceBetween: 30,
  slidesPerView: 4.5,
  //一次顯示數量
  slidesPerGroup: 2,
  //滑動數量
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    //由pc 轉為 mobile
    992: {
      slidesPerView: 3,
      slidesPerGroup: 2
    },
    768: {
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); //change + per column + row per group  //need to replace cdn to
//<link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/css/swiper.min.css">
//<script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.6/js/swiper.min.js"></script>
//swiper for index.html

var swiperPerColumn = new Swiper(".swiper-per-column", {
  slidesPerView: 2.5,
  //一次顯示數量
  slidesPerGroup: 1,
  //滑動數量
  slidesPerColumn: 2,
  //一欄顯示多少行內容
  spaceBetween: 30,
  slidesPerColumnFill: 'row',
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    992: {
      slidesPerGroup: 1,
      slidesPerView: 2,
      slidesPerColumn: 2
    },
    768: {
      slidesPerGroup: 3,
      slidesPerView: 1,
      slidesPerColumn: 3
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); //swiper for course.html

var swiperAutoPlay2 = new Swiper(".swiper-teacher", {
  spaceBetween: 30,
  slidesPerView: 3.1,
  //一次顯示數量
  slidesPerGroup: 1,
  //滑動數量
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  breakpoints: {
    //由pc 轉為 mobile
    992: {
      slidesPerView: 2.1 //一次顯示數量 

    },
    768: {
      slidesPerView: 1 //一次顯示數量

    }
  },
  direction: getDirection(),
  on: {
    resize: function resize() {
      swiper.changeDirection(getDirection());
    }
  }
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 767 ? 'vertical' : 'horizontal';
  return direction;
}

var swiperCourse = new Swiper(".swiper-course", {
  spaceBetween: 30,
  slidesPerView: 3,
  //一次顯示數量
  slidesPerGroup: 1,
  //滑動數量
  breakpoints: {
    //由pc 轉為 mobile
    992: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 1
    }
  }
}); //choose courses

$(function () {
  $('.reservation-choose .stretched-link').on('click', function () {
    //aria-expanded
    var isExpanded = $(this).attr('aria-expanded'); //console.log(isExpanded);

    var browseWidth = window.innerWidth;

    if (isExpanded === 'true') {
      //展開
      //border-4 border-info
      //手機版適合 需要調整
      //$('.reservation-choose .card').removeClass('border-3').removeClass('border-secondary').hide(); 
      if (browseWidth <= 768) {
        $('.reservation-choose .card').hide();
      }

      $('.reservation-choose .stretched-link').addClass('disabled');
      $(this).removeClass('disabled');
      $(this).parent().parent().parent().parent().addClass('border-4').addClass('border-secondary').show();
    } else {
      $('.reservation-choose .card').removeClass('border-4').removeClass('border-secondary');
      $('.choose').addClass('d-none');
      $('.reservation-choose .stretched-link').removeClass('disabled');
      $('.reservation-choose .card').removeClass('border-4').removeClass('border-info').show();
    }
  }); //切換文字效果

  $('.course-pick').on('click', function () {
    var courseType = $(this).attr('data-tag'); //getAttribute

    var courseChosen = $(this).attr('data-card'); //切換選擇項目

    $('.card').removeClass('border-4').removeClass('border-white');
    $('.check').addClass('opacity-5');

    if (courseType == 'first') {
      $('#card1').addClass('border-4').addClass('border-white');
      $('#card1 .check').removeClass('opacity-5');
    } else if (courseType == 'short') {
      $('#card2').addClass('border-4').addClass('border-white');
      $('#card2 .check').removeClass('opacity-5');
    } else if (courseType == 'long') {
      $('#card3').addClass('border-4').addClass('border-white');
      $('#card3 .check').removeClass('opacity-5');
    }

    $('.card', this).addClass('border-4').addClass('border-white');
    $('.check', this).removeClass('opacity-5'); //切換標題名稱 

    $('.course-name').removeClass('.d-block').addClass('d-none'); //console.log(courseType);

    if (courseType == 'first' || courseChosen == 'first') {
      $('#text1').removeClass('d-none').addClass('d-block');
    } else if (courseType == 'short' || courseChosen == 'short') {
      $('#text2').removeClass('d-none').addClass('d-block');
    } else if (courseType == 'long' || courseChosen == 'long') {
      $('#text3').removeClass('d-none').addClass('d-block');
    }

    render();
  });
}); //datepicker
//$( ".datepicker" ).datepicker();
//# sourceMappingURL=all.js.map
