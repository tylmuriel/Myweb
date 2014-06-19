$(document).ready(function () {


        $(".box").css("height",$(window).height());
        $(".box").css("width",$(window).width());
    $(function(){
        $(".nav_home").click(function(){
            $.scrollTo('#home',500);
        });
        $(".nav_hobby").click(function(){
            $.scrollTo('#hobby',800);
        });
        $(".nav_word").click(function(){
            $.scrollTo('#word',1000);
        });
        $(".nav_project").click(function(){
            $.scrollTo('#project',1200);
        });
        $(".nav_contact").click(function(){
            $.scrollTo('#contact',1500);
        });
    });

})