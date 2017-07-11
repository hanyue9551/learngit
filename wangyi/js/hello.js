/**
 * Created by hxsd on 2017/07/04.
 */
$(function(){
    $('#hello').parent().siblings().css('display','none');
    var tar=$('#hello a')
    var aw=tar.width(),
        l=($(window).width()-aw)/2;
    tar.css('left',l);
})
