$(function() {
    'use strict';

    var $window = $(window);
    var navMoz = $('#nav-mozilla-menu');
    var navMozToggle = $('#nav-global .nav-mozilla .toggle');
    var navGlobal = $('#nav-global');
    var navUtil = $('#nav-util');
    var navUtilTop = navUtil.offset();
    var siteWrap = $('.site-wrap');
    var canStick = $('.can-stick');
    var topLink = $('.page-top');

    // Sticky navigation
    var fixed = false;
    var didScroll = false;

    $window.scroll(function() {
        didScroll = true;
    });

    $window.resize(function() {
        navUtilTop = navUtil.offset();
    });

    $(document).ready(function() {
        var scrollTop = $window.scrollTop();
        if (scrollTop >= navUtilTop.top) {
            didScroll = true;
        }
    });

     // Smooth scroll to top
     topLink.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    });

    function adjustScrollbar() {
        if (didScroll) {
            didScroll = false;
            var scrollTop = $window.scrollTop();

            if (scrollTop >= 40) {
                navGlobal.addClass('is-minified');
            } else {
                navGlobal.removeClass('is-minified');
            }

            if (scrollTop >= navUtilTop.top - 30) {
                if (!fixed) {
                    fixed = true;
                    canStick.addClass('is-sticky');
                    siteWrap.css({
                        'padding-top' : '3em'
                    });
                }
            } else {
                if (fixed) {
                    fixed = false;
                    canStick.removeClass('is-sticky');
                    siteWrap.css({
                        'padding-top' : '0'
                    });
                }
            }
        }
    }

    // Check for an adjusted scrollbar every 100ms.
    setInterval(adjustScrollbar, 100);
    
   
     // Show/hide the global nav in small viewports
     navMozToggle.on('click', function(){
        navMoz.slideToggle('fast');
    });
   
	console.log("             _.-~-.\n           7''  Q..\\\n        _7         (_\n      _7  _/    _q.  /\n    _7 . ___  /VVvv-'_                                            .\n   7/ / /~- \\_\\\\      '-._     .-'                      /       //\n  ./ ( /-~-/||'=.__  '::. '-~'' {             ___   /  //     ./{\n V   V-~-~| ||   __''_   ':::.   ''~-~.___.-'' _/  // / {_   /  {  /\n  VV/-~-~-|/ \\ .'__'. '.    '::                     _ _ _        ''.\n  / /~~~~||VVV/ /  \\ )  \\        _ __ ___   ___ ___(_) | | __ _   .::'\n / (~-~-~\\\\.-' /    \\'   \\::::. | '_ ` _ \\ / _ \\_  / | | |/ _` | :::'\n/..\\    /..\\__/      '     '::: | | | | | | (_) / /| | | | (_| | ::'\nvVVv    vVVv                 ': |_| |_| |_|\\___/___|_|_|_|\\__,_| ''\n\n");
		
});
