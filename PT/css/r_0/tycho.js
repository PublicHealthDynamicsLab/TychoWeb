$(document).ready(function(){
	/* Mobile menu */
	$(".menuButton").click(function(){
		$(".menu-item").toggleClass("dispBlock");
	});
	
	$(".menu-item").click(function(){
		$(this).find(".mLinks").toggleClass("dispBlock");
	});
	
	/* Data portal */
	$(".dataPortal").click(function(){
		$(location).attr('href', 'dataPortal.html');
	});
	
	/* Data Map */
	$(".dataMap").click(function(){
		$(location).attr('href', 'diseases.html');
	});
});


 



