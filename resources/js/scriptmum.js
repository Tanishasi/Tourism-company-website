$(document).ready(function(){
    $('.js--section-welcome').waypoint(function(direction){
    if(direction == "down"){
        $('nav').addClass('sticky');
    } else{
        $('nav').removeClass('sticky');
        
    }
    },{
        offset: '60px'
    });

    /*mobile navi*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        
        nav.slideToggle(200);
        if(icon.hasClass('fas fa-chevron-circle-down')){
             icon.addClass("far fa-times-circle js--nav-icon");
            icon.removeClass("fas fa-chevron-circle-down");
        } else {
             icon.addClass("fas fa-chevron-circle-down");
              icon.removeClass("far fa-times-circle");
        }
    });
    /*navigation scroll*/
        $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    
    /*---------------------------------------
    -------animate--------------------------
    ----------------------------------*/
 $('.js--wp-1').waypoint(function (direction) {
        $('.js--wp-1').addClass('animated swing');
    }, {
        offset: '50%'
    }); 
    $('.js--wp-2').waypoint(function (direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
       $('.js--wp-3').waypoint(function (direction) {
        $('.js--wp-3').addClass('animated flash');
    }, {
        offset: '50%'
    });
       $('.js--wp-4').waypoint(function (direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '60%'
    });
         $('.js--wp-5').waypoint(function (direction) {
        $('.js--wp-5').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
});
