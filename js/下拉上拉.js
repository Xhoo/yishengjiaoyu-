$(function() {
	var preUrl = window.location.href;
	var splitUrl = getUrl(preUrl);
//	console.log(splitUrl)
	var id = splitUrl.id;
	var ddd=splitUrl.type;

	$(".header-right").on("touchstart",function(){
		$(".tanchu").css("display","block")
		$(".zhezhao").css("display","block")
	});
	$(".zhezhao").on("touchstart",function(){
		$(".zhezhao").css("display","none")
		$(".tanchu").css("display","none");
		
	});
	$(".header-left").on("touchend",function() {
		if (ddd==0){
			var urls = "yishengjiaoyu/html/qzindex.html";
			getPath(urls);
		} else if (ddd==1){
			window.history.go(-1); 
		}
	});
	$(".tanchu p:nth-of-type(1)").on("touchend",function(){
		var urls="yishengjiaoyu/wodetiwen.html?otype=0&type=1&timestamp="+timestamp;
	getPath(urls);
	})
	$(".tanchu p:nth-of-type(2)").on("touchend",function(){
		var urls="yishengjiaoyu/wodetiwen.html?otype=1&type=1&timestamp="+timestamp;
	getPath(urls);
	});
	$(".woyaotiwen").on("touchend",function(){
		//var urls=需要跳转到的页面
		var urls="yishengjiaoyu/woyaotiwen.html?timestamp="+timestamp+"&type=1";
		getPath(urls)
	})	
//	上拉下拉	                  上拉下拉	上拉下拉	                  上拉下拉	上拉下拉	                  上拉下拉
//	上拉下拉	                  上拉下拉	上拉下拉	                  上拉下拉	上拉下拉	                  上拉下拉
//	上拉下拉	                  上拉下拉	上拉下拉	                  上拉下拉	上拉下拉	                  上拉下拉
	$(function(){
    // 页数
    var page = 0;
    // 每页展示10个
    var size = 10;

    // dropload
    $('.content-wenda').dropload({
    //获取容器发生dropload	
    	
        scrollArea : window,
        domUp : {
            domClass   : 'dropload-up',
            domRefresh : '<div class="dropload-refresh">↓下拉刷新-自定义内容</div>',
            domUpdate  : '<div class="dropload-update">↑释放更新-自定义内容</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>'
        },
        domDown : {
            domClass   : 'dropload-down',
            domRefresh : '<div class="dropload-refresh">↑上拉加载更多-自定义内容</div>',
            domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中-自定义内容...</div>',
            domNoData  : '<div class="dropload-noData">暂无数据-自定义内容</div>'
        },
        loadUpFn : function(me){
            $.ajax({
                type: 'GET',
                url: localhost()+"problem/get_search_for_list?type=1&labelSecond=问作业",
                dataType: 'json',
                success: function(data){
                    var result = '';
                    for(var i = 0; i < data.lists.length; i++){
                        result +=   '<a class="item opacity" href="'+data.lists[i].link+'">'
                                        +'<img src="'+data.lists[i].pic+'" alt="">'
                                        +'<h3>'+data.lists[i].title+'</h3>'
                                        +'<span class="date">'+data.lists[i].date+'</span>'
                                    +'</a>';
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        $('.lists').html(result);
                        // 每次数据加载完，必须重置
                        me.resetload();
                        // 重置页数，重新获取loadDownFn的数据
                        page = 0;
                        // 解锁loadDownFn里锁定的情况
                        me.unlock();
                        me.noData(false);
                    },1000);
                },
                error: function(xhr, type){
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
        },
        loadDownFn : function(me){
            page++;
            // 拼接HTML
            var result = '';
            $.ajax({
                type: 'GET',
                url: 'http://ons.me/tools/dropload/json.php?page='+page+'&size='+size,
                dataType: 'json',
                success: function(data){
                	if(shuju.code==1002){window.location.href=locationHref()+'yishengjiaoyu/login';}
					console.log("========= 服务器响应成功调用 ==========");
					console.log(shuju)
					for(var value of shuju.data.problemModelList) {
						console.log(value);
						var date = new Date(value.time);
						Y = date.getFullYear() + '-';
						M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
						D = date.getDate() + ' ';
						h = date.getHours() + ':';
						m = date.getMinutes() + ':';
						s = date.getSeconds();
						console.log(Y + M + D + h + m + s);
						$("<li><div class='question'><div class='question-first' id="+value.id+"><p>" + value.problemTitle + "</p><span>" + value.problemContent + "</span></div><div class='question-img'></div><div class='question-second'><div class=''><span class='school'>" + value.problemLevel + "</span><span class='nianji'></span><span class='kemu'>"+value.id+"</span></div><span class='time'>" + M + D + h + m + s + "</span></div><div class='question-third'><img src="+
						value.userModel.userUrl+" /><div class='question-xinxi'><section class='section1'><span class='name'>"+value.userModel.userName+"</span><span class='jifen'>"+value.likeTotal+"回答</span></section><section class='section2'><span class='huida'>我来回答</span></section></div></div></div></li>").appendTo(".content-wenda");
					}
					for(var ans of shuju.data.problemAnswerList) {
						console.log(ans.problemImage);
						for (var i=0;i<ans.problemImage.length;i++) {
							$("<img src="+ans.problemImage[i]+">").appendTo($(".question-img"))
						}
		
					}
                	
                	
                	
                	
                    var arrLen = data.length;
                    if(arrLen > 0){
                        for(var i=0; i<arrLen; i++){
                            result +=   '<a class="item opacity" href="'+data[i].link+'">'
                                            +'<img src="'+data[i].pic+'" alt="">'
                                            +'<h3>'+data[i].title+'</h3>'
                                            +'<span class="date">'+data[i].date+'</span>'
                                        +'</a>';
                        }
                    // 如果没有数据
                    }else{
                        // 锁定
                        me.lock();
                        // 无数据
                        me.noData();
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                        // 插入数据到页面，放到最后面
                        $('.lists').append(result);
                        // 每次数据插入，必须重置
                        me.resetload();
                    },1000);
                },
                error: function(xhr, type){
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
        },
        threshold : 50
    });
});

//	上拉下拉	                  上拉下拉	上拉下拉	                  上拉下拉	上拉下拉	                  上拉下拉
//	上拉下拉	                  上拉下拉	上拉下拉	                  上拉下拉	上拉下拉	                  上拉下拉

	$.ajax({//localhost()+"problem/get_search_for_list?type=1&labelSecond=问作业",
//"http://k1602677i8.iok.la/lifetime/problem/get_search_for_list?type=1&labelSecond=问作业",
//		var url1=localhost()+"problem/get_search_for_list?type=1&labelSecond=问作业;
		url: localhost()+"problem/get_search_for_list?type=1&labelSecond=问作业",
		dataType: "json",
		async: true,
		type: "GET",
		beforeSend: function() {
			console.log("======== 请求之前调用 =========")
		},
		success: function(shuju) {
			if(shuju.code==1002){window.location.href=locationHref()+'yishengjiaoyu/login';}
		 
			console.log("========= 服务器响应成功调用 ==========");
			console.log(shuju)
			for(var value of shuju.data.problemModelList) {
				console.log(value);
				var date = new Date(value.time);
				Y = date.getFullYear() + '-';
				M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				D = date.getDate() + ' ';
				h = date.getHours() + ':';
				m = date.getMinutes() + ':';
				s = date.getSeconds();
				console.log(Y + M + D + h + m + s);
				$("<li><div class='question'><div class='question-first' id="+value.id+"><p>" + value.problemTitle + "</p><span>" + value.problemContent + "</span></div><div class='question-img'></div><div class='question-second'><div class=''><span class='school'>" + value.problemLevel + "</span><span class='nianji'></span><span class='kemu'>"+value.id+"</span></div><span class='time'>" + M + D + h + m + s + "</span></div><div class='question-third'><img src="+
				value.userModel.userUrl+" /><div class='question-xinxi'><section class='section1'><span class='name'>"+value.userModel.userName+"</span><span class='jifen'>"+value.likeTotal+"回答</span></section><section class='section2'><span class='huida'>我来回答</span></section></div></div></div></li>").appendTo(".content-wenda");
			}
			for(var ans of shuju.data.problemAnswerList) {
				console.log(ans.problemImage);
				for (var i=0;i<ans.problemImage.length;i++) {
					$("<img src="+ans.problemImage[i]+">").appendTo($(".question-img"))
				}

			}
		},
		error: function() {
			console.log("======= 服务器响应失败调用 ==========")
		},
		complete: function() {
			console.log("======== 请求完毕之后调用，注意：无论服务器响应成功与否，都会调用这个函数！！ ===========")
		}
	})
	
	$("ul[class=content-wenda]").on("touchend","span[class=huida]",function(){
	var $parent=$(this).parents(".question");
	var id=$parent.children(".question-second").children("div").children("span[class=kemu]").html()
	var nianji=$parent.children(".question-second").children("div").children("span[class=nianji]").html()
	var xueke=$parent.children(".question-second").children("div").children("span[class=school]").html()
	var acceptionTitle=$parent.children(".question-first").children("p").html()
		var urls="yishengjiaoyu/huida.html?acceptionTitle="+encodeURI(acceptionTitle)+"&id="+id+"&type=1&timestamp="+timestamp;
		getPath(urls)
	})
	$(".content-wenda").on("touchend",".question-first",function(){
		var idd=$(this).attr("id");
		var urls="yishengjiaoyu/queDetail.html?type=1&id="+idd+"&timestamp="+timestamp;
		getPath(urls)
	})
});