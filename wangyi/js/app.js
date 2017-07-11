/**
 * Created by hxsd on 2017/06/27.
 */
function getUrlParams(){
    /*定义一个空数组*/
    var params={};
    var url=window.location.href;
    var arr=url.split("?");
    if(arr.length==2){
        var p=arr[1];
    }else{
        //console.log(params)
        return params;
    }
    // p="a=1&b=2&c=3"
    var parr=p.split("&"); // ["a=1","b=2","c=3"]
    for(var i=0;i<parr.length;i++){
        var kv=parr[i].split("=");
        params[kv[0]]=kv[1];
    }
    //console.log(params);
    return params;
}
function getM(){
    var url=window.location.href;
    var arr=url.split("#");
    //return,return false 要在一个函数里才能用
    if (arr.length==2){
        var p=arr[1];
        p= p.split("?");
        p=p[0];
    }
    return p;
};
function router(m,container){
    container=container||$('#share');
    $.ajax({
        url:"view/"+m+".html",
        success:function(data){
            container.html(data);
        }
    });
    getJS(m);
};
function getJS(m){
    $.ajax({
        url:"js/"+m+".js"
    });
};
//定义的函数不能放在延迟加载函数中,如果放在延迟加载函数中,别的页面调用router的时候会编译不到router函数,所以在别的页面中会报错,显示router未定义
$(function(){
    var m=getM();
    router("index");
});
$(function(){
    // 首次加载 -- 打开欢迎页, 2次以上打开的是tab模块
    if(!localStorage.count){
        localStorage.count=0;
    }
    localStorage.count++;
   // console.log(localStorage.count);
    if(localStorage.count==1){
        router("hello")
    }else{
        router("tabar");
        router("audio",$("#public"))
    }
})