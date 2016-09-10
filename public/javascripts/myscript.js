
function myfunc(){
    console.log("great");
}

        // document.getElementById("myImg").className = "slideUp";


$(document).ready( function(){
    // $(window).scrollTop(function(){
    //     if(document.body.scrollTop > $("#profile").offset().top - 30) {
    //         $("#profileHeading").removeClass("profileHeading");
    //     }
    //
    // });
    //
    // $(window).scroll( function(){
    //     if(document.body.scrollTop < $("#profile").offset().top - 20) {
    //         $("#profileHeading").removeClass("profileHeading");
    //     }
    //     if (document.body.scrollTop > $("#profileHeading").offset().top -20){
    //         $("#profileHeading").addClass("profileHeading");
    //         console.log(document.body.scrollTop);
    //     }
    // });

    winHeight = $(window).height();
    winWidth = $(window).width();
    console.log("win height: " + winHeight );
    //$(".header-main").css("height", winHeight);
    //$(".header-main").css("width", winWidth);
    winH = $(window).innerHeight();
    // $(".cardcontent").css("height", winH * .7);
    // $("#page-wrapper").parent().parent().css("overflow", "hidden");
    x = $(".page-headerS").offset();
    //$("#mylogo").attr("height", winHeight/3);
    //$(".header-main").attr("width", "400px");

    height = window.innerHeight - x.top;
    //topOffset = x.top;
    // $("#page-wrapper").css("min-height", height);
    x = $(".cardcontent").offset();
    topOffset = x.top;
    height = window.innerHeight - topOffset - 20;
    // $(".cardcontent").css("height", height);

} );
