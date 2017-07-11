/**
 * Created by hxsd on 2017/06/28.
 */

var musicController={
    server: "http://musicapi.duapp.com/api.php",
    play:function(music){
        var $state=$('#music_state');
        $state.html("正在加载中...");
        $.ajax({
            type:"get",
            url:this.server+"?type=url&id="+music.id,
            async:true,
            success:function(data){
                $state.html("");
	            //console.log(data);
                var audio=$('#audio').get(0);//将jq转成js
                audio.src=data.data[0].url;
                audio.play();
                $('#btn').addClass('play');
                $('#btn').click(function(){
                    if($(this).hasClass('play')){
                        $(this).removeClass('play');
                        $('#start_stick').css({'transform':'rotateZ(-20deg)'});
                        $('#musicPlay .music_main').css({ "animation-play-state":"paused"});
                        audio.pause();
                    }else{
                        $(this).addClass('play');
                        $('#start_stick').css({'transform':'rotateZ(5deg)'});
                        $('#musicPlay .music_main').css({'animation':'xuanzhuan 10s linear infinite'});
                        audio.play();
                    }
                })
            }
        });
        var $name=$('#music_name'),
            $pic=$('#music_pic'),
	        $singer=$('#music_singer');
        $name.html(music.name);
        $pic.attr("src",music.al.picUrl);
	    $singer.html(music.ar[0].name);
	    $('#special .special_right h3').html(music.name);
	    $('#special .special_right .special_name').html(music.ar[0].name);
    }
};

