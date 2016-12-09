/**
 * Created by Administrator on 2016/11/24.
 */
$(function () {
    function showCloseImg(index){
        console.log($('.t-ptw_list').eq(index))
        $('.t-ptw_list li').eq(index).addClass('t-ptw_opacity');
        $('.t-ptw_list li').eq(index).find('img').before("<i></i>")
    };

    $('#user_url').on("touchstart",function(){
        addUrl();
    });

    
    function  addUrl() {
    //获取加密后信息
    $('#user_url').localResizeIMG({
        width: 400,
        quality: 1,
        success: function (result) {
            var submitData={
                file:result.clearBase64,
            };
            img=addHttpUrl(submitData);
            console.log(addHttpUrl(submitData))
            console.log(img)
            
            //上传文件
            $("<li class='fl'><img src="+img+"><span><img id='del' src='./img/del.png'></span></li>").insertBefore('.t-ptw_list li:last-child');
            console.log(img)
  console.log($('.t-ptw_list #del').attr("id"))
            setUrl();
        }
    });
    }
    function setUrl() {
        var imgList = document.querySelectorAll(".fl>img");
        var list=new Array();
        for(var i=0;i<imgList.length;i++){
            var str = imgList[i].src;
             list.push(str);
        }
//      发生ajax上传图片
//      getHttpPost(true,"teacher/set_teacher",{tracherPhotoWallImage:list})

    }
    
//  var time=0;
//  //选中删除
//  //长按
//  
//  $('.t-ptw_list').on('touchstart','li',function(e){
//
//        e.stopPropagation();
//      var index=$(".t-ptw_list").find("li").index($(this));
//      time = setTimeout(function(){
//          showCloseImg(index);
//      }, 500);//长按响应时间
//  });
//  //手指离开
//  $(".t-ptw_list").on('touchend', 'li', function(e){
//      e.stopPropagation();
//      clearTimeout(time);
//  });
    //删除
//  $('.t-ptw_list').on('touchstart',function(){
//      var imgList = document.querySelectorAll(".t-ptw_opacity");
//      for(var i=0;i<imgList.length;i++){
//          imgList[i].parentNode.removeChild(imgList[i]);
//      }
//      setUrl();
//  })
     $('.t-ptw_list').on('touchend',"#del",function(){
        var imgList = document.querySelectorAll(".t-ptw_opacity");
        for(var i=0;i<imgList.length;i++){
            imgList[i].parentNode.removeChild(imgList[i]);
        }
        setUrl();
        var $this=$(this)
        setTimeout(function(){ $this.parent().parent().hide()},50)
    })
    
});