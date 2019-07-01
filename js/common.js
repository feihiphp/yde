$(document).ready(function() {
	var $this = $('.nav_list'),
		$nav_li = $this.find('li'),
		$nav_cur = $this.find('li.cur'),
		$dl = $this.find('dl');
	
	for (var i = 0; i < $dl.length; i++) {
		$width = $dl.eq(i).width() / 2;
		if (i == $dl.length - 1) {
			$width = $dl.eq(i).width() / 2 + 110;
		}
		$dl.eq(i).css("margin-left", -$width);
	};
	$nav_li.hover(
		function() {
			$nav_li.find('dl').removeClass('none');
			$nav_cur.removeClass('cur');
			$('#j_search_box').addClass('none');
			$(this).addClass('cur');
		},
		function() {
			$(this).removeClass('cur');
			$nav_cur.addClass('cur');
		}
	);

	var $that = $('#j_header_ul'),
		$header_li = $that.find('li'),
		$header_cur = $that.find('li.cur'),
		$header_dl = $that.find('dl');
	if ($header_cur.find('dl').length > 0) {
		$('.float_header').addClass('pb50')
	} else {
		$('.float_header').removeClass('pb50')
	};
	var $width2=0;
	for (var i = 0; i < $header_dl.length; i++) {
		$width2 = $header_dl.eq(i).width() / 2;
	
		if (i == $header_dl.length - 1) {
			$width2 = $header_dl.eq(i).width() / 2 + 80;
		}
		$header_dl.eq(i).css("margin-left", -$width2);
	};
	
	$header_li.hover(
		function() {
			$header_li.find('dl').removeClass('none');
			$header_cur.removeClass('cur');
			$(this).addClass('cur');
			if ($(this).find('dl').length > 0) {
				$('.float_header').addClass('pb50')
			} else {
				$('.float_header').removeClass('pb50')
			};
		},
		function() {
			$(this).removeClass('cur');
			$header_cur.addClass('cur');
			if ($header_cur.find('dl').length > 0) {
				$('.float_header').addClass('pb50')
			} else {
				$('.float_header').removeClass('pb50')
			};
		}
	);

	$('#j_search').on('click', function() {
		if ($('#j_search_box').hasClass('none')) {
			$nav_cur.find('dl').addClass('none');
			$('#j_search_box').removeClass('none');
			$('.nav_box').addClass('pb30');
		} else {
			$nav_cur.find('dl').removeClass('none');
			$('#j_search_box').addClass('none');
			$('.nav_box').removeClass('pb30');
		}
	});

	function search() {
		$keyword = $("#keyword").val();
		if ($keyword != '') {
			$jump_args_v = $('#jump_args2').val();
			window.location.href = "/school/index/s/" + $keyword + $jump_args_v + ".html";
		}

	}

	$("#keyword").keypress(function(e) {
		var key = e.which;
		if (key == 13) {
			search();
		}
	});

	if ($('.play_but').length > 0) {
		$('body').delegate(".play_but", "click", function() {
			var v_url = $(this).data('url');
			var v_tit = $(this).attr('alt');
			var body_h = ($(document.body).outerHeight(true)) + 'px';
			var calendar = '<div id="j_jump_bg" style="height:' + body_h + '; display:none"></div><div id="j_jump_box" class="pt30 pl50 pr50 pb30 none"><h3 class="pb10"><span class="pl10 pr10 pb10">' + v_tit + '</span><a  href="javascript:void(0)" class="pa j_jump_close">X</a></h3><iframe height=406 width="100%" src="' + v_url + '" frameborder=0></iframe></div>';
			if (v_url != '') {
				$("body").append(calendar);
				$('#j_jump_bg').fadeIn("slow");
			} else {
				alert('video coming soon！');
			}
			$("#j_jump_box").css({

				marginTop:- $("#j_jump_box").outerHeight()/2,
				marginLeft:- $("#j_jump_box").outerWidth()/2

			}).slideDown(200);
			$('.j_jump_close,#j_jump_bg').on('click', function() {
				$("#j_jump_box").remove();
				$('#j_jump_bg').remove();
			});
		});
	}

	if ($('.j_ask_talk').length > 0) {
		$('body').delegate(".j_ask_talk", "click", function() {
			var body_h = ($(document.body).outerHeight(true)) + 'px';
			var j_jump_h = -(577 + 60) / 2 + 'px';
			var calendar = '<div id="j_jump_bg" style="height:' + body_h + '; display:none"></div><div id="j_jump_box2" class="pt30 pb30 none" style="margin-top:' + j_jump_h + '"><h3 class="pb30 tc pt10"><span class="pl10 pr10 pb10">在线提问</span><a  href="javascript:void(0)" class="pa j_jump_close">X</a></h3><iframe height=500 width="100%" src="/qa/index/teacher/' + $(this).data('str') + '" frameborder=0 id="j_iframe"></iframe></div>';
			$("body").append(calendar);
			$('#j_jump_bg').fadeIn("slow");
			$("#j_jump_box2").css({

				marginTop:- $("#j_jump_box2").outerHeight()/2,
				marginLeft:- $("#j_jump_box2").outerWidth()/2

			}).slideDown(200);
			$('.j_jump_close,#j_jump_bg').on('click', function() {
				$("#j_jump_box2").remove();
				$('#j_jump_bg').remove();
			});
		});
	}

	if ($('.j_ask_talk_s').length > 0) {
		$('body').delegate(".j_ask_talk_s", "click", function() {
			var body_h = ($(document.body).outerHeight(true)) + 'px';
			var j_jump_h = -(577 + 60) / 2 + 'px';
			var calendar = '<div id="j_jump_bg" style="height:' + body_h + '; display:none"></div><div id="j_jump_box2" class="pt30 pb30 none" style="margin-top:' + j_jump_h + '"><h3 class="pb30 tc pt10"><span class="pl10 pr10 pb10">在线提问</span><a  href="javascript:void(0)" class="pa j_jump_close">X</a></h3><iframe height=500 width="100%" src="/fall/qa/id/'+$(this).data('id')+'/teacher/' + $(this).data('str') + '" frameborder=0 id="j_iframe"></iframe></div>';
			$("body").append(calendar);
			$('#j_jump_bg').fadeIn("slow");
			$("#j_jump_box2").css({

				marginTop:- $("#j_jump_box2").outerHeight()/2,
				marginLeft:- $("#j_jump_box2").outerWidth()/2

			}).slideDown(200);
			$('.j_jump_close,#j_jump_bg').on('click', function() {
				$("#j_jump_box2").remove();
				$('#j_jump_bg').remove();
			});
		});
	}

	if ($('.j_dzgh').length > 0) {
		$('body').delegate(".j_dzgh", "click", function() {
			var body_h = ($(document.body).outerHeight(true)) + 'px';
			var calendar = '<div id="j_jump_bg" style="height:' + body_h + '; display:none"></div><div id="j_jump_box2" class="pt30 pb30 none" ><h3 class="pb30 tc pt10"><span class="pl10 pr10 pb10">定制留学规划</span><a  href="javascript:void(0)" class="pa j_jump_close">X</a></h3><iframe height=300 width="100%" src="/index/guihua" frameborder=0></iframe></div>';
			$("body").append(calendar);
			$('#j_jump_bg').fadeIn("slow");
			$("#j_jump_box2").slideDown(200);
			$('.j_jump_close,#j_jump_bg').on('click', function() {
				$("#j_jump_box2").remove();
				$('#j_jump_bg').remove();
			});
		});
	}
	if ($('.j_choose').length > 0) {
		$('body').delegate(".j_choose", "click", function() {
			var j_jump_h = -(577 + 60) / 2 + 'px';
			var body_h = ($(document.body).outerHeight(true)) + 'px';
			var calendar = '<div id="j_jump_bg" style="height:' + body_h + '; display:none"></div><div id="j_jump_box2" class="pt30 pb30 none"  style="margin-top:' + j_jump_h + '"><h3 class="pb30 tc pt10"><span class="pl10 pr10 pb10">测试专业匹配度</span><a  href="javascript:void(0)" class="pa j_jump_close">X</a></h3><iframe height=500 width="100%" src="/matching/index/id/0" frameborder=0></iframe></div>';
			$("body").append(calendar);
			$('#j_jump_bg').fadeIn("slow");
			$("#j_jump_box2").css({

				marginTop:- $("#j_jump_box2").outerHeight()/2,
				marginLeft:- $("#j_jump_box2").outerWidth()/2

			}).slideDown(200);
			$('.j_jump_close,#j_jump_bg').on('click', function() {
				$("#j_jump_box2").remove();
				$('#j_jump_bg').remove();
			});
		});
	}
	if ($('.j_bj_jump_box').length > 0) {
		$('body').delegate(".j_bj_jump_box", "click", function() {
			var j_jump_h = -(577 + 60) / 2 + 'px';
			var body_h = ($(document.body).outerHeight(true)) + 'px';
			var calendar = '<div id="j_jump_bg" style="height:' + body_h + '; display:none"></div><div id="j_jump_box2" class="pt30 pb30 none"  style="margin-top:' + j_jump_h + '"><h3 class="pb30 tc pt10"><span class="pl10 pr10 pb10">背景提升项目在线申请</span><a  href="javascript:void(0)" class="pa j_jump_close">X</a></h3><iframe height=500 width="100%" src="/Advance/index/advance/' + $(this).data('str') + '" frameborder=0></iframe></div>';
			$("body").append(calendar);
			$('#j_jump_bg').fadeIn("slow");
			$("#j_jump_box2").css({

				marginTop:- $("#j_jump_box2").outerHeight()/2,
				marginLeft:- $("#j_jump_box2").outerWidth()/2

			}).slideDown(200);
			$('.j_jump_close,#j_jump_bg').on('click', function() {
				$("#j_jump_box2").remove();
				$('#j_jump_bg').remove();
			});
		});
	}
});

function ask_alert() {
	$keyword = $("#keyword").val();
	alert('dfd')
}

(function($) {
	$.fn.extend({
		tab_fn: function() {
			var $this = $(this),
				$tabU = $this.children('ul'),
				$tabL = $tabU.children('li'),
				$tabD = $this.children('dl');
			for (var i = 0; i < $tabL.length; i++) {
				if ($tabL.eq(i).hasClass('cur')) {
					$tabD.hide();
					$tabD.eq(i).show();
				}
			}
			$tabL.on('click', function() {
				var tabIndex = $(this).index();
				$tabL.removeClass('cur');
				$(this).addClass("cur");
				$tabD.hide();
				$tabD.eq(tabIndex).show();
			});
		},
		hover_fn: function() {
			var $this = $(this),
				$tabU = $this.children('ul'),
				$tabL = $tabU.children('li'),
				$tabD = $this.children('dl');
			for (var i = 0; i < $tabL.length; i++) {
				if ($tabL.eq(i).hasClass('cur')) {
					$tabD.hide();
					$tabD.eq(i).show();
				}
			}
			$tabL.on('hover', function() {
				var tabIndex = $(this).index();
				$tabL.removeClass('cur');
				$(this).addClass("cur");
				$tabD.hide();
				$tabD.eq(tabIndex).show();
			});
		}
	})
})(jQuery);

$(window).scroll(function() {
	var n = $(window).scrollTop();
	n >= 136 ? $("#j_float_header").removeClass('none') : $("#j_float_header").addClass('none');
	var $that = $('#j_header_ul'),
		$header_li = $that.find('li'),
		$header_cur = $that.find('li.cur'),
		$header_dl = $that.find('dl');
	for (var i = 0; i < $header_dl.length; i++) {
		$width2 = $header_dl.eq(i).width() / 2;
	
		if (i == $header_dl.length - 1) {
			$width2 = $header_dl.eq(i).width() / 2 + 80;
		}
		$header_dl.eq(i).css("margin-left", -$width2);
	};
});

$(function(){
	$('#j_dsx_bao').on('click',function(){
		var j_jump_h = -(577 + 60) / 2 + 'px';
	var body_h = ($(document.body).outerHeight(true)) + 'px';
	var calendar = '<div id="j_jump_bg" style="height:' + body_h + '; display:none"></div><div id="j_jump_box2" class="pt30 pb30 none"  style="margin-top:' + j_jump_h + '"><h3 class="pb30 tc pt10"><span class="pl10 pr10 pb10">2016设计大师中国行<br/><font>（只针对外部报名学生填写）</font></span><a  href="javascript:void(0)" class="pa j_jump_close">X</a></h3><iframe height=500 width="100%" src="/index/dsxbm.html" frameborder=0></iframe></div>';
	$("body").append(calendar);
	$('#j_jump_bg').fadeIn("slow");
		$("#j_jump_box2").css({

			marginTop:- $("#j_jump_box2").outerHeight()/2,
			marginLeft:- $("#j_jump_box2").outerWidth()/2

		}).slideDown(200);
	$('.j_jump_close,#j_jump_bg').on('click', function() {
		$("#j_jump_box2").remove();
		$('#j_jump_bg').remove();
	});
	});
});


/*公开课*/
var course={

	url_read:'/Course/read',

	init:function(id){
		var that=this;
		$.get(that.url_read,{id:id},function(msg){
			if(msg.status==1)
			{
				if(msg.data.can==1){
					var url=msg.data.video;
					var title=msg.data.title;
					that.showDialog(title,url);
					return false;
				}
				var url='/Course/bm/id/'+msg.data.id;
				var title='申请开通观看权限';
				if(msg.data.is_dsx==1)
				{
					title='大师公开课';
					url='/Course/dsx/id/'+msg.data.id;
				}
				that.showDialog(title,url);
			}else{
				alert(msg.info);
			}
		});
	},
	showDialog:function(alt,url){

		var body_h = ($(document.body).outerHeight(true)) + 'px';
		var j_jump_h = -(537 + 60) / 2 + 'px';
		var calendar = '<div id="j_jump_bg" style="height:' + body_h + '; display:none"></div><div id="j_jump_box" class="pt30 pb30 none"  style="margin-top:' + j_jump_h + '"><h3 class="pb10"  style="text-align: center;"><span class="pl10 pr10 pb10" id="j_iframe_t">' + alt + '</span><a  href="javascript:void(0)" class="pa j_jump_close">X</a></h3><iframe height=500 width="100%" src="' + url + '" frameborder=0 id="j_iframe"></iframe></div>';
		$("body").append(calendar);
		$('#j_jump_bg').fadeIn("slow");
		$("#j_jump_box").css({

			marginTop:- $("#j_jump_box").outerHeight()/2,
			marginLeft:- $("#j_jump_box").outerWidth()/2

		}).slideDown(200);
		$('.j_jump_close,#j_jump_bg').on('click', function() {
			$("#j_jump_box").remove();
			$('#j_jump_bg').remove();
		});


	}

};

/*播放视频*/
var playVideo={

	url_read:'/Course/playVideo',

	init:function(id){
		var that=this;
		$.get(that.url_read,{id:id},function(msg){
			if(msg.status==1)
			{
				console.log(msg);
				that.showDialog(msg.data.title,msg.data.video);
			}else{
				alert('暂无视频');
			}
		});
	},
	showDialog:function(alt,url){

		var body_h = ($(document.body).outerHeight(true)) + 'px';
		var calendar = '<div id="j_jump_bg" style="height:' + body_h + '; display:none"></div><div id="j_jump_box" class="pt30 pl50 pr50 pb30 none"><h3 class="pb10"  style="text-align: center;"><span class="pl10 pr10 pb10" id="j_iframe_t">' + alt + '</span><a  href="javascript:void(0)" class="pa j_jump_close">X</a></h3><iframe height=426 width="100%" src="' + url + '" frameborder=0 id="j_iframe"></iframe></div>';
		$("body").append(calendar);
		$('#j_jump_bg').fadeIn("slow");
		$("#j_jump_box").css({

			marginTop:- $("#j_jump_box").outerHeight()/2,
			marginLeft:- $("#j_jump_box").outerWidth()/2

		}).slideDown(200);
		$('.j_jump_close,#j_jump_bg').on('click', function() {
			$("#j_jump_box").remove();
			$('#j_jump_bg').remove();
		});


	}

};

/*2017新头部交互
* @author 胖胖吉
*/
var HeaderNav = function () {
	this.searchWrapId = 'J_search_form';
	this.btnOpenSearchId = 'J_open_search';
	this.btnCloseSearchId = 'J_close_search';
	this.btnSubmitSearchId = 'J_search_submit';
	this.navClass = '.J_nav';
	this.init();

};

HeaderNav.prototype = {
	init: function(){
		this.initSearch();
	},
	initSearch:function(){
		var that = this,
			$searchForm = $('#'+that.searchWrapId),
			$closeBtn = $('#'+that.btnCloseSearchId),
			$submitBtn = $('#'+that.btnSubmitSearchId),
			$openBtn = $('#'+that.btnOpenSearchId);

		$openBtn.on('click', function(){

			$searchForm.show();

		});

		$closeBtn.on('click', function(){

			$searchForm.hide();

		});

		$submitBtn.on('click', function(){

			$keyword = $("#J_field_keyword").val();
			if ($keyword != '') {
				$jump_args_v = $('#jump_args2').val();
				window.location.href = "/search.html?keyword=" + $keyword ;
			}

		});

        $("#J_field_keyword").keyup(function(event){
            if(event.keyCode ==13){
                $submitBtn.click();
            }
        });

	},
};

/*数据收集弹出框*/
var Collection = {

	init:function(){

		$('.J_collection').on('click',function(){
			var $this = $(this),
				title = $this.data('title'),
				btntitle = $this.data('btntitle'),
				channel = $this.data('channel');
			var j_jump_h = -(537 + 60) / 2 + 'px';
			var body_h = ($(document.body).outerHeight(true)) + 'px';
			var calendar = '<div id="j_jump_bg" style="height:' + body_h + '; display:none"></div><div id="j_jump_box2" class="pt30 pb30 none"  style="margin-top:' + j_jump_h + '"><h3 class="pb30 tc pt10"><span class="pl10 pr10 pb10">'+title+'</span><a  href="javascript:void(0)" class="pa j_jump_close">X</a></h3><iframe height=500 width="100%" src="/Collection/bm.html?btntitle='+btntitle+'&channel='+channel+'" frameborder=0></iframe></div>';
			$("body").append(calendar);
			$('#j_jump_bg').fadeIn("slow");
			$("#j_jump_box2").css({

				marginTop:- $("#j_jump_box2").outerHeight()/2,
				marginLeft:- $("#j_jump_box2").outerWidth()/2

			}).slideDown(200);
			$('.j_jump_close,#j_jump_bg').on('click', function() {
				$("#j_jump_box2").remove();
				$('#j_jump_bg').remove();
			});

		});

	}

};

/*首页滚动异步加载功能*/
var ScrollBanner = function () {
	this.$obj = $('#J_scroll_banner');
	this.$prev = $('#J_scroll_banner_prev');
	this.$next = $('#J_scroll_banner_next');
	this.$scroll = $('#J_scroll_banner_list');
	this.$nav = $('#J_scroll_banner_nav li');
	this.$load = $('#J_banner_loading');
	this.init();
}

ScrollBanner.prototype = {

	init:function(){

		this.createHtml();
		this.resize();
		this.bindEvent();

	},
	resize:function(){
		var currentW = $(window).width();
			//currentH = (640*$(window).width())/1920;
		if ($(window).height() <= 700) {
			currentH = $(window).height()-$('.header').height();
		} else {
			currentH = (640*$(window).width())/1920;
		}


		this.$obj.css({
			height:currentH
		});

		this.$load.css({
			height:currentH
		});

		this.$scroll.css({
			height:currentH
		});

		this.$scroll.find('li').css({
			width:currentW,
			height:currentH
		});

		this.$scroll.css({
			width:currentW * this.$nav.length
		});


	},
	createHtml:function(){
		var that = this,
			html = '',
			currentW = $(window).width(),
			auto = null;

		$.each(that.$nav,function(i,ele){

			var $this = $(ele),
				url = $this.data('url'),
				link = $this.data('link');
			html += '<li style=" width:'+currentW+'px;background-image: url('+url+');"><a href="'+link+'"></a></li>'

		});

		this.$scroll.html(html);
		this.$scroll.css({
			width:currentW * that.$nav.length
		});


		auto = setTimeout(function(){

			that.$load.fadeOut(function(){
				that.$load.remove();
			});
			clearTimeout(auto);

		},1000);

	},
	bindEvent:function(){

		var that = this;

		that.$nav.on('mouseenter', function(){

			var $this = $(this),
				index = that.$nav.index($this),
				currentClass = 'current',
				url = $this.data('url');
			$this.addClass(currentClass).siblings().removeClass(currentClass);

			that.scrollX(index);

		}).eq(0).mouseenter();

		this.$prev.on('click', function(){

			var index = that.$nav.index($('#J_scroll_banner_nav li.current')),
				nextIndex = index-1;
			if (nextIndex < 0 ) {
				nextIndex = that.$nav.length-1;
			}

			that.$nav.eq(nextIndex).mouseenter();

		});

		this.$next.on('click', function(){

			var index = that.$nav.index($('#J_scroll_banner_nav li.current')),
				nextIndex = index + 1;
			if (nextIndex > that.$nav.length-1 ) {
				nextIndex = 0;
			}
			that.$nav.eq(nextIndex).mouseenter();

		});

		$(window).resize(function(){

			var auto = null;
			clearTimeout(auto);
			auto = setTimeout(function(){

				that.resize();
				//window.location.reload();

			},500);


		});

	},

	scrollX:function(i){
		var  slideW = $(window).width(),
			that = this;
		if(!that.$scroll.is(":animated"))
		{

		}
        that.$scroll.stop().animate({"left":-i*slideW},750,'easeInOutExpo');

	}



};


/**
 * 弹出框
 * popup.init()
 */
var popup={
    obj:null,
	contentContainer:null,
    closeObj:null,
    maskObj:null,
    param:null,
    init:function(param){
        var that=this;
        that.param=param;
        that.insertTpl();
        that.location();
        that.bindEvent();
        return that;
    },
    bindEvent: function () {
        var that = this;
        that.maskObj.on('click', function () {
            that.closePopup();
        });
        that.closeObj.on('click', function () {
            that.closePopup();
        });
    },
    closePopup:function(){
        this.obj.remove();
        this.maskObj.remove();
    },
    location:function(){
        var that=this,
            bodyH=$('body').height(),windowH=$(window).height();
        if(bodyH<windowH)bodyH=windowH;
        that.maskObj.css({
            height:bodyH
        });

        that.obj.css({
            top:$(window).scrollTop() + (windowH - that.obj.outerHeight())/5
        });
        if(that.param.isScroll)
        {
            $(window).scroll(function(){
                that.obj.css({
                    top:(windowH-that.obj.outerHeight())/2+$(window).scrollTop()
                });
            });
        }
    },
    insertTpl:function(){
        var that=this;
        var id='p'+ new Date().getTime(),
            popupHtml = '<div class="popup" id="'+id+'">'+
                '<a class="popup-close" href="javascript:void(0);" id="'+id+'_close"></a>'+
                '<div class="popup-content"></div>'+
                '    </div><div class="popup-mask"></div>';
        $('body').append(popupHtml);
        that.obj=$('#'+id);
        that.contentContainer = that.obj.find('.popup-content');
        that.maskObj=$('.popup-mask');
        that.contentContainer.html(that.param.html);
        that.closeObj = $('#'+id + '_close');
        if(typeof(that.param.callback)=='function')
        {
            that.param.callback(that);
        }
    }
};


$(function(){

	$('body').delegate(".j_lin_video", "click", function() {
		var $this=$(this),
			id=$this.data('id');
		course.init(id);
	});

	new HeaderNav();


	$('#J_gototop').on('click', function(){

		$(window).scrollTop(0);

	});

	$(window).scroll(function(){

		if($(document).scrollTop()<= $('body').height()/2)
		{
			$('#J_gototop').hide();
			return;
		}else{$('#J_gototop').show();}
		//$('#J_gototop').show();

	});

	Collection.init();

	$('.J_art').on('mouseenter', function(){

		var $this = $(this);

		$this.addClass('art-open').siblings('.J_art').removeClass('art-open');

	});


	$('#J_campus a').on('mouseenter', function () {

		var $this = $(this),
			address = $this.data('address'),
			$show = $('#J_campus_show');
        $show.html(address);
        $('#J_campus a').removeClass('current');
        $this.addClass('current');

	}).eq(0).mouseenter();

    $('#J_campus2 a').on('mouseenter', function () {

        var $this = $(this),
            address = $this.data('address'),
            $show = $('#J_campus_show2');
        $show.html(address);
        $('#J_campus2 a').removeClass('current');
        $this.addClass('current');

    }).eq(0).mouseenter();

    var reWriteUrl = function(url){
        if(url){
            var Splits = url.split("/"),siteName=window.location.pathname;
            if(typeof siteName!=="undefined"){
                return "http://m.sfkedu.com";
            }
        }
    };
    if(/Android|webOS|iPhone|iPad|Windows Phone|iPod|BlackBerry|SymbianOS|Nokia|Mobile/i.test(navigator.userAgent)){
        var url=window.location.href;
        var pathname=window.location.pathname;
        if(url.indexOf("?mobile")<0){
            try{
                window.location.href=reWriteUrl(url);
            }catch(e){}
        }
    };

    $('body').delegate('.J_subscribe', 'click', function () {

    	var $this = $(this),
			id = $this.data('id'),
			title = $this.data('title');

        popup.init({
            html:'<form class="subscribe-subject" method="post" id="J_subscribe_subject" action="/subject/subscribe">'+
            '    <h2>订阅话题</h2>'+
            '    <p>每周一篇艺术留学最新干货，免费GET！</p>'+
            '    <div class="subscribe__field clearfix">'+
            '        <label>姓名</label>'+
            '        <input name="name" id="J_subscribe_name"/>'+
            '    </div>'+
            '    <div class="subscribe__field clearfix">'+
            '        <label>电话</label>'+
            '        <input name="mobile" id="J_subscribe_mobile"/>'+
            '    </div>'+
            '    <div class="subscribe__field clearfix">'+
            '        <label>邮箱</label>'+
            '        <input name="email" id="J_subscribe_email"/>'+
            '    </div>'+
            '    <input name="subject_id" type="hidden" value="'+id+'" id="J_subscribe_subjectid"/>'+
            '    <a class="subscribe__submit" href="javascript:void(0);" id="J_subscribe_submit">提交</a>'+
            '</form>'+
            '<div class="subscribe-subject-success" id="J_subscribe_subject_success">'+
            '    <div>您已订阅成功！</div>'+
            '    <a class="subscribe__submit" href="javascript:void(0);" id="J_subscribe_ok">确定</a>'+
            '</div>',
            callback:function (obj) {
				var $form = $('#J_subscribe_subject'),
				$submit = $('#J_subscribe_submit'),
				$fieldName = $('#J_subscribe_name'),
				$fieldMobile = $('#J_subscribe_mobile'),
				$fieldEmail = $('#J_subscribe_email'),
				$fieldId = $('#J_subscribe_subjectid'),
				$success = $('#J_subscribe_subject_success'),
				$ok = $('#J_subscribe_ok'),
				errorClass = 'subscribe__error';

                $form.find('input').on('blur', function () {

                	var $this = $(this),
						v = $this.val();

                	if (v != '') {
                        $this.removeClass(errorClass);
					}

				});

                $ok.on('click', function () {
                    obj.closePopup();
				});

                $submit.on('click', function () {

                    if ($fieldName.val() == '') {
                        $fieldName.addClass(errorClass);
                    } else {
                        $fieldName.removeClass(errorClass);
                    }

                    if ($fieldMobile.val() == '') {
                        $fieldMobile.addClass(errorClass);
                    } else {
                        var patt1 = new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$");
                        if (patt1.test($fieldMobile.val())) {
                            $fieldMobile.removeClass(errorClass);
                        } else {
                            $fieldMobile.addClass(errorClass);
                        }
                    }

                    if ($fieldEmail.val() == '') {
                        $fieldEmail.addClass(errorClass);
                    } else {
                        var emailExp = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
                        if (emailExp.test($fieldEmail.val())) {
                            $fieldEmail.removeClass(errorClass);
                        } else {
                            $fieldEmail.addClass(errorClass);
                        }
                    }

                    if ($form.find('.' + errorClass).length > 0) {
                        return false;
                    }

                    $.post($form.attr('action'), $form.serialize(), function (res) {

                    	if (res.status == 1) {

                            $form.hide();
                            $success.show();

						} else {
                    		alert(res.info);
						}

					});

				});



			}
        });

	});

	$('#J_switch_bottom').on('click', function () {

		var $this = $(this),
			$bottomWrap = $('#J_bottom_wrap'),
			openClass = 'switch-bottom-open';

		
			$this.toggleClass(openClass);
		
		if ($this.hasClass(openClass)) {
			$bottomWrap.slideDown();	
			$('body,html').animate({  
				scrollTop: $('body').height() 
			}, 1000);  
		} else {
			$bottomWrap.slideUp();
		}	

	});


});