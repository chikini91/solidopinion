$(document).ready(function() {

// moving outgoingMenu

    $('.floatRigth').click(function () {
        $('.outgoingMenu').css("opacity","1");
        $('body').css({"overflow":"visible"});
        $('body').children().not('.outgoingMenu').css("opacity","0.3");
        $('body').animate({right:'200'},100)
    });
    $('.closeoutgoingMenu').click(function () {
        $('body').css({"overflow-x":"hidden"});
        $('body').children().css("opacity","1");
        $('body').animate({right:'0'},100)
    });

// stickyPanel

    var a = $('.sliderContainer').offset().top;

    $(window).scroll(function(){
        if ( a < ($("body").scrollTop()) ) {
            $(".fixedPanel").css('display','flex')
        }
         else {
            $(".fixedPanel").css('display','none')
        }
    });

// open/close social icons

    $('.cont').click(function (e) {

    var open = $('.open');

        open.toggleClass('toggleClass');

        if ( $(e.target).parent().hasClass('open') ) {
            $(".socialsinner").animate({left:'20px'},100);

        }
        else {
            $(".socialsinner").animate({left:'65px'},100);
        }

    });

    // slider //

    var width = $(".sliderContainer").width();
    $(".sliderContainer__slides>li").width(width);
    $(".sliderContainer__slides").width(width * $(".sliderContainer__slides>li").length);

    $(".sliderContainer__slides").css("left", -width);
    $(".sliderContainer__slides>li:last-child").prependTo('.sliderContainer__slides');

    function nextSlide() {

        $(".sliderContainer__slides").stop(true, true).animate({
            "margin-left": -width
        }, 800, function() {
            $(".sliderContainer__slides>li:first-child").appendTo('.sliderContainer__slides');
            $(".sliderContainer__slides").css("margin-left", 0);

        });
    }

    function prevSlide() {

        $(".sliderContainer__slides").stop(true, true).animate({
            "margin-left": width
        }, 800, function() {
            $(".sliderContainer__slides>li:last-child").prependTo('.sliderContainer__slides');
            $(".sliderContainer__slides").css("margin-left", 0);
        });
    }

    $(".sliderContainer__buttons_next").click(nextSlide);
    $(".sliderContainer__buttons_prev").click(prevSlide);

});

