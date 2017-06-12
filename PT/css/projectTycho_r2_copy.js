$(document).ready(function(){
	$(".menuButton").click(function(){
		$(".menu-item").toggleClass("dispBlock");
	});
	
	$(".menu-item").click(function(){
		$(this).find(".mLinks").toggleClass("dispBlock");
	});
	

	console.log("READY");
	$(window).resize(function(){
		console.log($("body").width());
	});	
	
	$(".dataPortal").click(function(){
		$(location).attr('href', 'pt_dataPortal.html');
	});
	
	// Block box dropdown menu.
	$(".block .blockTitle .downArrow").click(function(){
		console.log("Inside arrow click");
		//console.log($(this).parent());
		//$(this).parent().parent().find(".blockMenu").toggleClass("dispMenu");
		 /* if($(".block .blockTitle .blockMenu").show()){
			console.log("Try: " + $(".block .blockTitle .blockMenu").length);
			console.log("Block menu visible");
			$(".block .blockTitle .blockMenu").hide();
			$(this).show();
		}else{
			$(this).show();
		} */

//		$(this).closest(".block").find(".blockMenu").toggleClass("dispMenu");
		
	/*	$(".block .blockMenu").hide();
		if($(this).closest(".block").find(".blockMenu").hide()){
			$(this).closest(".block").find(".blockMenu").toggleClass("dispMenu");
		}else{
			$(this).closest(".block").find(".blockMenu").hide();
		} 
		
		$(".block .blockMenu").not($(this).closest(".blockMenu")).hide();
		if($(this).closest(".blockMenu").show()){
			console.log("In IF");
			$(this).closest(".blockMenu").hide();
		}else{
			console.log("In ELSE");
			$(this).closest(".blockMenu").show();
		} */
		
		//console.log("This: " + $(this).attr("class"));
			
	});
			
	$(window).resize(function(){
		var widthStr = $("body").css("width").replace(/[^\d\.]/g, "");
		var widthNum = parseInt(widthStr);
		console.log("After round: " + $(widthNum)); 		
		
		if(widthNum>=1500){
			console.log("Yes");
		}else{
			console.log("No");
		}

		if((widthNum>=681) & (widthNum<=1100)){
			console.log("Inside If");
			$(".c4_7").css("display","inline-block");
			$(".c4_8").css("display","inline-block");
			$(".c4_9").css("display","inline-block");
			$(".c4_10").css("display","none");
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

