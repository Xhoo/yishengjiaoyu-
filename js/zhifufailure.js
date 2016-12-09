$(function(){
	var preUrl = window.location.href;
	var splitUrl = getUrl(preUrl);
//	console.log(splitUrl);
	var id = splitUrl.id;
	var ddd = splitUrl.type;
	$(".header-left").on("touchstart", function() {
		if(ddd == 0) {
			var urls = "yishengjiaoyu/html/qzindex.html";
			getPath(urls);
		} else if(ddd == 1) {
			window.history.go(-1);
		}

	});
	$(".wall>span").on("touchstart",function(){
		if () {
			$(this).html("返回");
			window.history.go(-1);
		} else{
			$(this).html("订单详情")
			var urls = "yishengjiaoyu/html/qzindex.html";
			getPath(urls);
		}
	})
})