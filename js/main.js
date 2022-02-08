



(function($) {
    $.fn.countTo = function(options) {
      // merge the default plugin settings with the custom options
      options = $.extend({}, $.fn.countTo.defaults, options || {});
  
      // how many times to update the value, and how much to increment the value on each update
      var loops = Math.ceil(options.speed / options.refreshInterval),
        increment = (options.to - options.from) / loops;
  
      return $(this).each(function() {
        var _this = this,
          loopCount = 0,
          value = options.from,
          interval = setInterval(updateTimer, options.refreshInterval);
  
        function updateTimer() {
          value += increment;
          loopCount++;
          $(_this).html(value.toFixed(options.decimals));
  
          if (typeof(options.onUpdate) == 'function') {
            options.onUpdate.call(_this, value);
          }
  
          if (loopCount >= loops) {
            clearInterval(interval);
            value = options.to;
  
            if (typeof(options.onComplete) == 'function') {
              options.onComplete.call(_this, value);
            }
          }
        }
      });
    };
  
  })(jQuery);
  
  jQuery(function($) {
    $('.timer').countTo({
      from:0,
      to: 50,
      speed: 5000,
      refreshInterval: 50,
      onComplete: function(value) {
        console.debug(this);
      }
    });
  });
  jQuery(function($) {
    $('.timer-1').countTo({
      from:0,
      to: 600,
      speed: 5000,
      refreshInterval: 50,
      onComplete: function(value) {
        console.debug(this);
      }
    });
  });
  jQuery(function($) {
    $('.timer-2').countTo({
      from:0,
      to: 34,
      speed: 5000,
      refreshInterval: 50,
      onComplete: function(value) {
        console.debug(this);
      }
    });
  });
  jQuery(function($) {
    $('.timer-3').countTo({
      from:0,
      to: 95,
      speed: 5000,
      refreshInterval: 50,
      onComplete: function(value) {
        console.debug(this);
      }
    });
  });





class TextAnimate {
    constructor(elem) {
        this.elem = elem;
        this.start();
    }

    start() {
        let _this = this;
        _this.elem.addClass('start_white');
        setTimeout(function () {
            _this.elem.removeClass('start_white').addClass('end_white');
            _this.end();
        }, 2000);
    }

    end() {
        let _this = this;
        setTimeout(function () {
            _this.elem.removeClass('end_white').addClass('finish');
        }, 2000);
    }
}

$('.text_animate').each(function (index, elem) {
    new TextAnimate($(elem));
})


class Slider {
    constructor() {
        this.slider = $('#main-slider');
        this.images = this.slider.find('.images');
        this.bullets = this.slider.find('.bullets');
        this.imageCount = this.images.find('img').length;
        this.init();
    }

    init() {
        this.createBullets();
        this.autoStart();
    }

    autoStart() {
        setInterval(() => {
            let activeIndex = this.bullets.find('.bullet.active').index() + 1;

            if (activeIndex === this.imageCount) {
                activeIndex = 0;
            }

            this.clickBullet(activeIndex);
        }, 5000);
    }

    createBullets() {
        let bullet = '<span class="bullet"></span>';
        this.bullets.html(bullet.repeat(this.imageCount));
        this.changeBullet(0);
        this.addBulletEvents();
    }

    addBulletEvents() {
        this.addBulletHover();
        this.addBulletClick();
    }

    addBulletHover() {
        $('.bullet').hover(
            function () {
                $(this).addClass('hover');
            },
            function () {
                $(this).removeClass('hover');
            }
        )
    }

    addBulletClick() {
        this.bullets.on('click', '.bullet', (event) => {
            let index = $(event.currentTarget).index();
            this.clickBullet(index);
        })
    }

    clickBullet(index) {
        this.changeBullet(index);
        this.changeImage(index);
    }

    changeBullet(index) {
        this.bullets.find('.bullet.active').removeClass('active');
        this.bullets.find('.bullet').eq(index).addClass('active');
    }

    changeImage(index) {
        this.images.find('img').hide();
        this.images.find('img').eq(index).fadeIn();
    }
}

new Slider();
$('.custom-select').each(function () {
    var $this = $(this);
    var numberOfOptions = $(this).children('option').length;

    $this.addClass('s-hidden');

    $this.wrap('<div class="select"></div>');

    $this.after('<div class="styledSelect"></div>');

    var $styledSelect = $this.next('div.styledSelect');

    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').next('ul.options').hide();
        }
        else {
            $('div.styledSelect.active').each(function () {
                $(this).removeClass('active').next('ul.options').hide();
            });
            $(this).toggleClass('active').next('ul.options').toggle();
        }
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});

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


$('.pulse3').click(function(){
	$('#modal').show();
});
$('#close').click(function(){
	$('#modal').hide();
});


$('.sales').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    //autoplay: true,
    //autoplaySpeed: 2000,
    dots: true,
    arrows: false,
    dotsClass: 'car_dot',
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
$('.dev').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
    dots: true,
    dotsClass: 'car_dot',
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.markalar').slick({
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.manss').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'car_dot',
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$("#accordion button").click(function () {
    if (!$(this).hasClass('minus'))
        $("#accordion button").removeClass('minus');
    $("#accordion p").stop().slideUp();
    $(this).next().stop().slideToggle();
    $(this).toggleClass('minus');
})

$('.sekillerc').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});

$('.prev').click(function () {
    $('.sekillerc').slick('slickPrev');
});

$('.next').click(function () {
    $('.sekillerc').slick('slickNext');
});


$('.sofer_slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    dotsClass: 'car_dot',
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});


$('.desings').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: false,
    autoplaySpeed: false,
    arrows: false,
    dots: true,
    dotsClass: 'car_dot desin_dot',
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});
