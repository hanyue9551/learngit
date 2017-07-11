/**
 * Created by Han on 2017/5/1.
 */
// JavaScript Document
//搜索框区
var proposals = ['ss', 'hei', 'c', 'c++','c#','java','javascript','python','没了','真没了','随便吧'];
 $('#search-form').autocomplete({
	 hints: proposals,
	 width: 480,
	 height: 15
 });
$('.autocomplete-container input').val("卡通手机壳");
$('.autocomplete-container input').focus(function(){
	$(this).val("");
});
$('.autocomplete-container input').focusout(function(){
	$(this).val("卡通手机壳");
});
//全部商品展示
$('.wrap li').hover(function(){
	$(this).children('.part').show();//进入当前下面的子节点part出现
},function(){
	$(this).children('.part').hide();//移出隐藏
});
//商品放大镜展示
$('#box1').mousemove(function(ev){
	$('#zoom,#box2').show();
	//鼠标坐标减去盒子偏移量减去放大镜盒子的一半(光标在放大镜盒子中间)
	var l=ev.pageX-$(this).offset().left-$('#zoom').width()/2;
	var t=ev.pageY-$(this).offset().top-$('#zoom').height()/2;
	//最大值等于盒子宽高减去放大镜盒子宽高,#box1有个左右15px的padding值所以要加30;
	var max_l= $('#box1').width()-$('#zoom').width()+30;
	var max_t=$('#box1').height()-$('#zoom').height();
	if(l<0){
		l=0;
	}
	if(l>max_l){
		l=max_l;
	}
	if(t<0){
		t=0;
	}
	if(t>max_t){
		t=max_t;
	}
	$('#zoom').show().css({"top":t,"left":l});
	//被放大的照片定位与投影出的定位方向相反;图片与被放大图片的比例为原图比现图
	var rate=$('#box2').width()/$('#zoom').width();
	$('#box2 img').css({"top":-t*rate,"left":-l*rate});

})
$('#box1').mouseleave(function(){
	$('#zoom,#box2').hide();
});
//自运行,防止变量污染;
(function(){
	//下方左右箭头区
	var aLi=$('#pad_list ul li');
	var UL=document.getElementById('pad_list');
	var oUl=UL.getElementsByTagName('ul')[0];
	var allLi=oUl.getElementsByTagName('li');
	$('#youjiantou').click(function(){
		aLi.css({'left':'-320px'})
		$('#zuojiantou').click(function(){//当点击到右箭头时左箭头才可以被点击
			aLi.css('left','0px');
		});
	});
//左右箭头中图片区
	var Imgs=document.getElementById('box1').getElementsByTagName('img');
	var Imgs2=document.getElementById('box2').getElementsByTagName('img');
	aLi.mouseenter(function(){//鼠标事件
		$(this).css('border','1px solid #e53e41').siblings().css('border','1px solid transparent');
		for(var i=0;i<allLi.length;i++){//循环小图列表
			//自定义属性用jQuery的prop读不到,attr可以读的到,原生的getAttribute可以读的到;
			var dataimg=this.getAttribute('data-name');//记录当前的自定义属性值
			for(var k=0;k<Imgs.length;k++){//循环大图列表
				Imgs[k].style.display="none";//隐藏所有
				if(Imgs[k].getAttribute('data-name')==dataimg){//如果循环过程中有一个属性名等于上方记录过的当前自定义属性值
					Imgs[k].style.display="block";//就让当前相同属性名的标签显示
				};
			};
			for(var j=0;j<Imgs2.length;j++){//循环放大列表
				Imgs2[j].style.display="none";//隐藏所有
				if(Imgs2[j].getAttribute('data-name')==dataimg){//如果循环过程中有一个属性名等于上方记录过的当前自定义属性值
					Imgs2[j].style.display="block";//就让当前相同属性名的标签显示
				};
			};
		};
	});
})(jQuery);
//.bigw_right配送区
var yunfei=$('.bigw .bigw_right').find('.yunfei_line');
yunfei.hover(function(){
	yunfei.children('.hide').show();
	yunfei.css({'background':'#fff','border':'1px solid #ccc','height':'50','overflow':'visible'});
},function(){
	yunfei.children('.hide').hide();
	yunfei.css({'background':'transparent','border':'1px solid transparent','height':'25','overflow':'hidden'});
});
//.bigw_right次日达区
(function(){
	var oDate=new Date(),
		month=oDate.getMonth()+1,
		day=oDate.getDate();
	$('.su_support_peisong .dd .day').html('明天('+(month<10?("0"+month):month)+'月'+(day<10?("0"+day):day)+'日'+')');
})(jQuery);
//.bigw_right框选区
var se_item=$('.su_select .item');
se_item.click(function(){
	$(this).children('a').not($('.disabled a')).css({'border':'1px solid #e3393c','color':'#666'}).parent().siblings().children('a').not($('.disabled a')).css({'border':'1px solid #989393','color':'#989393'});
});
//.bigw_right购物车区
var n=1;
$('.wrap_input .in_jia').click(function(){
	n++;
	$('.wrap_input .buy_num').val(n);
	$('.wrap_input .in_jian').css('cursor','pointer');
})
$('.wrap_input .in_jian').click(function(){
	var m=$('.wrap_input .buy_num').val();
	m--;
	n=1;
	if(m<=0){
		m=1;
		$('.wrap_input .in_jian').css('cursor','not-allowed');
	};
	$('.wrap_input .buy_num').val(m);
})
//人气配件切换区
var aTab=$('.star_product .tab_main ul li');
aTab.click(function(){
	$(this).addClass('default').siblings().removeClass('default');
	var i=$(this).index();
	switch(i){//点到当前索引当前显示其他兄弟隐藏
		case 0:$('#zero_li').show();
			$('#zero_li').siblings().hide();
			break;
		case 1:$('#one_li').show();
			$('#one_li').siblings().hide();
			break;
		case 2:$('#two_li').show();
			$('#two_li').siblings().hide();
			break;
		case 3:$('#three_li').show();
			$('#three_li').siblings().hide();
			break;
		case 4:$('#four_li').show();
			$('#four_li').siblings().hide();
			break;
		case 5:$('#five_li').show();
			$('#five_li').siblings().hide();
			break;
		case 6:$('#six_li').show();
			$('#six_li').siblings().hide();
			break;
	};
});
//人气配件价格区
$('.p_price input').click(function(){
	var price=$(this).parent().children('strong').html().substring(1),//被选中时当前的价格
		sum_price=$('.infos_price strong').html().substring(1);//结算总价
	if($(this).prop('checked')==true){//当配件被选中时
		sum_price=((price-0)+(sum_price-0)).toFixed(2);//总价保留小数点后两位;
		$('.infos_price strong').html('￥'+sum_price);
		$('.infos_num em').html($('.infos_num em').html()-0+1);//已选中几个配件
	}else{//取消时
		sum_price=(sum_price-price).toFixed(2);
		$('.infos_price strong').html('￥'+sum_price);
		$('.infos_num em').html($('.infos_num em').html()-1);//减少配件
	};
});
//help返回顶部区
$('.help .he-right .he7').click(function(){
	$(window).scrollTop(0);
})







