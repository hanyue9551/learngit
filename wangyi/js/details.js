/**
 * Created by hxsd on 2017/06/28.
 */
var params=getUrlParams();
//console.log(params);
function getPlayList(idname,callback){
    $.ajax({
        type:"get",
        url:"https://api.imjad.cn/cloudmusic?type=playlist&id="+idname,
        async:true,
        success:function(data){
            callback(data.playlist);
        }
    });
};
/*判断是否收藏函数*/
function isCollected(id){
    if(localStorage.collection){
        var list=JSON.parse(localStorage.collection);
        if(!list){//如果list不存在返回false
            return false;
        }else{
            if(list[id]&&list[id].cellected){//如果list存在且被收藏
                return true;
            }else{
                return false;
            }
        }
    }else{
        return false;
    };
};
getPlayList(params.id,function(data){
    var special=$('#special');
    special.parent().siblings().css({'color':'black','background-color':'white'}).find('#music_singer').css({'color':'black'});
    special.find('.special_left img').attr('src',data.tracks[0].al.picUrl);
	special.find('.blur').attr('src',data.tracks[0].al.picUrl);
	special.find('.special_right h3').html(data.tracks[0].name);
	special.find('.special_right .special_name').html(data.tracks[0].ar[0].name);
    var musicContent=$('#ItemList').html();
    //console.log($(musicContent));
    for(var i=0;i<data.tracks.length;i++) {
        var li=data.tracks[i];
        var $music=$(musicContent);
        $music.find('.singerName').html(li.name);
        $music.find('.singerDetail').html(li.ar[0].name);
        $music.appendTo($('#musicList'));
        //console.log($('#musicList'))
        $music.data("music",li).click(function(){
            //console.log($(this).data("music"));
            musicController.play($(this).data("music"));
            router('musicdetails');
            localStorage.music=li;
            localStorage.tracks=JSON.stringify(data.tracks);
        });
        if(isCollected(li.id)){//传入li.id判断是否收藏过
            $music.find("span").removeClass().addClass('collected');
        }else{
            $music.find("span").removeClass().addClass('collection');
        };
        $music.find("span").data("music",li).click(function(e){
            e.stopPropagation();
            var id=$(this).data("music").id;
            var mus=$(this).data("music");
            if(localStorage.collection){
                var list=localStorage.collection;
                list=JSON.parse(list);
                if(list[id]&&list[id].cellected){
                    $(this).removeClass().addClass("collection");
                    list[id].cellected=false;
                }else{
                    list[id]=mus;
                    list[id].cellected=true;
                    $(this).removeClass().addClass("collected");
                }
            }else{
                var list={};
                list[id]=mus;
                list[id].cellected=true;
                /*list[id]={
                 "name":mus.name,
                 "artist":mus.ar[0].name,
                 "cellected":true
                 };*/
                $(this).removeClass().addClass("yes");
            }
            localStorage.collection=JSON.stringify(list);
        });
    }
    var $li=$('#musicList .musicItem');
    $li.clone().appendTo($('#btnItem'));
    /*bug分界线--------------------------------------------------------------------------------------------------*/
    var bol=true;
    $('#musicList_btn').click(function(){
        //判断$('#btnItem').html('')就可以出现隐藏i,判断==""就只能出现不能隐藏
        if($('#btnItem').html()==""){
            $('#btnItem').hide();
        }
        if(bol){
            $('#btnItem').show();
            bol=!bol;
            console.log(bol)
        }else if(!bol){
            $('#btnItem').hide();
            bol=!bol;
            console.log(bol)
        }
    })
    /*bug分界线结束---------------------------------------------------------------------------------------------*/
});
$('#backup').click(function(){
    router('tabar');
});


