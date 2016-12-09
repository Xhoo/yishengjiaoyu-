//图片上传要用
   var url = "http://k1602677i8.iok.la/lifetime/";
//var url="http://192.168.50.70:8080/lifetime/";
//var url="http://www.1sedu.com/lifetime/";
//var url="http://http://47.90.85.71/";
//coursemangement
window.url = url;
//页面跳转
function getPath(urls) {
	window.location.href = locationHref() + urls;
}
//页面跳转URL前缀
function locationHref() {
	//  var locationHref = "http://k1602677i8.iok.la/";
	var locationHref = "http://47.90.85.71/";
//	  var locationHref = "http://www.1sedu.com/";
	return locationHref;
}
//ajax 地址前缀前缀
function localhost() {
//	var localhost = "http://k1602677i8.iok.la/lifetime/";
//		var localhost="http://192.168.50.70:8080/lifetime/";
		var localhost="http://47.90.85.71/lifetime/";
//		var localhost="http://www.1sedu.com/lifetime/";
	return localhost;
}

//字符串切割
function getUrl(preUrl) {
	var result = {};
	url1 = preUrl.split('?')[1];
	var map = url1.split('&');
	var len = map.length;
	for(var i = 0; i < len; i++) {
		result[map[i].split('=')[0]] = map[i].split('=')[1];
	};
	return result;
};

/**
 * 及时上传图片
 * @param urls
 * @param data
 * @returns {{}}
 */
function addHttpUrl(data) {
	var da = {};
	$.ajax({
		type: "POST",
		url: url + "platform/upload",
		data: data,
		async: false,
		dataType: "json",
		success: function(data) {
			if(data.code == 0) {
				da = data.data;
				console.log(da)
			} else {
				var json = getJSON(data);

				alert(json.msg);
			}
		},
//		complete: function(XMLHttpRequest, textStatus) {},
//		error: function(XMLHttpRequest, textStatus, errorThrown) { //上传失败
//
//		}
	});
	return da;
}
/***
 * @author rongjie
 * 修改性别logo
 * @param key 元素
 * @param value 值
 */
function setSex(key, value) {
	if(value == 0) {
		setUrl(key, '../../img/ic_woman.png');
	} else {
		setUrl(key, '../../img/ic_man.png');
	}
}

/**
 * @author rongjie
 * 修改专家 教授认证图标
 * @param key 元素
 * @param teacherType 专家认证
 * @param userType 教师认证
 */
function setAuthenticate(key, teacherType, userType) {
	if(teacherType == '专' && userType == '教') {
		setUrl(key, '../../img/ic_zhuan_jiao.png');
	} else if(teacherType == '专') {
		setUrl(key, '../../img/ic_zhuan.png');
	} else if(userType == '教') {
		setUrl(key, '../../img/ic_jiao.png');
	} else {
		setUrl(key, '');

	}
}

/**
 * 及时上传图片
 * @param urls
 * @param data
 * @returns {{}}
 */

/***
 * 获取请求参数
 * @param name 参数key
 * @returns 参数value
 */

/*
 * @description: 获取window.location.href请求的参数
 * @author: Lansky
 * @date: 2016-11-20
 * @return json Object 封装后参数
 * */
window.getRequestParams = function GetRequest() {
		var url = location.search;
		var theRequest = new Object();
		if(url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for(var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
			}
		}
		return theRequest;
	}
	/**
	 * 指定返回get参数
	 * @param name key
	 * @returns value
	 */
function getParams(name) {
	console.log(name);
	console.log(reg);
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var result = window.location.search.substr(1).match(reg);
	console.log(window.location.href);
	console.log(reg);
	return result ? decodeURIComponent(result[2]) : null;

}



//时间戳处理
function jsDateDiff(publishTime) {
	var d_minutes, d_hours, d_days;
	var timeNow = parseInt(new Date().getTime() / 1000);
	var d;
	d = timeNow - publishTime;
	d_days = parseInt(d / 86400);
	d_hours = parseInt(d / 3600);
	d_minutes = parseInt(d / 60);
	if(d_days > 0 && d_days < 4) {
		return d_days + "天前";
	} else if(d_days <= 0 && d_hours > 0) {
		return d_hours + "小时前";
	} else if(d_hours <= 0 && d_minutes > 0) {
		return d_minutes + "分钟前";
	} else if(d_minutes <= 0) {
		return d_days + "刚刚";
	} else {
		var s = new Date(publishTime * 1000);

		return s.getFullYear() + "年" + (s.getMonth() + 1) + "月" + s.getDate() + "日";
		//return (s.getMonth() + 1) + "/" + s.getDate();
		//                return s.getDate() + "/" + (s.getMonth() + 1);
	}
}

/**
 * @author rongjie
 * 修改htmml内容
 * @param key 元素
 * @param value 要修改的值
 */
function setHtml(key, value) {
	key.html(value)
}

//jquery-3.1.1.js
//var url='http://192.168.50.11/lifetime/';
//coursemangement
//window.url=url;
//window.href="http://k1602677i8.iok.la/yishengjiaoyu/html/jiaoshi";

//教师中心 我的主页
var TEACHERHOMEHTML = 'yishengjiaoyu/html/jiaoshi/my_homepage.html';
//教师中心 课程管理
var COURSEMANAGEMENT = 'course_management.html';
//课程管理 基本信息
var BASICFACTS = 'yishengjiaoyu/html/jiaoshi/essential_information.html';
//课程管理 域名
var REALMAME = 'yishengjiaoyu/html/jiaoshi/domain_name.html';
//课程管理 照片墙
var PHOTOWALL = 'yishengjiaoyu/html/jiaoshi/photo_wall.html';
//课程管理 授课范围
var ACCREDITLIMIT = 'yishengjiaoyu/html/jiaoshi/accredit_limits.html';

//课程管理 课程展示
var COURSEPRESENTATION = 'yishengjiaoyu/html/jiaoshi/course_presentation.html';

//基本信息 姓名 教龄 职称 自我介绍
var INFOLIST = 'yishengjiaoyu/html/jiaoshi/essential_sublink.html';
//基本信息 上课地址
var CLASSADDRESS = 'yishengjiaoyu/html/jiaoshi/select-address_otm.html';
//基本信息 教学经历
var TEACHINGIN = 'yishengjiaoyu/html/jiaoshi/teaching_experience.html';
var ALLLABEL = 'yishengjiaoyu/html/all_quanzi.html';





/**
 * @author rongjie
 * 修改img图片
 * @param  key 元素
 * @param value 元素路径
 */
function setUrl(key, value) {
	key.attr('src', value);

}
/***
 * @author rongjie
 * 修改性别logo
 * @param key 元素
 * @param value 值
 */
function setSex(key, value) {
	if(value == 0) {
		setUrl(key, '../../img/ic_woman.png');
	} else {
		setUrl(key, '../../img/ic_man.png');
	}
}


/**
 * @author rongjie
 * jquery get请求
 * @param urls 路径
 * @param data 请求参数
 */
function getHttpGet(urls, data) {
	var da = {};
	$.ajax({
		url: url + urls,
		type: "GET",
		data: data,
		async: false,
		dataType: 'json',
		success: function(data) {

			if(data.code == 0) {
				da = data.data;
			} else {
				alert(data.msg);
			}
		},
		error: function() {
			alert('网络错误');
		}
	});
	return da;
}
/**
 * @author rongjie
 * jquery get请求
 * @param urls 路径
 * @param data 请求参数
 */
function getHttpPost(async, urls, data) {
	var da = {};
	$.ajax({
		url: url + urls,
		type: "post",
		async: async,
		data: JSON.stringify(data),
		contentType: "application/json",
		success: function(data) {
			if(data.code == 0) {
				da = data.data;
			} else {
				alert(data.msg);
			}
		},
		error: function() {
			alert('网络错误');
		}
	});
	return da;
}

/***
 * 获取请求参数
 * @param name 参数key
 * @returns 参数value
 */

/*
 * @description: 获取window.location.href请求的参数
 * @author: Lansky
 * @date: 2016-11-20
 * @return json Object 封装后参数
 * */


function getJSON(str) {
	return JSON.parse(str);
}



//判断是否为空
//return true or false
function isNotNull(obj) {
	return(obj != undefined && obj != null) ? true : false;
}

function isNotBlank(str) {
	return isNotNull(str) && str != '';
}
//时间戳   时间戳         时间戳时间戳 时间戳
function time(oTime) {
	var date = new Date(oTime);
	Y = date.getFullYear() + '-';
	M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	D = date.getDate() + ' ';
	h = date.getHours() + ':';
	m = date.getMinutes() + ':';
	s = date.getSeconds();
	return Y + M + D + h + m + s;
}

function getLogin(code) {
	if(code == 10002) {
		window.location.href = locationHref() + 'yishengjiaoyu/login';
		//		if(shuju.code==1002){window.location.href=locationHref()+'yishengjiaoyu/login';}

	}
}

////解决浏览器缓存
//function timestamp(url){
//   //  var getTimestamp=Math.random();
//     var getTimestamp=new Date().getTime();
//    if(url.indexOf("?")>-1){
//      url=url+"&timestamp="+getTimestamp
//    }else{
//      url=url+"?timestamp="+getTimestamp
//    }
//    return url;
//}
//解决浏览器缓存
var timestamp = new Date().getTime();