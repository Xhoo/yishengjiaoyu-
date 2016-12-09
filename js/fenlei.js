
$(function() {
	 
	
	//jQuery的 Ajax
	$.ajax({
		url: localhost()+"platform/get_specify_label_list?type=1", //localhost()+"platform/get_specify_label_list?type=1", //请求路径
//		url: localhost()+"platform/get_specify_label_list?type=1", //localhost()+"platform/get_specify_label_list?type=1", //请求路径
		dataType: "json", //返回数据格式
		async: true, //是否是异步，默认是异步
		//			data : JSON.stringify(shuju),   //参数   //data : JSON.stringify(shuju)//有时候数据需要转换,
		type: "GET", //请求方式
		//			contentType:"application/json",//post请求数据格式
		beforeSend: function() {
			console.log("======== 请求之前调用 =========");
		},
		success: function(shuju) {
//		if(shuju.code==1002){window.location.href=locationHref()+'yishengjiaoyu/login';}
		
			console.log("========= 服务器响应成功调用 ==========");
			for(var value of shuju.data) {
				$("<li class='oLi'><img src="+ value.url + "><div id="+value.id+"><span class=''></span><span class='oSpan'></span></div><div id=''>" + value.name + "</div></li>").appendTo(".photowall ul")
			}
		},
		error: function() {
			console.log("======= 服务器响应失败调用 ==========");
		},
		complete: function() {
			console.log("======== 请求完毕之后调用，注意：无论服务器响应成功与否，都会调用这个函数！！ ===========");
		}
	});
	
	function secondAjax(id,oThis) {
		$.ajax({
			type: "get",
			url: localhost()+"platform/get_specify_label_list?type=2&id=" + id,//localhost()+"platform/get_specify_label_list?type=2&id=" + id, //请求路径
			async: true,
			success: function(shuju) {
//				var code=shuju.code;
		if(shuju.code==1002){window.location.href=locationHref()+'yishengjiaoyu/login';}
//			getLogin(shuju.code)
				for(var value of shuju.data) {
				$("<li class='oLi2'><img src="+ value.url + "><div id="+value.id+"><span class=''></span><span class='oSpan2'></span></div><div id=''>" + value.name + "</div></li>").insertAfter(oThis)
			}
			}
		});
	}
function thirdAjax(id,oThis) {
		$.ajax({
			type: "get",
			url: localhost()+"platform/get_specify_label_list?type=3&id=" + id,//localhost()+"platform/get_specify_label_list?type=2&id=" + id, //请求路径
			async: true,
			success: function(shuju) {
//				var code=shuju.code;
		if(shuju.code==1002){window.location.href=locationHref()+'yishengjiaoyu/login';}
				for(var value of shuju.data) {
				$("<li class='oLi3'><img src="+ value.url + "><div id="+value.id+"><span class=''></span><span class='oSpan3'></span></div><div id=''>" + value.name + "</div></li>").insertAfter(oThis)
			}
			}
		});
	}

function oId(){
	var arr=[];
	var arr2=[];
	var arr3=[];
	$.each($(".oLi .spanActive"),function(){
	arr.push($(this).parent().attr("id"))
	})
	$.each($(".oLi2 .spanActive"),function(){
	arr2.push($(this).parent().attr("id"))
	})
	$.each($(".oLi3 .spanActive"),function(){
	arr3.push($(this).parent().attr("id"))
	})
	var shuju={}
	var len=arr.length
	var len2=arr2.length
	var len3=arr3.length

	if (len>0) {
		shuju.labelList=arr;
	} else  {
		shuju.labelList=null;
	} 
	
	if (len2>0) {
		shuju.labelSecondList=arr2;
	} else{
		shuju.labelSecondList=null;
	}
	
	if (len3>0) {
		shuju.labelThirdList=arr3;
	}
	else {
		shuju.labelThirdList=null;
	}
	console.log(shuju)
//	if(typeOf(shuju) =="undefined")
//	if(!shuju)
if(typeof(shuju)!=undefined){ 
	$.ajax({
			url : localhost()+"interactive/add_social_circle_list", //请求路径localhost()+"interactive/add_social_circle_list", //请求路径
			dataType : "json", //返回数据格式
			async : true, //是否是异步，默认是异步
			data : JSON.stringify(shuju),   //参数   //data : JSON.stringify(shuju)//有时候数据需要转换,
			type : "POST", //请求方式
			contentType:"application/json",//post请求数据格式
			beforeSend : function () {
				console.log("======== 请求之前调用 =========");
			},
			success : function (data) {
		if(shuju.code==1002){window.location.href=locationHref()+'yishengjiaoyu/login';}
			
				console.log("========= 服务器响应成功调用 ==========");
				console.log(data)
				if (data.msg=="SUCCESS") {
					var urls="yishengjiaoyu/html/qzindex.html"//首页首页首页首页;
					getPath(urls);
				}
			},
			error : function () {
				console.log("======= 服务器响应失败调用 ==========");
			},
			complete : function () {
				console.log("======== 请求完毕之后调用，注意：无论服务器响应成功与否，都会调用这个函数！！ ===========");
			}
		});
	}
}
	

	$(".photowall ul").on("touchstart", ".oLi", function() {
		var oClass=$(this).children("div:nth-of-type(1)").children(".oSpan").attr("class");
		console.log(oClass)
		if(oClass=="oSpan"){
			$(this).children("div:nth-of-type(1)").children(".oSpan").addClass("spanActive");
			var id=$(this).children("div:nth-of-type(1)").attr("id")
			console.log(id)
			var divClass=$(this).children("div:nth-of-type(2)").attr("class");
			console.log(divClass)
			
			var oThis=$(this);
			if (divClass!="false") {
				secondAjax(id,oThis);
				$(this).children("div:nth-of-type(2)").addClass("false")
			} 
			
		} else{
			$(this).children("div:nth-of-type(1)").children(".oSpan").removeClass("spanActive");
		}
	});	
		
//		$(this).addClass("spanActive");
//		var id=$(this).parent("div").attr("id")
//		var oThis=$(this);
//		secondAjax(id,oThis)
	
//	$(".photowall ul").on("touchstart", ".oLi .spanActive", function() {
//		$(this).removeClass("spanActive");
//	});
	
	$(".photowall ul").on("touchstart", ".oLi2", function() {
		var oClass=$(this).children("div:nth-of-type(1)").children(".oSpan2").attr("class");
		console.log(oClass)
		if(oClass=="oSpan2"){
			$(this).children("div:nth-of-type(1)").children(".oSpan2").addClass("spanActive");
			var id=$(this).children("div:nth-of-type(1)").attr("id")
			console.log(id)
			var divClass=$(this).children("div:nth-of-type(2)").attr("class");
			console.log(divClass)
			
			var oThis=$(this);
			if (divClass!="false") {
				secondAjax(id,oThis);
				$(this).children("div:nth-of-type(2)").addClass("false")
			} 
			
		} else{
			$(this).children("div:nth-of-type(1)").children(".oSpan2").removeClass("spanActive");
		}
	});	
	
//	$(".photowall ul").on("touchstart", ".oLi2 .oSpan2:not('.spanActive')", function() {
//		$(this).addClass("spanActive");
//		var id=$(this).parent("div").attr("id")
//		var oThis=$(this);
//		
//		thirdAjax(id,oThis)
//	});
//	$(".photowall ul").on("touchstart", ".oLi2 .spanActive", function() {
//		$(this).removeClass("spanActive");
//	});
	
	$(".photowall ul").on("touchstart", ".oLi3", function() {
		var oClass=$(this).children("div:nth-of-type(1)").children(".oSpan3").attr("class");
		console.log(oClass)
		if(oClass=="oSpan3"){
			$(this).children("div:nth-of-type(1)").children(".oSpan3").addClass("spanActive");
			var id=$(this).children("div:nth-of-type(1)").attr("id")
			console.log(id)
			var divClass=$(this).children("div:nth-of-type(2)").attr("class");
			console.log(divClass)
			
			var oThis=$(this);
			if (divClass!="false") {
				secondAjax(id,oThis);
				$(this).children("div:nth-of-type(2)").addClass("false")
			} 
			
		} else{
			$(this).children("div:nth-of-type(1)").children(".oSpan3").removeClass("spanActive");
		}
	});	
	
	
	
//	$(".photowall ul").on("touchstart", ".oLi3  .oSpan3:not('.spanActive')", function() {
//		$(this).addClass("spanActive");
//		var id=$(this).parent("div").attr("id")
//	});
//	$(".photowall ul").on("touchstart", ".oLi3 .spanActive", function() {
//		$(this).removeClass("spanActive");
//	});
/* 显示遮罩层 */
		function showOverlay() {
			$("#overlay").height(pageHeight());
			$("#overlay").width(pageWidth());
			// fadeTo第一个参数为速度，第二个为透明度
			// 多重方式控制透明度，保证兼容性，但也带来修改麻烦的问题
//			$("#overlay").fadeTo(200, 0.4);
			$("#overlay").fadeIn(200);
			$("#overlay").css("display","block");
		}

		/* 隐藏覆盖层 */
		function hideOverlay() {
			$("#overlay").fadeOut(200);
		}
		/* 当前页面高度 */
		function bodyHeight() {
			return document.body.scrollHeight;
		}
		/* 当前页面宽度 */
		function bodyWidth() {
			return document.body.scrollWidth;
		}
		/* 当前浏览器的宽度*/
		function pageHeight() {
			return window.screen.availHeight;
		}
		/* 当前浏览器的宽度*/
		function pageWidth() {
			return window.screen.availWidth;
		}
	$(".inputsection span").on("touchstart",function(){
		//点击按钮弹出遮罩
		showOverlay();
		oId();
	})
	//点击遮罩，遮罩消失
	$("#overlay").bind("touchstart",function(){
		hideOverlay();
	});
	hideOverlay();
});