function zhifu(url,shuju) {
	$.ajax({
		url:"url",//请求路径
		dataType:"json",//返回数据格式
		async:true,//是否是异步，默认是异步
		type:"POST",//请求方式
		data:"shuju",//data : {"ListContents" : ""}, //参数
		contentType:"application/json",//post请求数据格式
		beforeSend : function () {
						console.log("======== 请求之前调用 =========");
					},
					success : function (data) {
						console.log("========= 服务器响应成功调用 ==========");
//						Console.log()
					$(".voice1").on("touchstart",function(){
						var Audio=this.getElementsByTagName("audio")[0];
						if (Audio.paused) {
								Audio.play()
						} else{
							Audio.pause()
						}
					
					})
					},
					error : function () {
						console.log("======= 服务器响应失败调用 ==========");
					},
					complete : function () {
						console.log("======== 请求完毕之后调用，注意：无论服务器响应成功与否，都会调用这个函数！！ ===========");
					}
	})
}

$(ele).on("touchstart",function(){
	var url=localhost()+
})