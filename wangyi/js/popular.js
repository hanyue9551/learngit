/**
 * Created by hxsd on 2017/06/27.
 */
/*轮播图*/
$(function(){
	var len=$('.section1 .banner_pic img');
	//console.log(len.length);
	//几张轮播图就添加几个li
	for(var i=0;i<len.length;i++){
		$('<li></li>').appendTo($('.section1 .banner_num'));
	}
	//默认第一个li有类名
	$('.section1 .banner_num li:eq(0)').addClass('active');
	$('.section1 .banner_pic').height($('.section1 .banner_pic img:eq(0)').height());
	var oUl=$('.section1 .banner_num'),
		w=oUl.width(),
		l=$(window).width()/2-w/2;
	oUl.css('left',l);
	$(window).resize(function(){
		var oUl=$('.section1 .banner_num'),
			w=oUl.width(),
			l=$(window).width()/2-w/2;
		oUl.css('left',l);
	});
	//console.log($(window).width());
	var n=0;
	var picImg=$('.section1 .banner_pic img'),
		liList=$('.section1 .banner_num li');
	function timePlay(sec){//定时器函数,sec:时间
		clearInterval(picImg.timer);
		picImg.timer=setInterval(function(){
			picImg.eq(n).css('display','block').siblings().css('display','none');
			liList.eq(n).addClass('active').siblings().removeClass('active');
			liList.click(function(){//点击小按钮,对应轮播图出现
				var _this=$(this).index();
				picImg.eq(_this).css('display','block').siblings().css('display','none');
				liList.eq(_this).addClass('active').siblings().removeClass('active');
				n=_this;
			});
			n++;
			if(n>=len.length){
				n=0;
			};
		},sec);
	};
	timePlay(1000);
	picImg.mouseenter(function(){
		clearInterval(picImg.timer);
	});
	picImg.mouseleave(function(){
		timePlay(1000);
	});
	//首页推荐歌单跳转到歌单
    $('.section1 .tuijian_playlist span').click(function(){
	    //router('tabar');
	    router('sing',$("#tabcontainer"));
		$('.header li').eq(1).addClass('active').siblings().removeClass('active');
    })

})

