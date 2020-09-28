$(function(){
	$('.header__offer').slick({
		dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true,
	  arrows: false
	});

	$('.galery-img').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
	});

  
  $('.instagram__slider').slick({
  	infinite: true,
  	centerMode: true,
  	dots: false,
	  speed: 200,
	  slidesToShow: 3,
	  slidesToScroll: 1,
  	autoplay: true,
  	autoplaySpeed: 3000,
	  variableWidth: true,
	  arrows: false
  })

 
 
  



  $(window).on('load resize', function() {
  if ($(window).width() < 767) {
    $('.galery-img').slick({
    	nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="next arrow"></button>',
    	prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="prev arrow"></button>',
      centerMode: true,
      infinite: true,
      speed: 200,
      lazyLoad: 'ondemand',
      variableWidth: true,
      slidesToScroll: 1,
      slidesToShow: 1
    });
  } else {
    $('.galery-img').slick('unslick');
  }
});

	
	$('.header__burger-btn').click(function(){
		$('.header__burger-btn, .menu__list').toggleClass('active')
	})
});
