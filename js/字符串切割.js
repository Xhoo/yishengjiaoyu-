preUrl = 'http:item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e';
   function getUrl(preUrl){
   	var result = {};
   	  url1=preUrl.split('?')[1];
   	  var map = url1.split('&');
   	  var len=map.length;
   	  for(var i=0;i<len;i++){
   	  	result[map[i].split('=')[0]] = map[i].split('=')[1];	        	  	
   	  };
   	  return result;
   };
   console.log(getUrl(preUrl));
   


