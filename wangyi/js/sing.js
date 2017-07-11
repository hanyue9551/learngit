/**
 * Created by hxsd on 2017/06/27.
 */
$(function(){
    getPlayList(18,function(data){
        var template=$('#tabItemList2').html();
        //console.log($(template))
        for(var i=0;i<data.length;i++){
            var $template=$(template);
            $template.find('a').attr("href", "#details?id=" + data[i].id);
            $template.find('.pinglun').html(data[i].playCount);
            $template.find('img').attr("src",data[i].coverImgUrl);
            $template.find('p').html(data[i].name+"万");
            $template.appendTo($('#conlist2'));
        }
    });
});

