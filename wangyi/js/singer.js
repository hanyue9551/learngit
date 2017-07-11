/**
 * Created by hxsd on 2017/06/27.
 */
/*轮播图*/
$(function(){
	var len=$('.section4 .banner_pic img');
	//console.log(len.length);
	//几张轮播图就添加几个li
	for(var i=0;i<len.length;i++){
		$('<li></li>').appendTo($('.section4 .banner_num'));
	}
	//默认第一个li有类名
	$('.section4 .banner_num li:eq(0)').addClass('active');
	$('.section4 .banner_pic').height($('.section4 .banner_pic img:eq(0)').height());
	var oUl=$('.section4 .banner_num'),
		w=oUl.width(),
		l=$(window).width()/2-w/2;
	oUl.css('left',l);
	$(window).resize(function(){
		var oUl=$('.section4 .banner_num'),
			w=oUl.width(),
			l=$(window).width()/2-w/2;
		oUl.css('left',l);
	});
	//console.log($(window).width());
	var n=0;
	var picImg=$('.section4 .banner_pic img'),
		liList=$('.section4 .banner_num li');
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
	getPlayList(18,function(data){
		console.log(data[0])
		//console.log(data[0].id);
		var template=$('#tabItemList3').html();
		//console.log($(template))
		for(var i=0;i<data.length;i++) {
			var $template = $(template);
			$template.find('a').attr("href", "#details?id=" + data[i].id);
			$template.find('.name').html(data[i].creator.nickname);
			$template.find('img').attr("src", data[i].coverImgUrl);
			$template.find('p').html(data[i].name);
			$template.appendTo($('#conlist3'));
		}
		if($('#conlist3 .item').length>=6){
			$('#conlist3 .item:gt(5)').css('display','none');
		};
	});
})


