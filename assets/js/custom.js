$(document).ready(init);

var navStatus;
var accordionStatus;

var randomNumber = parseInt(Math.floor((Math.random()*9)+1));

function init() { 

    navStatus = 0;

    accordionStatus = 0;

    var navButton = document.getElementById("open-nav");
    navButton.style.cursor = "pointer";

    $("#open-nav").click(navCloseToggle);
    
    $("#page-wrap").click(navClose);

    $("#page-wrap").on("touchmove", function(e){
        preventDefault();
    });

    $("#main-nav li a").click(scrollBitch);

    $(".button-wrap a").click(scrollBitch);

    $(".scrollto").click(scrollBitch);

    $(".scrollto").click(aboutButton);

    $("#about-button").click(aboutButton);

    $("#contact-button").click(contactButton);

    $("#main-nav li a").click(navLink);

    $('.slider-wrap').bxSlider({
        pager: true,
        controls: false,
        mode: "fade",
        infiniteLoop: true,
        responsive: true,
        touchEnabled: true,
        auto: true
    });

    $('.testimonial-wrap').bxSlider({
        pager: true,
        controls: false,
        mode: "horizontal",
        infiniteLoop: false,
        responsive: true,
        touchEnabled: true,
        auto: false
    });

    $("#welcome").parallax("50%", .1);
    var myAccordion = new $.Zebra_Accordion($('.Zebra_Accordion'));

};

function scrollBitch(e) {

    e.preventDefault();

    var url = this.href;
    
    var sectionID = url.split("#");
    var section = sectionID[1];

    var targetOffset = $("#" + section).offset();
    var targetTop = targetOffset.top;

    $("html, body")
        .animate({
            scrollTop: targetTop
        }, 1000);
        
};

function aboutButton() {

    $("#main-nav li a")
            .removeClass("active");

    $("#about-link")
        .addClass("active");

};

function contactButton() {

    $("#main-nav li a")
            .removeClass("active");

    $("#contact-link")
        .addClass("active");

};

function navLink() {

    $("#main-nav li a")
            .removeClass("active");

    $(this)
        .addClass("active");  

};

function navCloseToggle() {

    if (navStatus == 0) {

        $("nav")
            .clearQueue()
            .animate({
                left: "+=260" 
            }, 1000, "easeOutQuint");

        $("#page-wrap")
            .clearQueue()
            .animate({
                left: "+=260"
            }, 1000, "easeOutQuint");

        navStatus = 1;

    } else {

        $("nav")
            .clearQueue()
            .animate({
                left: "-=260" 
            }, 1000, "easeOutBounce");
        
        $("#page-wrap")
            .clearQueue()
            .animate({
                left: "-=260"
            }, 1000, "easeOutBounce");

        navStatus = 0;

    };

};

function navClose() {

    if (navStatus == 1) {

        $("nav")
            .clearQueue()
            .animate({
                left: "-=260" 
            }, 1000, "easeOutBounce");
        
        $("#page-wrap")
            .clearQueue()
            .animate({
                left: "-=260"
            }, 1000, "easeOutBounce");

        navStatus = 0;

    };

};

function prev() {

    if (options.continuous) slide(index-1);
    else if (index) slide(index-1);

}

function next() {

    if (options.continuous) slide(index+1);
    else if (index < slides.length - 1) slide(index+1);

}

