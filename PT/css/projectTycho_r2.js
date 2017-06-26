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
	    
    // Function to hide all menu items except the selected.
	$(".navBtnHide li a").mouseover(function(){
		$(this).parent().siblings().find("a").css({
			color:"#111150"
		});
    }).mouseout(function(){
    	$(".navBtnHide li a").css("color","white");
    }); 
    
    //Function to display footer.
    $(".t-table.footer .col_1 h4").click(function(){
    	if($(".t-table.footer .t-row").css("display")=="block"){
	    	$(this).parent().siblings(" .col_2").toggle().toggleClass('.colShow');
    	}
    });
});

