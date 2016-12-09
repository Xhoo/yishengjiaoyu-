ele1:要点赞的spanl里面img的src
ele2:点赞之后总数   +1
likeTotal  点赞总数
function duanZan(ele1,ele2,localhost(),id,type){
	//jQuery的 Ajax
	$.ajax({
			url : localhost()+"interactive/set_like?id="+id+"&type="+type, //请求路径
			dataType : "json", //返回数据格式
			async : true, //是否是异步，默认是异步
			data : JSON.stringify(shuju),   //参数   //data : JSON.stringify(shuju)//有时候数据需要转换,
			type : "POST", //请求方式
			contentType:"application/json",//post请求数据格式
			beforeSend : function () {
				console.log(arr)
				console.log("======== 请求之前调用 =========");
			},
			success : function (data) {
				console.log("========= 服务器响应成功调用 ==========");
				console.log(data)
				ele1.attr("src","img/ic_up_blue.png");
				ele2.html(ele2,likeTotal+1)
				
			},
			error : function () {
				console.log("======= 服务器响应失败调用 ==========");
			},
			complete : function () {
				console.log("======== 请求完毕之后调用，注意：无论服务器响应成功与否，都会调用这个函数！！ ===========");
			}
		});
	
	
}
