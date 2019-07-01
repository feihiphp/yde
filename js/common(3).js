$(function(){


	var initLeft = $('.xt').css('left')
	var initWidth = $('.xt').width()

	function changdu(index){
		var num = 0;
		$('.header-nav-item').each(function(i,item){
			if(i < index){
				num+=$(item).width()
			}
		})
		return num
	}


	$('.header-nav-item').on('mouseenter',function(){
		$('.xt').stop().animate({
			width:$(this).width(),
			left:parseInt(changdu($(this).index()))
		})
	}).on('mouseleave',function(){
		$('.xt').stop().animate({
			width:initWidth,
			left:initLeft
		})
	})



	//点击轮播
	var width = $('.item-list .items').width()
	var length = $('.item-list .items').length
	var count = 0;
	$('.nextlc').on('click',function(){
		if(count >= length - 5){
			return
		}
		count++
		$('.item-list').stop().animate({
			left: count * - (width +10 + 2)
		})
	})
	$('.prevlc').on('click',function(){
		if(count == 0){
			return
		}
		count--
		$('.item-list').stop().animate({
			left: count * - (width +10 + 2)
		})
	})


	$('.lc li').on('mouseover',function(){
		$(this).addClass('active').siblings().removeClass('active')
		$('.kist-c').eq($(this).index()).addClass('active').siblings().removeClass('active')
	})
	
	/* header flied */
	$(window).scroll(function(e){
		if($(window).scrollTop() > 200){
			$('#topheader').show()
		}else{
			$('#topheader').hide()
		}
	})

	//二级下拉
	$('.header-nav-item').on('mouseenter',function(){
		$(this).children('.header-nav-sub').show()
	}).on('mouseleave',function(){
		$(this).children('.header-nav-sub').hide()
	})

	//modal
	$('.popups').on('click',function(){
		var text = $(this).html() || $(this).data('title');
		$('.modal-box h3').html(text);
		$('.modal-box input[name="channel"]').val($(this).data('channel'));
		$('.zzcwe').show()
		$('.modal-box').show()
	})
	$('.closes').on('click',function(){
		$('.zzcwe').hide()
		$('.modal-box').hide()
	})
	
	//ajax-form
	$('.btnsub').on('click',function(){
		var nameVal = $('.modal-box input[name="name"]').val()
		var telVal = $('.modal-box input[name="tel"]').val()
		//alert(nameVal);
		if(!nameVal.trim()){
			alert('请填写姓名')
			return
		}
		if(telVal.length !== 11){
			alert('请填写正确的手机号')
			return
		}
		if(!Number(telVal)){
			alert('请填写正确的手机号')
			return
		}
		//requset
		$.ajax({
			url:'/collection/index',
			type:'POST',
			data:{
				tel:telVal,
				name:nameVal,
				channel:$(".modal-box input[name='channel']").val(),
				source:$(".modal-box input[name='source']").val(),
				__hash__: $(".modal-box input[name='__hash__']").val()
			},
			success:function(res){
				alert(res.info)
				$('.modal-box input[name="name"]').val('');
				$('.modal-box input[name="tel"]').val('');
				$('.modal-box input[name="channel"]').val('');
				$('.zzcwe').hide();
				$('.modal-box').hide();
			}
		})
	})

	/*footer*/
	$('#loiu a').on('mouseover',function(){
		$(this).addClass('current').siblings().removeClass('current')
		$('.dasd').html($(this).data('address'))
	})

	$('#sada a').on('mouseover',function(){
		$(this).addClass('current').siblings().removeClass('current')
		$('#asdaff').html($(this).data('address'))
	})

	$('.icon-bt').on('click',function(){
		if($(this).hasClass('icon-btf')){
			$(this).removeClass('icon-btf')
			$('#J_bottom_wrap').slideUp()
		}else{
			$(this).addClass('icon-btf')
			$('#J_bottom_wrap').slideDown()
		}
	})

	$('.search').on('click',function(){
		$('.search-box').slideDown()
	})
	$('.header-search-close').on('click',function(){
		$('.search-box').slideUp()
	})
})