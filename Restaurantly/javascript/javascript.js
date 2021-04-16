//navigation
$(document).ready(function(){
    $(window).scroll(function(){
        $("nav").toggleClass("scrooll",$(this).scrollTop()>50);
    });
});



// owl carousel

$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});





// ham-menu 
$(document).ready(function(){
$(".ham-menu-main").click(function(){
    $(".ham-menu").toggle();
    $("nav").hide();
});


$(".cross").click(function(){
    $(".ham-menu").hide();
    $("nav").show();
});


//SPECIALS section

$(".sp-1").click(function(){
    $(".specials-image1").show();
    $(".specials-image2").hide();
    $(".specials-image3").hide();
    $(".specials-image4").hide();
    $(".specials-image5").hide();

    $(".sp-1").css({
        "background":"#cda45e",
        
        

    });
    $(".Modi-sit").css("color","#000");


    $(".sp-2").css({
        "background":"transparent",
       
        
    });
    $(".sp-2-a").css("color","#fff");
    $(".sp-3").css({
        "background":"transparent",
       
    });
    $(".sp-3-a").css("color","#fff");
    $(".sp-4").css({
        "background":"transparent",
       
    });
    $(".sp-4-a").css("color","#fff");
    $(".sp-5").css({
        "background":"transparent",
       
    });
    $(".sp-5-a").css("color","#fff");



});

$(".sp-2").click(function(){
    $(".specials-image2").show();
    $(".specials-image1").hide();
    $(".specials-image3").hide();
    $(".specials-image4").hide();
    $(".specials-image5").hide();
    $(".Modi-sit").css({
        "background":"transparent",
       
    });
    $(".modi-sit-a").css("color","#fff");
    $(".sp-2").css({
        "background":"#cda45e",
      
        "padding":"10px 0px 10px 0px"

    });
    $(".sp-2-a").css("color","#000");


    $(".sp-3").css({
        "background":"transparent",
      
    });
    $(".sp-3-a").css("color","#fff");
    $(".sp-4").css({
        "background":"transparent",
       
    });
    $(".sp-4-a").css("color","#fff");
    $(".sp-5").css({
        "background":"transparent",
       
    });
    $(".sp-5-a").css("color","#fff");

});

$(".sp-3").click(function(){
    $(".specials-image3").show();
    $(".specials-image1").hide();
    $(".specials-image2").hide();
    $(".specials-image4").hide();
    $(".specials-image5").hide();
    $(".sp-3").css({
        "background":"#cda45e",
       
        "padding":"10px 0px 10px 0px"

    });
    $(".sp-3-a").css("color","#000");



    $(".Modi-sit").css({
        "background":"transparent",
       
    });
    $(".modi-sit-a").css("color","#fff");
    $(".sp-2").css({
        "background":"transparent",
       
    });
    $(".sp-2-a").css("color","#fff");
   
    $(".sp-4").css({
        "background":"transparent",
       
    });
    $(".sp-4-a").css("color","#fff");
    $(".sp-5").css({
        "background":"transparent",
       
    });
    $(".sp-5-a").css("color","#fff");


});

$(".sp-4").click(function(){
    $(".specials-image4").show();
    $(".specials-image1").hide();
    $(".specials-image2").hide();
    $(".specials-image3").hide();
    $(".specials-image5").hide();
    $(".sp-4").css({
        "background":"#cda45e",
       
        "padding":"10px 0px 10px 0px"

    });
    $(".sp-4-a").css("color","#000");


    $(".Modi-sit").css({
        "background":"transparent",
       
    });
    $(".modi-sit-a").css("color","#fff");
    $(".sp-2").css({
        "background":"transparent",
       
    });
    $(".sp-2-a").css("color","#fff");
   
    $(".sp-3").css({
        "background":"transparent",
        
    });
    $(".sp-3-a").css("color","#fff");
    $(".sp-5").css({
        "background":"transparent",
        
    });
    $(".sp-5-a").css("color","#fff");
});


$(".sp-5").click(function(){
    $(".specials-image5").show();
    $(".specials-image1").hide();
    $(".specials-image2").hide();
    $(".specials-image3").hide();
    $(".specials-image4").hide();
    $(".sp-5").css({
        "background":"#cda45e",
       
        "padding":"10px 0px 10px 0px"

    });
    $(".sp-5-a").css("color","#000");


    $(".Modi-sit").css({
        "background":"transparent",
       
    });
    $(".modi-sit-a").css("color","#fff");
    $(".sp-2").css({
        "background":"transparent",
       
    });
    $(".sp-2-a").css("color","#fff");
   
    $(".sp-3").css({
        "background":"transparent",
        
    });
    $(".sp-3-a").css("color","#fff");
    $(".sp-4").css({
        "background":"transparent",
        
    });
    $(".sp-4-a").css("color","#fff");
   


});



//menu section
$(".all").click(function(){
    $(".show-all").show();
});
$(".startrers").click(function(){
    $(".show-starters").show();
    $(".hide-starters").hide();
});
$(".salads").click(function(){
    $(".show-salads").show();
    $(".hide-salads").hide();
});
$(".speciality").click(function(){
    $(".show-spciality").show();
    $(".hide-spciality").hide();
});





});
