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