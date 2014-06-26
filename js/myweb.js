$(document).ready(function () {

//    location=location;

    window.onresize=function(){
        $(document).ready(function(){
            location=location;ResizeImg();
        })};
    /**
     * 图片自适应
     * @constructor
     */
    function ResizeImg(){
        var ScreenResolutionHeight = $(window).height();
        var ScreenResolutionWidth = $(window).width();
        $.each($("img"),function(){
            var image = new Image();
            image.src = $(this).attr('src');
            if(ScreenResolutionWidth!==1920){
                var ratiowidth = ScreenResolutionWidth/1920;
                var ratioheight = ScreenResolutionHeight/955;
                var imgnewwidth = image.width*ratiowidth;
                var imgnewheight = image.height*ratioheight;
                $(this).attr('width',imgnewwidth);
                $(this).attr('height',imgnewheight);
            }
        });

    }
    new ResizeImg();

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
        $(".nav_skill").click(function(e){
            e.preventDefault();
            $.scrollTo('#skill',1400,{queue:true} );
            $(".img").animate({opacity:"1"},3000,function(){

            });
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
        $("#photoarrow").fadeOut("800");
        $("#travelarrow").fadeOut("800");
        $("#rightarrow").fadeIn("800");

    })
    $("#photography").click(function () {
        $("#infoword").html("I like photograpy very much. I think it is a very good way for us to remember the old days. You can click the arrow to see some pictures I took before.");
        $("#rightarrow").fadeOut("800");
        $("#travelarrow").fadeOut("800");
        $("#photoarrow").fadeIn("800");
    })
    $("#travel").click(function () {
        $("#infoword").html("I'm crazy about traveling. I alawys believe in that you can extend your life by experience more.");
        $("#rightarrow").fadeOut("800");
        $("#photoarrow").fadeOut("800");
        $("#travelarrow").fadeIn("800");
    })
    $("#rightarrow").click(function(e){
        e.preventDefault();
        $.scrollTo("#cartoonshow",1000,{queue:true} );
        $("#line").animate({width:"50%"},3000,function(){
            $("#ho1").animate({opacity:1},100);
            $("#ho2").animate({opacity:1},1000);
            $("#ho3").animate({opacity:1},1000);
        });

    })
    $("#photoarrow").click(function(e){
        console.log("no");
        e.preventDefault();
        $.scrollTo("#photographyshow",1000,{queue:true} );
    })
    $("#travelarrow").click(function(e){
        e.preventDefault();
        $.scrollTo("#travelshow",1000,{queue:true} );
        setInterval(function(){ $("#mapgo").fadeOut(100).fadeIn(100); },200);
    })
    $(".photo").mouseenter(function(){
        $(this).css("opacity","1");
    }).mouseleave(function(){
        $(this).css("opacity","0.6");
    })


})