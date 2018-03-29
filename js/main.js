jQuery(document).ready(function() {

	$(".nav-icon").click(function(){
		$(".main-menu").css("left","0px");
		function showMenu() {
			$(".main-menu").css("clip-path","polygon(0 0,100% 0,100% 100%,0% 100%)");
			$(".nav-icon").animate({right:'-100'},300);
		}
		setTimeout(showMenu,100);
	});

	$(".close-icon").click(function(){

		$(".main-menu").css("clip-path","polygon(0 0,0% 0,100% 100%,0% 100%)");
		function hideMenu (){
			$(".main-menu").css("left","-300px");
			$(".nav-icon").animate({right:'50'},300);
		}
		setTimeout(hideMenu,300);
	});
	
	 	
 });
		


	 