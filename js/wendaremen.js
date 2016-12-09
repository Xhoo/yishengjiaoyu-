$(function() {
	var preUrl = window.location.href;
	var splitUrl = getUrl(preUrl);
//	console.log(splitUrl)
	var id = splitUrl.id;
	var ddd=splitUrl.type;

	
	$(".header-left").on("touchstart",function() {
		if (ddd==0){
			var urls = "yishengjiaoyu/html/qzindex.html";
			getPath(urls);
		} else if (ddd==1){
			window.history.go(-1); 
		}
		
	});
	$(".tanchu p:nth-of-type(2)").on("touchstart",function(){
		var urls="yishengjiaoyu/html/qzindex.html";
	getPath(urls);
	});
	$(".question-first").on("touchstart",function(){
		var urls="yishengjiaoyu/html/qzindex.html";
		getPath(urls);
	})
	$.ajax({//localhost()+"problem/get_search_for_list?type=1&labelSecond=问作业",
		url: localhost()+"problem/get_fiery_specialist_list",
		dataType: "json",
		async: true,
		type: "GET",
		beforeSend: function() {
			console.log("======== 请求之前调用 =========")
		},
		success: function(shuju) {
		if(shuju.code==1002){window.location.href=locationHref()+'yishengjiaoyu/login';}
			
			console.log("========= 服务器响应成功调用 ==========");
			for(var value of shuju.data) {
				var date = new Date(value.time);
				Y = date.getFullYear() + '-';
				M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				D = date.getDate() + ' ';
				h = date.getHours() + ':';
				m = date.getMinutes() + ':';
				s = date.getSeconds();
				$("<li><div class='question'><div class='question-first' id="+value.id+"><p>" + value.problemTitle + "</p><span>" + value.problemContent + "</span></div><div class='question-img'></div><div class='question-second'><div class=''><span class='school'>" + value.problemLevel + "</span><span class='nianji'>"+value.problemSubject+"</span><span class='kemu'>"+value.id+"</span></div><span class='time'>" + M + D + h + m + s + "</span></div><div class='question-third'><img src="+
				value.userModel.userUrl+" /><div class='question-xinxi'><section class='section1'><span class='name'>"+value.userModel.userName+"</span><span class='jifen'>"+value.likeTotal+"回答</span></section><section class='section2'><span class='huida'>我来回答</span></section></div></div></div></li>").appendTo(".content-wenda");
			}

		},
		error: function() {
			console.log("======= 服务器响应失败调用 ==========")
		},
		complete: function() {
			console.log("======== 请求完毕之后调用，注意：无论服务器响应成功与否，都会调用这个函数！！ ===========")
		}
	})
	console.log()
	$("ul[class=content-wenda]").on("touchstart","span[class=huida]",function(){
	var $parent=$(this).parents(".question");
	var id=$parent.children(".question-second").children("div").children("span[class=kemu]").html()
	var nianji=$parent.children(".question-second").children("div").children("span[class=nianji]").html()
	var xueke=$parent.children(".question-second").children("div").children("span[class=school]").html()
	var acceptionTitle=$parent.children(".question-first").children("p").html()
		var urls="yishengjiaoyu/huida.html?acceptionTitle="+encodeURI(acceptionTitle)+"&id="+id+"&type=0&timestamp="+timestamp;
		getPath(urls)
	})
	$(".content-wenda").on("touchstart",".question-first",function(){
		var idd=$(this).attr("id");
		var urls="yishengjiaoyu/queDetail.html?type=1&id="+idd+"&timestamp="+timestamp;
		getPath(urls)
	})
});