'use strict';

/*  An explanation for the following code block:
    JQuery provides an animate() function, which is able to provide a smooth
        transition between specified CSS attributes
        http://api.jquery.com/animate/

    JQuery UI is an extension library which provides implementations for
        animation effects, easing, etc.
        You can do animations without the JQuery UI, but in this case you have
        to provide your own implementation of easing functions

        https://stackoverflow.com/questions/5207301/jquery-easing-functions-without-using-a-plugin

    You can also just import the easing library, or a specific function

        http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js

        A good visualization of these is provided on

        http://easings.net/
*/
$.extend($.easing,
{
    /* excerpt from http://gsgd.co.uk/sandbox/jquery/easing/jquery.easing.1.3.js */

    def: 'easeOutExpo', /* default if the easing function is not specified */

    easeOutExpo: function (x, t, b, c, d) {
        return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

(function() {

    var settings;
    var disableScrollFn = false;
    var navItems;
    var navs = {}, sections = {};

    // navigation bar scrolling functions
    /* .fn refers to the JQuery function prototype
            https://stackoverflow.com/questions/4083351/what-does-jquery-fn-mean
        This also means that all JQuery objects will inherit this function, and
        at the same time, the "this" inside the function will refer to the object
        the JQuery search returns.
     */
    $.fn.navScroller = function(options) {
        console.log(this);

        settings = $.extend({
            scrollToOffset: 170,
            scrollSpeed: 800,
            activateParentNode: true,
        }, options );
        navItems = this;

        // attach click listeners
    	navItems.on('click', function(event){
    		event.preventDefault();
            var navID = $(this).attr("href").substring(1);
            disableScrollFn = true;
            activateNav(navID);
            populateDestinations(); //recalculate these!
        	$('html,body').animate({scrollTop: sections[navID] - settings.scrollToOffset},
                settings.scrollSpeed, "easeOutExpo", function(){
                    disableScrollFn = false;
                }
            );
    	});

        // populate lookup of clickable elements and destination sections
        populateDestinations(); //should also be run on browser resize, btw

        // setup scroll listener
        $(document).scroll(function(){
            if (disableScrollFn) { return; }
            var page_height = $(window).height();
            var pos = $(this).scrollTop();
            for (var i in sections) {
                if ((pos + settings.scrollToOffset >= sections[i]) && sections[i] < pos + page_height){
                    activateNav(i);
                }
            }
        });
    };

    function populateDestinations() {
        console.log('recalculated');
        navItems.each(function(){
            var scrollID = $(this).attr('href').substring(1);
            navs[scrollID] = (settings.activateParentNode)? this.parentNode : this;
            sections[scrollID] = $(document.getElementById(scrollID)).offset().top;
        });
    }

    function activateNav(navID) {
        for (var nav in navs) { $(navs[nav]).removeClass('active'); }
        $(navs[navID]).addClass('active');
    }
})();


$(document).ready(function (){

    $('nav li a').navScroller();

    // section divider icon click gently scrolls to reveal the section
	$(".sectiondivider").on('click', function(event) {
    	$('html,body').animate({scrollTop: $(event.target.parentNode).offset().top - 50}, 400, "easeOutExpo");
	});

    // links going to other sections nicely scroll
	$(".container a").each(function(){
        if ($(this).attr("href").charAt(0) == '#'){
            $(this).on('click', function(event) {
        		event.preventDefault();
                var target = $(event.target).closest("a");
                var targetHight =  $(target.attr("href")).offset().top
            	$('html,body').animate({scrollTop: targetHight - 170}, 800, "easeOutExpo");
            });
        }
	});

});

