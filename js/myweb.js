$(document).ready(function () {


//        $(".box").css("height",$(window).height());
//        $(".box").css("width",$(window).width());
    $("#topbanner").animate({width:"100%"},1500);
    $("#leftbanner").animate({height:"100%"},1500);

    $(function(){

        $(".nav_home").click(function(e){
            e.preventDefault();
            $.scrollTo('#home',1000,{queue:true} );
        });
        $(".nav_hobby").click(function(e){
            e.preventDefault();
            $.scrollTo('#hobby',1200,{queue:true} );
        });
        $(".nav_word").click(function(e){
            e.preventDefault();
            $.scrollTo('#word',1400,{queue:true} );
        });
        $(".nav_project").click(function(e){
            e.preventDefault();
            $.scrollTo('#project',1600,{queue:true} );
        });
        $(".nav_contact").click(function(e){
            e.preventDefault();
            $.scrollTo('#contact',1800,{queue:true} );
        });
    });

    $("#cartoon").click(function () {
        $("#infoword").html("I love cartoons very much and when i was in college i made some short cartoons with my friend. If you interested in" +
            " what i did, you can click the arrow to see some pictures of them.");
        $("#rightarrow").fadeIn("800");
    })
    $("#rightarrow").click(function(e){
        $("#cartoonshow").fadeIn(100);
        e.preventDefault();
        $.scrollTo("#cartoonshow",1000,{queue:true} );
        $("#line").animate({width:"50%"},3000,function(){
            $("#button1").animate({opacity:1},100);
            $("#button2").animate({opacity:1},1000);
        });

    })


})