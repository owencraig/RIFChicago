// main navigation, mobile toggle

function mobileNavigation() {
    var $mobileNavToggleContainer = $('.mobile-nav-toggle');
    var $mobileNavToggle = $('.mobile-nav-toggle > span');
    var $mobileNav = $('nav.main-navigation');

    //check if we're in mobile
    function isInDesktopView() {
        if ($mobileNavToggleContainer.css('display') === 'none') {
            return true;
        } else {
            return false;
        }
    }

    function toggleNav() {
        $mobileNav.slideToggle();
    }

    function navOff() {
        $mobileNavToggle.off();
        $mobileNav.hide();
    }

    if (!isInDesktopView()) {
        $mobileNavToggle.click(function () {
            toggleNav();
        });
        return false;
    } else {
        navOff();
        return true; 
    }

}

$(function () {
    mobileNavigation();
});

$(window).resize(function () {
    mobileNavigation();
});