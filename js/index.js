/*
* 首页
*/
$(function(){

    $('.J_selectsfk').on('mouseenter', function(){

        var $this = $(this);
        $this.addClass('selectsfk-open');

    }).on('mouseleave', function(){

        var $this = $(this);
        $this.removeClass('selectsfk-open');

    }).on('click', function(){
        var $this = $(this);
        window.location.href = $this.data('url');

    });

    $('.J_art').on('mouseenter', function(){

        var $this = $(this);

        //$this.addClass('art-open');
        $this.addClass('art-open').siblings('.J_art').removeClass('art-open');

    });


    // 轮播代码
    var sb = new ScrollBanner();
    var i = 0;
    var len = $('.scroll-banner_pics li').length
    //自动滚动
    var timer;
    lunbo();
    function lunbo(){
        timer=setInterval(function(){
            if(i>=(len-1)){
                i=0
            }else{
                ++i
            }
            console.log(i);
            sb.scrollX(i)
            //当前点加入currnt
            $('#J_scroll_banner_nav li').eq(i).addClass('current').siblings().removeClass('current')
        },5000)
    }
    $('#J_scroll_banner_nav li').on('mouseover',function(){
        i = $(this).index();
        sb.scrollX(i)
        clearInterval(timer);
    }).mouseleave(function(){
        lunbo();
    })
    /*艺术导师*/
    var $teacherTypeTab = $('.J_type_tab a'),
        $teacherData = $('#J_teacher_data_container'),
        $teacherDataNav1 = $('#J_teacher_data_nav_1'),
        $teacherDataNav2 = $('#J_teacher_data_nav_2');

    function insertTeacher(data,type) {
        var listHtml = '';
        $.each(data,function(i,ele){

            var url = 'javascript:void(0);';
            if (ele.cat == '艺术导师') {
                url = '/teacher/'+ele.id+'.html';
            }

            listHtml += '<li>'+
                '                <div class="teachers_pic">'+
                '                    <a href="'+url+'"><img class="fl radius" alt="'+ele.name+'" src="'+ele.avatar+'"/>'+
                '                    <div class="teachers_desc">'+ele.achievement +
                '                    </div>'+
                '                </a></div>'+
                '                <div class="teachers_content">'+
                '                    <strong><a href="'+url+'">'+ele.name +'</a></strong>'+
                '                    <div>'+ele.graduate_school+'</div>'+
                '                    <div>'+ele.professional+'</div>'+
                '                </div>'+
                '                <div class="teachers_action">'+
                '                    <a href="javascript:void(0);" class="btn-lookvideo play_but" data-url="'+ele.video_link+'" alt=" '+ele.name + '  ' + ele.professional+'">观看视频</a>'+
                '                    <a href="javascript:void(0);" class="btn-wen j_ask_talk" data-str="'+ele.name+'">向TA提问</a>'+
                '                </div>'+
                '            </li>';

        });
        $('#J_teacher_data_'+type).html(listHtml);
    }

    $teacherTypeTab.on('click', function(){

        var $this = $(this),
            type = $this.data('type');
        $.get('/Index/getTeachers', {
            type:type,
            p:1
        }, function(res){

            $this.addClass('current').siblings('a').removeClass('current');

            var navHtml = '';

            for(var i =0 ; i < res.page.totalPages; i ++) {
                navHtml += '<div></div>';
            }


            insertTeacher(res.list,type);


            $('#J_teacher_data_nav_'+type).html(navHtml).find('div:eq(0)').addClass('current');

        });

    }).eq(0).click();

    $teacherTypeTab.eq(1).click();

    $teacherData.delegate(".j_ask_talk", "click", function() {
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

    $teacherData.delegate(".play_but", "click", function() {
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

    $teacherDataNav1.delegate('div','click', function(){

        var $this = $(this),
            page = $teacherDataNav1.find('div').index($this);


        $.get('/Index/getTeachers', {
            type:1,
            p:page+1
        }, function(res){

            $this.addClass('current').siblings('div').removeClass('current');

            insertTeacher(res.list,1);

        });

    });

    $teacherDataNav2.delegate('div','click', function(){

        var $this = $(this),
            page = $teacherDataNav2.find('div').index($this);


        $.get('/Index/getTeachers', {
            type:2,
            p:page+1
        }, function(res){

            $this.addClass('current').siblings('div').removeClass('current');

            insertTeacher(res.list,2);

        });

    });

    var spanH = $('#J_news_mid strong').height();
    $('#J_news_mid strong').css({
        paddingTop:(110 - spanH)/2
    });

    var $offerTabs = $('#J_offer_tab li'),
        $offerC = $('.J_offer_tab_c');

    $offerTabs.on('mouseenter', function(){
        var $this = $(this),
            currentClass = 'current',
            index = $offerTabs.index($this);
        $this.addClass(currentClass).siblings('li').removeClass(currentClass);
        $offerC.hide();
        $offerC.eq(index).show();

    }).eq(0).mouseenter();

    $('.J_case2018').on('mouseenter', function () {

        var $this = $(this),
            currentClass = 'successful-current';
        $('.J_case2018').removeClass(currentClass);
        $this.addClass(currentClass);

    });

    $('.J_case2018').on('mouseleave', function () {

        var $this = $(this),
            currentClass = 'successful-current';
        $this.removeClass(currentClass);

    });







});