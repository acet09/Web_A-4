$(document).ready(function(){
    // nav
    $(".nav-menu > ul > li").hover(function(){
        $(".sub, .GNB-bg").stop().slideDown(200);
    },function(){
        $(".sub, .GNB-bg").stop().slideUp(200);
    });

    // slide		
		$(".slide-con").hide();
		$(".slide-con:first-child").show();
    function slidemove(){
      $(".slide-con:first-child").fadeOut().next().fadeIn().end().appendTo(".slide-box2");
    }
    setInterval(slidemove, 3000);

		// pop
		$("#pop").hide();
		$(".not-box ul li:first-child").click(function(){
			$("#pop").show();
		});
		$("#pop button").click(function(){
			$("#pop").hide();
		});


});