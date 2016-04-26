// main navigation, mobile toggle

function mobileNavigation() {
    var $mobileNavToggleContainer = $('.mobile-nav-toggle'),
        $mobileNavToggle = $('.mobile-nav-toggle > span'),
        $siteHeader = $('.site-header');   

    //check if we're in mobile
    function isInDesktopView() {
        if ($mobileNavToggleContainer.css('display') === 'none') {
            return true;
        } else {
            return false;
        }
    }

    function toggleNav() {
        $siteHeader.toggleClass('nav-open');
    }

    function navOff() {
        $mobileNavToggle.off(); 
    }

    if (!isInDesktopView()) {
        $mobileNavToggle.click(function () {
            toggleNav();
        });
    } else {
        navOff(); 
    }

}

$(function () {
    mobileNavigation();
});

$(window).resize(function () {
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