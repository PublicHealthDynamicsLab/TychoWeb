$(document).ready(function(){
	console.log("READY");
	$(window).resize(function(){
		console.log($("body").width());
	});	
	
	$(".dataPortal").click(function(){
		$(location).attr('href', 'pt_dataPortal.html');
	});
			
	$(window).resize(function(){
		// CSS width is returned as a String. So for comparison, it is converted to Integer.
		var widthStr = $(".featuredWork").css("width").replace(/[^\d\.]/g, "");
		var widthNum = parseInt(widthStr);

		/*if(widthNum<=750){		
			$("body").css("background-color","red");
		}else{
			$("body").css("background-color","white");
		}*/
		
		if((widthNum>=681) & (widthNum<=1100)){
			console.log("Inside If");
			$(".c4_7").css("display","inline-block");
			$(".c4_8").css("display","inline-block");
			$(".c4_9").css("display","inline-block");
			//$(".row.featuredWork").append('<div id="six" class=".c4 .featuredItem"></div>');
		}else if ((widthNum>=1101) & (widthNum<=1500)){
			$(".c4_7").css("display","inline-block");
			$(".c4_8").css("display","inline-block");			
			$(".c4_9").css("display","none");
			$(".c4_10").css("display","none");
		}else if(widthNum>1500){
			$(".c4_9").css("display","inline-block");
			$(".c4_10").css("display","inline-block");
		}
	});	
});

