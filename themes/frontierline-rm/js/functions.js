(function() {
    'use strict';


    var newsletterForm = document.getElementById('newsletter_form');
    var newsletterWrapper = document.getElementById('form-contents');
    var $doc = document.documentElement;
    var $window = $(window);
    var blogname = $('body').data('blogname');
    var navMoz = $('#nav-mozilla-menu');
    var navMozToggle = $('#nav-global .nav-mozilla .toggle');
    var categories = $('#categories');
    var catToggle = $('#toggle-categories');
    var catCats = $('#categories .category');
    var sidebar = $('#sidebar');
    var sideToggle = $('#toggle-sidebar');
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
    
    // Expand email form on input focus or submit if details aren't visible
    function initEmailForm() {
        var submitButton = $('.newsletter_form button[type=submit]');
        var formDetails = $('.newsletter_form .form-details');

        function showDetails() {
            if (formDetails.is(':hidden')) {
                formDetails.slideDown('normal');
            }
        }

        if ($('.newsletter_form #email').val() !== '') {
            showDetails();
        }

        $('.newsletter_form').on('focus', 'select, input', showDetails);

        submitButton.on('click', function(e) {
            if (formDetails.is(':hidden')) {
                e.preventDefault();
                showDetails();
            }
        });
    }
    initEmailForm();


    if (newsletterForm) {
        var blogName = newsletterForm.getAttribute('data-blog');
    }

    // handle errors
    var errorArray = [];
    var newsletterErrors = document.getElementById('newsletter_errors');
    function newsletterError() {
        var errorList = document.createElement('ul');

        if(errorArray.length) {
            for (var i = 0; i < errorArray.length; i++) {
                var item = document.createElement('li');
                item.appendChild(document.createTextNode(errorArray[i]));
                errorList.appendChild(item);
            }
        } else {
            // no error messages, forward to server for better troubleshooting
            newsletterForm.setAttribute('data-skip-xhr', true);
            newsletterForm.submit();
        }

        newsletterErrors.appendChild(errorList);
        newsletterErrors.style.display = 'block';
    }

    // show sucess message
    function newsletterThanks() {
        var thanks = document.getElementById('newsletter_thanks');

        // show thanks message
        thanks.style.display = 'block';
    }

    // XHR subscribe; handle errors; display thanks message on success.
    function newsletterSubscribe(evt) {
        var skipXHR = newsletterForm.getAttribute('data-skip-xhr');
        if (skipXHR) {
            return true;
        }
        evt.preventDefault();
        evt.stopPropagation();

        // new submission, clear old errors
        errorArray = [];
        newsletterErrors.style.display = 'none';
        while (newsletterErrors.firstChild) {
            newsletterErrors.removeChild(newsletterErrors.firstChild);
        }

        var email = document.getElementById('email').value;
        var newsletter = document.getElementById('newsletters').value;
        var privacy = document.querySelector('input[name="privacy"]:checked') ? '&privacy=true' : '';
        var lang = document.getElementById('lang').value;
        var fmt = document.querySelector('input[name="fmt"]:checked').value;
        var sourceUrl = document.getElementById('source_url').value;
        var params = 'email=' + encodeURIComponent(email) +
                     '&newsletters=' + newsletter +
                     privacy +
                     '&lang=' + lang +
                     '&fmt=' + fmt +
                     '&source_url=' + sourceUrl;

        var xhr = new XMLHttpRequest();

        xhr.onload = function(r) {
            if (r.target.status >= 200 && r.target.status < 300) {
                // response is null if handled by service worker
                if(response === null ) {
                    newsletterError(new Error());
                    return;
                }
                var response = r.target.response;
                if (response.success === true) {
                    newsletterWrapper.style.display = 'none';
                    newsletterThanks();

                    // Count signups in Google Analytics
                    if (typeof ga === 'function') {
                        ga('send', {
                            hitType: 'event',
                            eventCategory: blogName + ' /interactions',
                            eventAction: 'newsletter subscription',
                            eventLabel: newsletter
                        });
                    }
                }
                else {
                    if(response.errors) {
                        for (var i = 0; i < response.errors.length; i++) {
                            errorArray.push(response.errors[i]);
                        }
                    }
                    newsletterError(new Error());
                }
            }
            else {
                newsletterError(new Error());
            }
        };

        xhr.onerror = function(e) {
            newsletterError(e);
        };

        var url = newsletterForm.getAttribute('action');

        xhr.open('POST', url, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
        xhr.timeout = 5000;
        xhr.ontimeout = newsletterError;
        xhr.responseType = 'json';
        xhr.send(params);

        return false;
    }

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', newsletterSubscribe, false);
    }   

     // Show/hide the global nav in small viewports
     navMozToggle.on('click', function(){
        navMoz.slideToggle('fast');
    });

   


})(jQuery);
