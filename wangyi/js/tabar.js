/**
 * Created by hxsd on 2017/06/27.
 */
router("popular",$("#tabcontainer"));
var server = "http://musicapi.duapp.com/api.php";
/*点击跳转页面*/
$('#share .header li').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    var idName=$(this).attr("data-id");
    router(idName,$("#tabcontainer"));
});
/*跳转部分结束*/
/*url: server+"?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit="+limit,*/
//加载函数 limit:请求数量 ;callback:请求回调
function getPlayList(limit,callback){
    if(isCache()){
        //console.log("访问缓存");
        callback(JSON.parse(localStorage.list));
        //console.log(JSON.parse(localStorage.list))
    }else{
        $.ajax({
            type:"get",
            url: server+"?type=topPlayList&cat=%E5%85%A8%E9%83%A8&offset=0&limit="+limit,
            async:true,
            success:function(data){
                //console.log("访问网络");
                localStorage.cacheTime=new Date().getTime();
                //将获取的json数据转换成字符串
                var list1=JSON.stringify(data.playlists);
                //缓存中保存数据
                localStorage.list=list1;
                //console.log(list1)
                callback(data.playlists);
            }
        })
    };
    function isCache(){
        if(localStorage.list){
            return true;
        };
        if(new Date().getTime()-localStorage.cacheTime>=5000){
            return false;
        }else{
            return false;
        }
    }
};
$(function(){
    getPlayList(18,function(data){
        //console.log(data[0].id);
        var template=$('#tabItemList').html();
        //console.log($(template))
        for(var i=0;i<data.length;i++) {
            var $template = $(template);
            $template.find('a').attr("href", "#details?id=" + data[i].id);
            $template.find('.pinglun').html(data[i].playCount);
            $template.find('img').attr("src", data[i].coverImgUrl);
            $template.find('p').html(data[i].name);
            $template.appendTo($('#conlist'));
        }
        if($('#conlist .item').length>=6){
            $('#conlist .item:gt(5)').css('display','none');
         };
    });
})


