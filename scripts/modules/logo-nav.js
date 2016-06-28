// main navigation, mobile toggle
function mobileNavigation() {
    var $mobileNavToggle = $('.mobile-nav-toggle > span'),
        $siteHeader = $('.site-header');   

    $mobileNavToggle.click(function () {
        $siteHeader.toggleClass('nav-open');  
    });    
}

$(function () {
    mobileNavigation();
}); 


//shrinking the desktop logo when user scrolls down the page
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 225) {
        $(".desktop").addClass("desktop-scrolled");
    }
    else{
        $(".desktop").removeClass("desktop-scrolled");
    }
});