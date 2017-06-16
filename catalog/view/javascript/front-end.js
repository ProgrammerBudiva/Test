$(document).ready(function() {

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    $(".news-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });



     $('.gallery').each(function() { // the containers for all your galleries
         $(this).magnificPopup({
             delegate: 'a', // the selector for gallery item
             type: 'image',
             gallery: {
                enabled:true
             },
             mainClass: 'mfp-with-zoom', // this class is for CSS animation below

             zoom: {
                 enabled: true, // By default it's false, so don't forget to enable it

                 duration: 300, // duration of the effect, in milliseconds
                 easing: 'ease-in-out', // CSS transition easing function
                 opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                 }
             }
         });
     });
     if(!isMobile.any()){
         $(".gallery img").each(function () {
             $(this).mouseenter(function () {
                 $(this).elevateZoom({
                     zoomWindowWidth: 400,
                     zoomWindowHeight: 400,
                     easing: true
                     //scrollZoom : true
                 });
             });
         });
     }

    $('.big-product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        onInit: function(){
            $('.loader').css({"display":"none","z-index":"-1"});
            $('.big-product-slider img, .small-product-slider img').css({"visibility":"visible"});
        }
    });

    $('.small-product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-product-slider',
        focusOnSelect: true
    });

    /*
     * Из-за того, что неясно какая версия стоит слик слайдера и тугого elevateZoom плагина,
     * вынуждены применить легкий костыль, но в рамках и так того, что тут уже есть, это норм
     */
    $('.small-product-slider .slick-slide').click(function(){
        var index = $(this).attr('index');
        $('.big-product-slider .slick-slide').removeClass('slick-active').css({opacity:0});
        var $slide = $('.big-product-slider .slick-slide[index=' + index + ']');
        $slide.addClass('slick-active').css({opacity:1});
        var imgName = $slide.find('img').attr('src');
        $('.zoomContainer').find('.zoomWindow').css({
            'background-image': "url(" + imgName + ")"
        });
    });

    //$('.img-popup').magnificPopup({
    //    removalDelay: 500, //delay removal by X to allow out-animation
    //
    //    callbacks: {
    //        beforeOpen: function() {
    //            this.st.mainClass = this.st.el.attr('data-effect');
    //        },
    //        open: function() {
    //            $('.big-product-slider-2').slick({
    //                slidesToShow: 1,
    //                slidesToScroll: 1,
    //                arrows: true,
    //                fade: true
    //            });
    //        }
    //    },
    //    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    //});


    $('.small-product-slider .slick-slide').click(function(){
        $(".small-product-slider .slick-slide").removeClass("active-img");
        $(this).addClass("active-img");
    })
    $('.popular-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });
    $(".slick-slider-hits").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1234,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".recently-viewed").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {breakpoint: 1234,
                settings: {slidesToShow: 4}
            },{breakpoint: 992,
                settings: {slidesToShow: 3}
            },{breakpoint: 768,
                settings: {slidesToShow: 2}
            },{breakpoint: 480,
                settings: {slidesToShow: 1}
            }
        ]
    });

    slickStart();

    function slickStart(){
        $(".slick-slider-related").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }


    $('.delivery-pay>a').magnificPopup({
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
    $('a.forgotten').magnificPopup({
        removalDelay: 500, //delay removal by X to allow out-animation

        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    $('.delivery-continue-popup').magnificPopup({
        removalDelay: 500, //delay removal by X to allow out-animation

        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    $('.show-size-info-popup').magnificPopup({
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    // tab photo slider

    $('#tab-photo-slider').magnificPopup({
        delegate: 'a',
        type: 'image',
        removalDelay: 500,
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-with-anim',
        gallery: {
            enabled: true,
            navigateByImgClick: true
        },
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        }
    });

    $('.terms-of-use').magnificPopup({
        removalDelay: 500,
        callbacks: {
            beforeOpen: function() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });

    $(".new_post_delivery_form select").styler({
        selectSearch: true,
        selectSearchLimit: 0
    });


    $(".checkout-checkout select").styler({
        selectSearch: false,
        selectSearchLimit: 0
    });


    $('select, input').styler();

    $(".filter-show").click(function(){
        $(this).toggleClass("open");
        $(this).next().toggle();
    });
    if($(".filter-show").length > 0){
        $(".filter-show").click();
    }

    //if($(".filter-show").length>0){
    //    $(".list-group-item:first-child .filter-show").addClass("open");
    //}

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    $('.account-menu .d-table-cell').click(function(){
        $('.account-menu .d-table-cell').removeClass("active");
        $(this).addClass("active");
        if ($(this).hasClass("new-customer-btn")){
            $(".already-buy-here").hide();
            $(".new-customer").show();
        }
        else if ($(this).hasClass("already-buy-here-btn")){
            $(".new-customer").hide();
            $(".already-buy-here").show();
        }
    });


    $('.step-1').click(function(){
        $('.step-menu span').removeClass("active");
        $(".account-menu").show();
        $(".new-customer").show();
        $(".pay-field").hide();
        $(".step-1").addClass("active");
    });

    $('.choose-delivery-field input').change(function(){
        if ($(this).hasClass("newpost2")){
            $(".coureer").hide();
            $(".myself").show();
            $(".new_post_delivery_form").show();
            $(".newpost2").attr("id", "new_post_checked");
        }
        else if ($(this).hasClass("flat")){
            $(".myself").hide();
            $(".coureer").show();
            $(".new_post_delivery_form").hide();
        }
    });

    setTimeout(function(){$("#tab-youtube").children().addClass("videoWrapper");},100);

    /*  words color  */
    $('.title-module span').each(function(){
        var me = $(this);
        me.html( me.text().replace(/(^\D+\s)/,'<strong>$1</strong>') );
    });

    $('.second-category-wrap .col-right').each(function(){
        var colHeight = $(this).height();
        var refCount = $(this).find(".d-table-cell");
        console.log(refCount.length);
        var newRefHeight = Math.floor(colHeight/refCount.length);
        refCount.outerHeight(newRefHeight);
    })

    function GreatBalancer(block){
        var wrapWidth = $(block).parent().width(),
            blockWidth = $(block).width(),
            wrapDivide = Math.floor(wrapWidth / blockWidth),
            cellArr = $(block);
        for(var arg = 1;arg<=arguments.length;arg++) {
            for (var i = 0; i <= cellArr.length; i = i + wrapDivide) {
                var maxHeight = 0,
                    heightArr = [];
                for (j = 0; j < wrapDivide; j++) {
                    heightArr.push($(cellArr[i + j]).find(arguments[arg]));
                    heightArr[j].outerHeight("auto");
                    if (heightArr[j].outerHeight() > maxHeight) {
                        maxHeight = heightArr[j].outerHeight();
                    }
                }
                for (var counter = 0; counter < heightArr.length; counter++) {
                    $(cellArr[i + counter]).find(arguments[arg]).outerHeight(maxHeight);
                }
            }
        }
    }

    function balancerGroup(){
        setTimeout(function(){
            GreatBalancer(".slick-slider-hits .slick-slide",".image",".price");
            GreatBalancer(".recently-viewed .slick-slide",".image",".price");
            GreatBalancer(".product-grid",".image");
            GreatBalancer(".product-list",".image");
            GreatBalancer(".second-category-wrap>div",".category-title");
            GreatBalancer(".search-page .product-layout","img",".caption");
            GreatBalancer(".popular>div",".category-title");
        },1000);
    }

    balancerGroup();


    if($(".compare").length > 0){
        console.log($(".compare table input").length);
        var tableWidth = 80/$(".compare table input").length+"%";
        $(".compare table tbody td").css({"width":tableWidth})
    }

    $(".review-btn").click(function(){
        $(".review-drop").slideToggle();
    })

    /*  check empty cart for styles  */

    setInterval(function(){
        if($("#cart").find(".empty-cart").length>0){
            $("#cart>button").removeClass("btn-inverse");
            $("#cart>button").addClass("btn-default");
        }else{
            $("#cart>button").addClass("btn-inverse");
            $("#cart>button").removeClass("btn-default");
        }
    },10);

    $('#cart').on("click", function(){
        $('#cart .dropdown-menu').css({opacity:"1"});
    });

    //$(".to-drop").bind({mouseenter: showModal,mouseleave:hideModal});
    //$(".breadcrumbs-popup").bind({mouseenter: breadEnter,mouseleave:breadLeave})

    function showModal(){
        $(this).unbind("mouseenter");
        $(this).addClass("isOpen");
        $(this).find(".my-dropdown").slideDown();
    }
    function hideModal(){
        var thisElem = $(this);
       if(!$(this).find("input").is(":focus")) {
            $(this).find(".my-dropdown").slideUp(function () {
                    thisElem.bind("mouseenter", showModal);
                    thisElem.removeClass("isOpen");
                }
            );
        }
    }

    $(document).click(function(event) {
        var event = event || window.event;
        var ET = event.target || event.srcElement;
        if ($(ET).closest(".to-drop").length) return;
        $(".my-dropdown").slideUp(function () {
            $(".isOpen").bind("mouseenter", showModal);
            $(".isOpen").removeClass("isOpen");
        });
        event.stopPropagation();
    });


    $(".to-drop-main").bind({mouseenter: showModal2,mouseleave:hideModal2,mousemove:showModal2});
    //$(".breadcrumbs-popup").bind({mouseenter: breadEnter,mouseleave:breadLeave})


    if("https://" + location.hostname + "/" == location.href){
        showModal2();
    }


    function showModal2(){

        if (("https://" + location.hostname + "/" == location.href) && !isMobile.any()) {
            $(".left-bar-menu").addClass("isOpen2");
            $(".left-bar-menu").find(".my-dropdown-menu").show();
            countColumns();
        } else {
            $(this).unbind("mouseenter");
            // small little fix from beaver =)
            if($(this).hasClass("isOpen2")){
               stop;
            } else {
                $(this).addClass("isOpen2");
                $(this).find(".my-dropdown-menu").slideDown();
                countColumns();
            }
        }
    }
    function hideModal2(){
        var thisElem = $(this);
        if(("https://" + location.hostname + "/" == location.href) && !isMobile.any()){
            return
        }else if(!$(this).find("input").is(":focus")) {
            $(this).find(".my-dropdown-menu").slideUp(function () {
                    thisElem.bind("mouseenter", showModal2);
                    thisElem.removeClass("isOpen2");
                }
            );
        }
    }

    $(document).click(function(event) {
        var event = event || window.event;
        var ET = event.target || event.srcElement;
        if ($(ET).closest(".to-drop-main").length) return;
        if("https://" + location.hostname + "/" == location.href){
            return
        }else {
            $(".my-dropdown-menu").slideUp(function () {
                $(".isOpen2").bind("mouseenter", showModal2);
                $(".isOpen2").removeClass("isOpen2");
            });
        }
        event.stopPropagation();
    });


    if(isMobile.any()){

        $(".dropdown-menu .navbar-nav ul.sub-menu").css({
            'height':'auto',
            'position':'static',
            'box-shadow':'none',
            'border':'none'
        });
        $(".dropdown-menu .navbar-nav ul.menu-level-3").css({
            'position':'static',
            'max-height':'none',
            'display':'none',
            'padding-left':'15px'
        });

        $("div.dropdown-menu-collapse").bind("touchstart", function(e) {
            e.preventDefault();

            var $parentLi = $(this).closest('li');
            var $ul = $parentLi.find('>ul');

            if($ul.is(':visible')) {
                $ul.slideUp();
                $(this).find('i').removeClass('opened');
            } else {
                $ul.slideDown();
                $(this).find('i').addClass('opened');
            }

        });

        $(".for-mobile-touch .to-drop-main .btn-link").bind("touchstart",function(){
            if($(".for-mobile-touch .to-drop-main").hasClass("isOpen2")){
                var thisElem = $(".for-mobile-touch .to-drop-main");
                $(".for-mobile-touch .to-drop-main").find(".my-dropdown-menu").slideUp(function () {
                    thisElem.removeClass("isOpen2");
                });
            }else{
                if($(".for-mobile-touch .to-drop-main").hasClass("isOpen2")){
                    stop;
                } else {
                    $(".for-mobile-touch .to-drop-main").addClass("isOpen2");
                    $(".for-mobile-touch .to-drop-main").find(".my-dropdown-menu").slideDown();
                }
            }
        })

        $("#top-links .to-drop .user-panel").bind("touchstart",function(){
            if($("#top-links .to-drop").hasClass("isOpen")){
                var thisElem = $("#top-links .to-drop");
                $("#top-links .to-drop").find(".my-dropdown").slideUp(function () {
                    thisElem.removeClass("isOpen");
                });
            }else{
                if($("#top-links .to-drop").hasClass("isOpen")){
                    stop;
                } else {
                    $("#top-links .to-drop").addClass("isOpen");
                    $("#top-links .to-drop").find(".my-dropdown").slideDown();
                }
            }
        })

        $("#top-links .to-drop").unbind("mouseenter mouseleave mousemove");
        $(".for-mobile-touch .to-drop-main").unbind("mouseenter mouseleave mousemove");

    };

    var catMenuHeight;

    function countColumns() {
        $(".sub-menu").each(function () {
            catMenuHeight = $(".dropdown-menu .navbar-nav").outerHeight();
            var subMenuHeight = $(this).outerHeight();
            if (catMenuHeight >= subMenuHeight) {
                $(this).outerHeight(catMenuHeight);
            } else {
                var col_counter = Math.ceil((subMenuHeight + 30) / catMenuHeight);
                $(this).outerHeight(catMenuHeight);
                $(this).addClass("two-col");
                $(this).css({
                    "-moz-column-count": col_counter.toString(),
                    "-webkit-column-count": col_counter.toString(),
                    "column-count": col_counter.toString(),
                    "width": col_counter.toString() * 300 + "px"
                })
            }
        });
    }

    function ecslideshowResize(){
        if($(".common-home").length > 0 && $("body").width() > 992){
            var commonWidth = $(".common-home .container").width();
            var leftBarWidth = $(".left-bar-menu .my-dropdown-menu").width();
            $(".camera_wrap").width(commonWidth-leftBarWidth);
            var leftBarHeight = $(".left-bar-menu .my-dropdown-menu").height();
            /*$(".ecslideshow").height(leftBarHeight);*/
        }
    }

    ecslideshowResize();

    $(window).resize(function(){
        balancerGroup();
        ecslideshowResize();
    });

    $("#grid-view, #list-view").click(function(){
        balancerGroup();
    });


    $(".rating-ref").click(function(){
        $('a[href=\'#tab-review\']').trigger('click');
        $('html, body').animate({
            scrollTop: $("#review").offset().top
        }, 1000);
        $("#tab-review .review-btn").click();
    })

    $(".buy-1-click>span, .modal-wrap i").click(function(){
        $(".modal-wrap").slideToggle();
        $(".modal-wrap input[type=phone]").focus();
    })

    /*if($(".ecslideshow").length>0 && $(".ecslideshow").height()<$(".left-bar-menu .my-dropdown-menu").height()){
        $(".ecslideshow").height($(".left-bar-menu .my-dropdown-menu").height());   }*/


});