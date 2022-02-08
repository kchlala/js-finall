document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('mouse-circle');

    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }

    let delay = 6,
        revisedMousePosX = 0,
        revisedMousePosY = 0;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        mouseCircle.style.top = revisedMousePosY + 'px';
        mouseCircle.style.left = revisedMousePosX + 'px';
    }
    delayMouseFollow();
});


$(document).ready(function () {
    setTimeout(function () {
        $('#page-preloader').hide();
    }, 1000);
});


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
.add({
  targets: ' .ml12 .letter',
  translateX: [40,0],
  translateZ: 0,
  opacity: [0,1],
  easing: "easeOutExpo",
  duration: 1200,
  delay: (el, i) => 500 + 30 * i
}).add({
  targets: '.ml12 .letter',
  translateX: [0,-30],
  opacity: [1,0],
  easing: "easeInExpo",
  duration: 1100,
  delay: (el, i) => 100 + 30 * i
});

