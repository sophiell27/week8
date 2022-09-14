
// swiper 
var swiper = new Swiper(".mySwiper", {
  // autoplay: true,
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 24,
    }
  }
});



$(document).ready(() => {
  //  hamburger menu logic
  $(".hamMenu").click(function () {
    $(this).hide();
    $(".navClose").show();
    $(".dropdownMenu").slideDown();
  });

  $(".navClose").click(function () {
    $(this).hide();
    $(".hamMenu").show();
    $(".dropdownMenu").slideUp();
  });

  // search box for moblie 

  $(".searchBtn").click(function () {
    if ($(window).width() < 1024) {
      $(".navBack").show();
      $(".searchInput").show();
      $(".hamMenu").hide();
      $(".dropdownMenu").slideUp();
      $(".logo").hide();
    }
  });

  // search return
  $(".navBack").click(function () {
    if ($(window).width() < 1024) {
      $(".navBack").hide();
      $(".searchInput").hide();
      $(".logo").show();
      $(".hamMenu").show();
      $(".dropdownMenu").slideUp();
    }
  });

  //masonry 


  // init Masonry
  var $artDis = $('.artDis').masonry({
    // options...
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.artDis-item',
    // use element for option
    columnWidth: '.artDis-sizer',
    percentPosition: true,
    gutter: 10,
  });
  // layout Masonry after each image loads
  $artDis.imagesLoaded().progress(function () {
    $artDis.masonry('layout');
  });


  // swiper 
  if ($('.swiper-slide').hasClass('swiper-slide-active')) {
    $(this).find().find().find("button").removeClass("opacity-0");
    $(this).find().find().find("h2").removeClass("opacity-0");
    $(this).find().find("p")..removeClass("opacity-0");
  }

});



