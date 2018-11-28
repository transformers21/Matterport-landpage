$(document).ready(function () {
    new WOW().init();
    $("select").change(function () {
        $(this).removeClass("unselected");
    });
    $('.slider-slick.dekstop-slider, .slider-slick.ipad-slider').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });
    var stickyHeaderTop = $('.services-sidebar').offset().top;
    $(window).scroll(function () {
        if ($(window).width() < 768) {
            if ($(window).scrollTop() > stickyHeaderTop) {
                $('.services-sidebar').css({position: 'fixed', top: '0px'});
            } else {
                $('.services-sidebar').css({position: 'static', top: '0px'});
            }
        }
    });

    $(window).scroll(function () {
        var scrollWindow = $(window).scrollTop();
        var scrollObject = $('#svg-animation').offset().top;
        var posSidebarLeft = $('#sidebar-left').offset().top;
        var posSidebarLeftHeight = $('#sidebar-left').height();
        var posService2 = $('#services2').offset().top + $('#services2').outerHeight(true);
        var posService = $('#services').offset().top + $('#services').outerHeight(true);
        var posServiceDesktopHeight = $('#services-img-desktop').height();
        var posServiceArticle = $('#services .services-article').offset().top + $('#services .services-article').outerHeight(true);

        if (scrollWindow > scrollObject) {
            $("#svg-animation").addClass("svg-animation");
        }

        if ($(window).width() >= 768) {
            if( posSidebarLeftHeight>$(window).height() ) {
                if (scrollWindow > posSidebarLeft) {
                    $('#sidebar-left').addClass('sidebar-left-fixed');
                }
                if (scrollWindow < posServiceArticle - 70) {
                    $('#sidebar-left').removeClass('sidebar-left-fixed');
                    $('#sidebar-left2').css('opacity', '0');
                }
                if ((scrollWindow + posSidebarLeftHeight) > posService2) {
                    $('#sidebar-left').css('opacity', '0');
                    $('#sidebar-left2').css('opacity', '1');
                }
                if ((scrollWindow + posSidebarLeftHeight) < posService2) {
                    $('#sidebar-left').css('opacity', '1');
                    $('#sidebar-left2').css('opacity', '0');
                }
            } else {
                var h_diff = ($(window).height()-posSidebarLeftHeight-25)/2;
                var posSidebarLeft = $('#services-img-desktop').offset().top;
                if (scrollWindow > posSidebarLeft-h_diff) {
                    $('#sidebar-left').addClass('sidebar-left-fixed');
                    $('#sidebar-left').css('top', h_diff+'px');
                } else {
                    $('#sidebar-left').removeClass('sidebar-left-fixed');
                    $('#sidebar-left').css('top', '');
                }
                console.log(scrollWindow + posSidebarLeftHeight, posService2-h_diff)
                if ((scrollWindow + posSidebarLeftHeight) >= posService2-h_diff) {
                    $('#sidebar-left').css('opacity', '0');
                    $('#sidebar-left2').css('opacity', '1');
                }
                if ((scrollWindow + posSidebarLeftHeight) < posService2-h_diff) {
                    $('#sidebar-left').css('opacity', '1');
                    $('#sidebar-left2').css('opacity', '0');
                } 
            }

            //scroll services
            var services_right = $('#services-right');
            services_right.css('position', 'absolute');
            var anchor = $('#services-img-ipad').offset().top-200;
            var point_h = $('#services2').outerHeight(true) / 2;
            if (scrollWindow <= anchor - point_h) {
                services_right.css('top', anchor + 'px');
            } else if (scrollWindow > anchor - point_h && scrollWindow < anchor) {
                var diff = -((scrollWindow - anchor) / 100) * 200;
                services_right.css('top', diff+84 + 'px');
            } else {
                services_right.css('top', '84px');
            }
        }
    });
});

var map;
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        scrollwheel: false,
        center: {lat: 32.7, lng: -117.18},
        styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#6195a0"}]}, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {"featureType": "landscape", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "poi.park", "elementType": "geometry.fill", "stylers": [{"color": "#e6f3d6"}, {"visibility": "on"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ececeb"}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "elementType": "labels.text", "stylers": [{"color": "#4e4e4e"}]}, {"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{"color": "#f4f4f4"}]}, {"featureType": "road.arterial", "elementType": "labels.text.fill", "stylers": [{"color": "#787878"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#eaf6f8"}, {"visibility": "on"}]}, {"featureType": "water", "elementType": "geometry.fill", "stylers": [{"color": "#c8d9ff"}]}],
    });
    setMarkers(map);
}
// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
var beaches = [
    ['Escondido', 33.131474, -117.097842, 4],
    ['Encinitas', 33.040236, -117.291404, 5],
    ['Solana Beach', 32.990243, -117.271227, 3],
    ['Del Mar', 32.958881, -117.265238, 2],
    ['Mira Mesa', 32.917263, -117.138010, 1],
    ['Poway', 32.971418, -117.038572, 4],
    ['El Cajon', 32.798717, -116.963173, 5],
    ['La Mesa', 32.769556, -117.022258, 3],
    ['La Jolla', 32.830970, -117.262307, 2],
    ['Clairemont', 32.831297, -117.146191, 1],
    ['Pacific Beach', 32.801726, -117.241791, 4],
    ['Mission Valley', 32.768890, -117.165978, 5],
    ['Ocean Beach', 32.753521, -117.248465, 3],
    ['Wooded Area', 32.714792, -117.255042, 2],
    ['San Diego', 32.731870, -117.166612, 1],
    ['Coronado', 32.682523, -117.180849, 4],
    ['Chula Vista', 32.636951, -117.077186, 5],
    ['Imperial Beach', 32.574752, -117.119841, 3],
    ['San Ysidro', 32.554908, -117.046196, 2],
    ['Serra Mesa', 32.803210, -117.149562, 1]
];
function setMarkers(map) {
    var image = {
        url: 'img/marker.png',
        size: new google.maps.Size(48, 72),
        scaledSize: new google.maps.Size(24, 36),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(12, 36)
    };
    var shape = {
        coords: [1, 1, 1, 20, 18, 20, 18, 1],
        type: 'poly'
    };
    for (var i = 0; i < beaches.length; i++) {
        var beach = beaches[i];
        var marker = new google.maps.Marker({
            position: {lat: beach[1], lng: beach[2]},
            map: map,
            icon: image,
            shape: shape,
            title: beach[0],
            zIndex: beach[3]
        });
    }
}

//iphone slider
var interval;
var slide_in_progress = false;
var current_slide = 0;
var total_slides = $('.slider-phone > div').length;
var last_offset;
var titleMain = $(".slider-slick.slider-phone");
jQuery(document).ready(function ($) {

    titleMain.slick({
        arrows: false,
        autoplay: false,
        infinite: false,
        verticalSwiping: true,
        vertical: true,
        useTransform: true,
        cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
        adaptiveHeight: true,
    });

    init_slider();
    function init_slider() {
        var widthWindow = $(window).width();
        var windowHeight = $(window).height();

        $(window).on('mousewheel', function (event, delta) {
            if (slide_in_progress) {
                event.preventDefault();
                return;
            }
            scrollEvent(event, windowHeight, delta);
        });

        if ($('.container').width() > 768) {
            $(document).bind('touchstart', function (e) {
                last_offset = e.originalEvent.touches[0].clientY;
            });
            $('.slide-text,  .slide-image').bind('touchmove', function (event) {
                var current_offset = event.originalEvent.touches[0].clientY;
                var delta = -1;
                if (current_offset > last_offset) {
                    delta = 1;
                }
                last_offset = current_offset;
                scrollEvent(event, windowHeight, delta);
            });
        }

        $(window).keydown(function (event) {
            var keycode = event.which;
            var delta = 0;
            if (keycode == 38) {
                delta = 1;
            } else if (keycode == 40) {
                delta = -1;
            }
            if (delta != 0) {
                scrollEvent(event, windowHeight, delta);
            }
        });
    }

    function scrollEvent(event, height, delta, distance) {
        if ($('.container').width() <= 768)
            return true;

        var dy = 50;
        var scroll_pos = $(window).scrollTop();
        var start_pos = $('.our-work').offset().top - dy - 250 / 4;
        var end_pos = $('.our-work').offset().top + dy + 250 / 4;
        var slide_pos = Math.floor($('.our-work').offset().top);
        if (!slide_in_progress) {
            if (scroll_pos > start_pos && scroll_pos < end_pos) {

                if (delta > 0 && current_slide != 0) {
                    if (Math.floor(scroll_pos) != slide_pos)
                        scroll_to(slide_pos);
                    event.preventDefault();
                    event.stopPropagation();
                    if (!slide_in_progress) {
                        show_prev_slide();
                    }
                } else if (delta < 0 && current_slide != total_slides - 1) {
                    if (Math.floor(scroll_pos) != slide_pos)
                        scroll_to(slide_pos);
                    event.preventDefault();
                    event.stopPropagation();
                    if (!slide_in_progress) {
                        show_next_slide();
                    }
                } else {
                    if (delta < 0) {
                        //scroll_to(end_pos+1);
                    } else if (delta > 0) {
                        event.preventDefault();
                        event.stopPropagation();
                        scroll_to(start_pos - 1)
                    }
                }
            }
        } else {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    function show_next_slide() {
        current_slide++;
        slide_in_progress = true;
        if (current_slide < total_slides) {
            titleMain.slick('slickNext');
            titleMain.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                slide_in_progress = false;
            });
        }
    }

    function show_prev_slide() {
        slide_in_progress = true;
        if (current_slide >= 0) {
            titleMain.slick('slickPrev');
            titleMain.on('afterChange', function (event, slick, currentSlide, nextSlide) {
                slide_in_progress = false;
            });
        }
        current_slide--;
    }

    function scroll_to(y) {
        slide_in_progress = true;
        $('html, body').animate({
            scrollTop: y
        }, 300, function () {
            slide_in_progress = false
        });
    }
});