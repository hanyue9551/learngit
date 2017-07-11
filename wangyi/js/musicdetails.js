/**
 * Created by Han on 2017/7/2.
 */
$(function() {
    $('#musicPlay .play_name').html($('#music_name').html());
    $('#musicPlay .play_singer').html($('#music_singer').html());
    $('#goBack').click(function(){
        router('details');
    });
    var pic=$('#music_pic').attr('src');
    $('#musicPlay .music_main img').attr('src',pic);
    $('#musicPlay').parent().siblings().css({'background-color':'rgba(255,255,255,0.1)','color':'white','border-top':'1px solid white'}).find('#music_singer').css({'color':'white'});
});

