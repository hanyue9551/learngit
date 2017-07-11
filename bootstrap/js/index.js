/**
 * Created by Han on 2017/6/18.
 */
$(function(){
	/*features区*/
	$('.pagination li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var i=$(this).index();
		$('.fe_child').eq(i).children('.thumbnail').addClass('activeF').parent().siblings().children('.thumbnail').removeClass('activeF');
		if(i==0){//点击all显示所有项
			for(var k=0;k<$('.fe_child').length;k++){
				$('.fe_child').eq(k).css('display','block');
			}
			return false;
		}
		/*点到哪一项让对应项出现*/
		$('.fe_child').eq(i).css('display','block').siblings().css('display','none');
	})
	/*products区*/
	/*不能在panel-heading上绑定点击事件,有可能还没有点到a当前就被绑上了动态class而当前却没有显示内容*/
	$('.toggle_list a').click(function(){
		if($(this).parent().parent().hasClass('activeH')&&$(this).children('span').hasClass('glyphicon-plus')){
            $(this).parent().parent().removeClass('activeH');
            $(this).children('span').removeClass('glyphicon-plus').addClass('glyphicon-minus');
            return;
        }
        $(this).parent().parent().addClass('activeH').parent().siblings().children('.panel-heading').removeClass('activeH');
        $(this).children('span').removeClass('glyphicon-minus').addClass('glyphicon-plus').parent().parent().parent().parent().siblings().find('span').removeClass('glyphicon-plus').addClass('glyphicon-minus');
	});
	/*返回顶部*/
	$('#goback').click(function(){
		$(window).scrollTop(0);
	});
	/*窗口变化导航条显示情况*/
	$(window).resize(function(){
		if($(window).width()<=992&&$(window).width()>=768){
			$('.nav_list').find('ul').removeClass('navbar-right').addClass('navbar-left');
		}else{
			$('.nav_list').find('ul').removeClass('navbar-left').addClass('navbar-right');

		}
	})

});