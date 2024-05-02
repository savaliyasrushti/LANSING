$(document).ready(function () {
    new WOW().init();
    $("#banner").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: false
    });
    wow.init();
});

$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

});

$(document).ready(function () {
    $("#team").owlCarousel({
        items: 4,
        loop: true,
        nav: false,
        dots: false
    });
});


$(document).ready(function () {
    $("#image-silder").owlCarousel({
        items: 5,
        loop: false,
        nav: false,
        dots: false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
    });
});

$(window).scroll(function(){
    var sticky = $('.sticky'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 150) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });



$(document).ready(function(){
    setTimeout(function(){
        $('.loader').fadeOut();
    },2000);
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
  $('html, body').animate({scrollTop:0}, '500');
});
})


//loader start

$(document).ready(function() {
    setTimeout(function(){
        $('.loader').fadeOut();
    },2000);
    var btn = $('#button');
    
$(window).scroll(function() {
    if($(window).scrollTop() > 300){
        btn.addClass('show');
    }else{
        btn.removeClass('show');
    }

});
btn.on('click',function(e){
    e.preventDefault();
    $('html,body').animate({screenTop:0},'500');
});
})
// loader end