﻿$(document).ready(function(){
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
	var arrowClkFlag=0;
	$(".block .blockTitle .dMenu").click(function(){
		if(arrowClkFlag==0){
			$(this).parent().siblings(".blockMenu").show();	
			arrowClkFlag=1;		
		}else{
			$(this).parent().siblings(".blockMenu").hide();				
			arrowClkFlag=0;
		}
		return false;
	});	
	
	$(document).click(function() {
	    $(".blockMenu").hide();
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
	
	/* $(".noSubMenu a").mouseover(function(){
		console.log("In function");
		/* $("#div1").fadeIn();
		$("#div2").fadeIn("slow");
		$("#div3").fadeIn(3000); 
		$(this).siblings(".menu-item h4, .menu-item a").css("color","blue"); 
    }).mouseout(function(){
    	$(this).siblings(".menu-item h4, .menu-item a").css("color","white");
    }); */


	$(".menu-item h4").mouseover(function(){
		// $(this).parent().siblings().find("h4, a").css("color","blue");
		$(this).parent().siblings().find("h4, a").css({
			color:"#111150"
		});
    }).mouseout(function(){
    	$(".menu-item h4, .menu-item a").css("color","white");
    }); 

});

