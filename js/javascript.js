
$(document).ready(function(){

		// expandable menu with plus and minus button

		var panels =$('.accordion > p').hide();
		var menu = $('.navigationtlist').hide();
		$(".accordion > a > h3 ").click(function(){
			var $this = $(this);
			$('.fa-plus').show();
		if($(this).parent().next('.text').is(":hidden")){
            $('.text').slideUp(200);
            $(this).parent().next('.text').slideDown(200);
            $('.fa-plus',this).hide();

        }
        else if($(this).parent().next('.text').is(":visible")){
            $(this).parent().next('.text').slideUp(200);
            $('.fa-plus',this).show();
            
        }
        
			
					return false;
		
		});

		// hamburger menu slide up and down function
		
		$(".button-trigger").click(function(){
			 if($(".navigation").is(":hidden")){
			 	$(".navigation").slideDown(200);
			 }
			 else if ($(".navigation").is(":visible")){
			 	$(".navigation").slideUp(200);
			 	
			 }

			return false;
		});
		
	});

