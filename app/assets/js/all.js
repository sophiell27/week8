
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

  $(".collFlow").hide();

  $(".collection > button").click(function () {
    console.log("ccc")
    $(this).addClass("border border-black border-b-grey-light text-black").removeClass("border-transparent border-b-black text-[#808080]");
    $(this).siblings().addClass("border-transparent border-b-black text-[#808080]").removeClass("border-black  border-b-grey-light text-black ");
  })

  $(".workBtn").click(function () {
    $(".workFlow").show();
    $(".collFlow").hide();
  })
  $(".collBtn").click(function () {
    $(".collFlow").show();
    $(".workFlow").hide();
  })

  //masonry 

  // init Masonry
  var $artDis = $('.artDis').masonry({
    // options...
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.artDis-item',
    // use element for option
    columnWidth: '.artDis-sizer',
    percentPosition: true,
  });
  // layout Masonry after each image loads
  $artDis.imagesLoaded().progress(function () {
    $artDis.masonry('layout');
  });

});



