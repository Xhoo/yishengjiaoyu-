$(function() {
	
	sessionStorage.setItem("key", "value");
	
	var preUrl = window.location.href;
	var splitUrl = getUrl(preUrl);
//	console.log(splitUrl);
	var id = splitUrl.id;
	var ddd = splitUrl.type;
	$.ajax({//http://k1602677i8.iok.la/lifetime/order_form/get_order_form_details?orderFormNumber=071a1453b96b43b2a4ba6ce5a48c94a1&orderAnswerType=1
		url: localhost() + "order_form/get_order_form_details?orderFormNumber="+"071a1453b96b43b2a4ba6ce5a48c94a1"+"&orderAnswerType=1",
		dataType: "json",
		async: true,
		type: "GET",
		beforeSend: function() {
			console.log("======== 请求之前调用 =========")
		},
		success: function(shuju) {
		if(shuju.code==1002){window.location.href=locationHref()+'yishengjiaoyu/login';}
			
			console.log("========= 服务器响应成功调用 ==========");
			console.log(shuju);
			$(".content-msg>span img").attr("src", shuju.data.userModel.userUrl);
			$(".content-name").html(shuju.data.userModel.userName);
			if(shuju.data.userSex) {
				var img1 = document.createElement("img");
				img1.src = "./img/ic_man.png";
				$(".content-sex").append(img1)
			} else {
				var img1 = document.createElement("img");
				img1.src = "./img/sex-w.png";
				$(".content-sex").append(img1)
			}
			if(shuju.data.teacherType == "教") {
				if(shuju.data.userType == "专") {
					$("<img src='img/ic_zhuan_jiao.png'>").appendTo(".content-zhuanjiao")
				} else {
					$("<img src='img/ic_jiao.png'>").appendTo(".content-zhuanjiao")
				}
			} else {
				if(shuju.data.userType == "专") {
					$("<img src='img/ic_zhuan.png'>").appendTo(".content-zhuanjiao")
				} else {
					$(".content-zhuanjiao").remove()
				}
			}
			$(".content-zhiwu").html(shuju.data.specialistJobtitle);
			$(".yuyinmodel section:nth-of-type(1) span:nth-of-type(1)").html(shuju.data.problemTitle);
			$(".yuyinmodel section:nth-of-type(2) img").attr("src", shuju.data.userUrl);
			$(".wall-p p:nth-of-type(1) span:nth-of-type(2)").html("￥"+shuju.data.orderFormMoney)
			$(".wall-p p:nth-of-type(2) span:nth-of-type(2)").html("￥"+shuju.data.orderFormMoney)

			$(".yuyinmodel section:nth-of-type(1) span:nth-of-type(1)").html(shuju.data.orderFormTitle);
			
			
			function ShowCountDown(year,month,day,ele) 
			{ 
			var now = new Date(); 
			var endDate = new Date(year, month-1, day); 
			var leftTime=endDate.getTime()-now.getTime(); 
			var leftsecond = parseInt(leftTime/1000); 
			//var day1=parseInt(leftsecond/(24*60*60*6)); 
			var day1=Math.floor(leftsecond/(60*60*24)); 
			var hour=Math.floor((leftsecond-day1*24*60*60)/3600); 
			var minute=Math.floor((leftsecond-day1*24*60*60-hour*3600)/60); 
			var second=Math.floor(leftsecond-day1*24*60*60-hour*3600-minute*60); 
			var cc = document.getElementById(ele); 
	
			
			cc.innerHTML = "将在"+day1+"天"+hour+"小时"+minute+"分"+second+"秒后自动退款!"; 
			//var $cc =$(".wall-pinglun section p:nth-of-type(3)"); 
			//$cc.innerHTML = "距离"+year+"年"+month+"月"+day+"日还有："+day1+"天"+hour+"小时"+minute+"分"+second+"秒"; 
			}
			window.setInterval(function(){ShowCountDown(time(oDay).Y,time(oDay).M,time(oDay).D,'daojishi');}, 1000);
			
			var oTime=parseInt(shuju.data.time)
			var oDay=oTime+604800*1000;
			function time(oTime){
				var date = new Date(oTime);
				Y = date.getFullYear();
				M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
				D = date.getDate();
				h = date.getHours();
				m = date.getMinutes();
				s = date.getSeconds(); 
				return {Y,M,D,h,m,s};
			}
			console.log(time(oTime))
			console.log(time(oDay))
			
			$(".wall-pinglun section p:nth-of-type(2)").html("订单编号:"+shuju.data.orderFormNumber)
			$(".wall-pinglun section p:nth-of-type(3)").html("下单时间:"+time(oTime).Y+"/"+time(oTime).M+"/"+time(oTime).D+"/"+time(oTime).h+":"+time(oTime).m+":"+time(oTime).s)
		},
		error: function() {
			console.log("======= 服务器响应失败调用 ==========")
		},
		complete: function() {
			console.log("======== 请求完毕之后调用，注意：无论服务器响应成功与否，都会调用这个函数！！ ===========")
		}
	});
	$(".header-left").on("touchstart", function() {
		var urls = "yishengjiaoyu/html/qzindex.html";
		getPath(urls);
	});
	$(".wall-pinglun section:nth-of-type(2)").on("touchstart",function(){
		var urls = "yishengjiaoyu/assess.html?timestamp="+timestamp;
		getPath(urls);
	})
});