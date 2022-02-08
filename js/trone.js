

$(document).ready(function(){
	$('.accordion-list > li > .answer').hide();
	$('.accordion-list > li').click(function() {
	  $(".accordion-list > li.active").not(this).removeClass('active').find('.answer').slideUp(); 
	  $(this).toggleClass('active').find('.answer').slideToggle()
	  return false;
	});
  });


///////////////////////////----------.///////////////////


$(function () {
	$(".slider-range").each(function (index, slider) {
		let min = parseInt($(slider).attr('data-min'));
		let max = parseInt($(slider).attr('data-max'));
		let step = parseInt($(slider).attr('data-step'));
		$(slider).slider({
			range: true,
			min: min,
			max: max,
			step: step,
			values: [min, max],
			slide: (event, ui) => {
				$(slider).attr('data-left', ui.values[0]);
				$(slider).attr('data-right', ui.values[1]);
			}
		});
	});
  });
  
  
  var x, i, j, l, ll, selElmnt, a, b, c;
  /*look for any elements with the class "custom-select":*/
  x = document.getElementsByClassName("custom-select");
  l = x.length;
  for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
	  /*for each option in the original select element,
	  create a new DIV that will act as an option item:*/
	  c = document.createElement("DIV");
	  c.innerHTML = selElmnt.options[j].innerHTML;
	  c.addEventListener("click", function(e) {
		  /*when an item is clicked, update the original select box,
		  and the selected item:*/
		  var y, i, k, s, h, sl, yl;
		  s = this.parentNode.parentNode.getElementsByTagName("select")[0];
		  sl = s.length;
		  h = this.parentNode.previousSibling;
		  for (i = 0; i < sl; i++) {
			if (s.options[i].innerHTML == this.innerHTML) {
			  s.selectedIndex = i;
			  h.innerHTML = this.innerHTML;
			  y = this.parentNode.getElementsByClassName("same-as-selected");
			  yl = y.length;
			  for (k = 0; k < yl; k++) {
				y[k].removeAttribute("class");
			  }
			  this.setAttribute("class", "same-as-selected");
			  break;
			}
		  }
		  h.click();
	  });
	  b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function(e) {
		/*when the select box is clicked, close any other select boxes,
		and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	  });
  }
  function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
	except the current select box:*/
	var x, y, i, xl, yl, arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
	  if (elmnt == y[i]) {
		arrNo.push(i)
	  } else {
		y[i].classList.remove("select-arrow-active");
	  }
	}
	for (i = 0; i < xl; i++) {
	  if (arrNo.indexOf(i)) {
		x[i].classList.add("select-hide");
	  }
	}
  }
  /*if the user clicks anywhere outside the select box,
  then close all select boxes:*/
  document.addEventListener("click", closeAllSelect);
  

//  --------------- //// =======  /////


  var swiper = new Swiper(".mySwiper", 
  {
    spaceBetween: 0,
    slidesPerView: 5,
    freeMode: true,
	loop:false,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,	
	loop:false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
	
  });


  (function() {
	var swiper = new Swiper('.mySwiper2', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		
		});

	$('.mySwiper2 .swiper-slide,.maximize').on('click', function() {
	  var slideId = $(this).attr('id');         
	  openFullscreenSwiper(slideId);
	});

	function openFullscreenSwiper(initialSlideNumber) {
	  var mainSwiperMarkup = $('.mySwiper2').html(); 

	  $('#fullscreen-swiper').append(mainSwiperMarkup).fadeIn();
	  
	  var fullscreenSwiper = new Swiper('#fullscreen-swiper', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		slidesPerView: 1,
		loop:false,
		initialSlide: initialSlideNumber - 1,
		zoom: {
			maxRatio: 1.7,
			minRation: 1,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",

		  },
	  });      

	  swiper.on("slideChangeTransitionStart", swiper.zoom.out);
	  swiper.on("slideChangeTransitionEnd", swiper.zoom.in);

	  $('#fullscreen-swiper .times, #fullscreen-swiper').on('click', function() {
		$('#fullscreen-swiper').fadeOut();
		$('body, html').removeClass('no-scroll');
		$('.chat').removeClass('clicked');
	  });

	$('.share').on('click', function() {	
	$(this).parent('#fullscreen-swiper').find('.chat').toggleClass('clicked');
});

	  $("#fullscreen-swiper .swiper-slide img, .share, .chat,.swiper-button-prev,.swiper-button-next").click(function(event){
		event.stopPropagation();
	});

	  window.onscroll = function() {
		$('#fullscreen-swiper').fadeOut(100);
		$('body, html').removeClass('no-scroll');
		$('.chat').removeClass('clicked');

	  }
	}
  
  })();
