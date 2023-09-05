// navbar color change on scroll
$(document).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if(scroll > 100){
			$("nav").css("background","#fff");
		}else{
			$("nav").css("background","");
		}
	});
});

// add active class in nav
$(document).ready(function() {
	$("nav ul li a").click(function() {
		$("nav ul li a").removeClass("active");
		$(this).addClass("active");
	})
})

// scroll button

// $(document).ready(function() {
// 	$(window).scroll(function() {
// 		if($(window).scrollTop() > 100) {
// 			$("#scroll").fadeIn();
// 		}else{
// 			$("#scroll").fadeOut();
// 		}
// 	});
// });

// $(document).ready(function() {
// 	$("#scroll").click(function() {
// 		$("html body").animate({scrollTop:0},"slow");
// 	});
// });

$(document).ready(function(){
	var scrollDownButton = $("#scroll");
	scrollDownButton.hide();

	$(document).scroll(function() {
		if ($(this).scrollTop()>500) {
			$(scrollDownButton).fadeIn(1000);
		}else{
			$(scrollDownButton).fadeOut();
		}
	});

	$(scrollDownButton).click(function() {
		$("body , html").animate({
			scrollTop:0
		},500);
		return false;
	});
});
