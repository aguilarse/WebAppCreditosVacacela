$(document).ready(function(){
	$('#loguin').hide();

	$('#open_close').click(function(){
		$('#loguin').slideToggle();
	})

})

$(document).ready(function(){
	var altura = $('#minavb').offset().top;
	
	$(window).on('scroll', function(){
		if ($(window).scrollTop() > altura){
			$('#minavb').addClass('menu-fixed');
		}else{
			$('#minavb').removeClass('menu-fixed');
		}
	});
});

