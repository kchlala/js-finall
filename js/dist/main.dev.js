"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

$(document).ready(function () {
  setTimeout(function () {
    $('#page-preloader').hide();
  }, 0);
});

var TextAnimate =
/*#__PURE__*/
function () {
  function TextAnimate(elem) {
    _classCallCheck(this, TextAnimate);

    this.elem = elem;
    this.start();
  }

  _createClass(TextAnimate, [{
    key: "start",
    value: function start() {
      var _this = this;

      _this.elem.addClass('start_white');

      setTimeout(function () {
        _this.elem.removeClass('start_white').addClass('end_white');

        _this.end();
      }, 2000);
    }
  }, {
    key: "end",
    value: function end() {
      var _this = this;

      setTimeout(function () {
        _this.elem.removeClass('end_white').addClass('finish');
      }, 2000);
    }
  }]);

  return TextAnimate;
}();

$('.text_animate').each(function (index, elem) {
  new TextAnimate($(elem));
});

var Slider =
/*#__PURE__*/
function () {
  function Slider() {
    _classCallCheck(this, Slider);

    this.slider = $('#main-slider');
    this.images = this.slider.find('.images');
    this.bullets = this.slider.find('.bullets');
    this.imageCount = this.images.find('img').length;
    this.init();
  }

  _createClass(Slider, [{
    key: "init",
    value: function init() {
      this.createBullets();
      this.autoStart();
    }
  }, {
    key: "autoStart",
    value: function autoStart() {
      var _this2 = this;

      setInterval(function () {
        var activeIndex = _this2.bullets.find('.bullet.active').index() + 1;

        if (activeIndex === _this2.imageCount) {
          activeIndex = 0;
        }

        _this2.clickBullet(activeIndex);
      }, 5000);
    }
  }, {
    key: "createBullets",
    value: function createBullets() {
      var bullet = '<span class="bullet"></span>';
      this.bullets.html(bullet.repeat(this.imageCount));
      this.changeBullet(0);
      this.addBulletEvents();
    }
  }, {
    key: "addBulletEvents",
    value: function addBulletEvents() {
      this.addBulletHover();
      this.addBulletClick();
    }
  }, {
    key: "addBulletHover",
    value: function addBulletHover() {
      $('.bullet').hover(function () {
        $(this).addClass('hover');
      }, function () {
        $(this).removeClass('hover');
      });
    }
  }, {
    key: "addBulletClick",
    value: function addBulletClick() {
      var _this3 = this;

      this.bullets.on('click', '.bullet', function (event) {
        var index = $(event.currentTarget).index();

        _this3.clickBullet(index);
      });
    }
  }, {
    key: "clickBullet",
    value: function clickBullet(index) {
      this.changeBullet(index);
      this.changeImage(index);
    }
  }, {
    key: "changeBullet",
    value: function changeBullet(index) {
      this.bullets.find('.bullet.active').removeClass('active');
      this.bullets.find('.bullet').eq(index).addClass('active');
    }
  }, {
    key: "changeImage",
    value: function changeImage(index) {
      this.images.find('img').hide();
      this.images.find('img').eq(index).fadeIn();
    }
  }]);

  return Slider;
}();

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
    } else {
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
    var min = parseInt($(slider).attr('data-min'));
    var max = parseInt($(slider).attr('data-max'));
    var step = parseInt($(slider).attr('data-step'));
    $(slider).slider({
      range: true,
      min: min,
      max: max,
      step: step,
      values: [min, max],
      slide: function slide(event, ui) {
        $(slider).attr('data-left', ui.values[0]);
        $(slider).attr('data-right', ui.values[1]);
      }
    });
  });
});
$('.sales').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  //autoplay: true,
  //autoplaySpeed: 2000,
  dots: true,
  arrows: false,
  dotsClass: 'car_dot'
});