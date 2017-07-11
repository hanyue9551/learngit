/**
 * Created by hxsd on 2017/06/27.
 */
getPlayList(6,function(data){
	console.log(data[0])
	//console.log(data[0].id);
	var template=$('#tabItemList4').html();
	//console.log($(template))
	for(var i=0;i<data.length;i++) {
		var $template = $(template);
		$template.find('a').attr("href", "#details?id=" + data[i].id);
		$template.find('.name').html(data[i].creator.nickname);
		$template.find('img').attr("src", data[i].coverImgUrl);
		$template.find('p').html(data[i].description);
		$template.appendTo($('#conlist4'));
	}
	if($('#conlist4 .item').length>=6){
		$('#conlist4 .item:gt(5)').css('display','none');
	};
});