$(function(){
	$('.kk').on('mouseover',function(){
		$(this).addClass('active').siblings().removeClass('active')

		if($(this).index() == 1){
			$('.res').show()
			$('.rel').hide()
			$('.rek').hide()
		}else if($(this).index() == 2){
			$('.rel').show()
			$('.rek').hide()
			$('.res').hide()
		}
		else if($(this).index() == 3){
			$('.rek').show()
			$('.rel').hide()
			$('.res').hide()
		}else{
			$('.rel').hide()
			$('.rek').hide()
			$('.res').hide()
		}
	}).on('mouseleave',function(){
			$('.res').hide()
			$('.rel').hide()
			$('.rek').hide()
	})
})