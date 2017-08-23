var config = {
	serverUrl:"http://192.168.1.254/mmall_back_01/";
}
var _mm = {
	//网络请求
	request:function(param){
		$.ajax({
			url:param.url||"",
			success:param.success||function(){alert('success')},
			error:param.error||function(){alert('error')}
		});
	},
	//获得服务器资源路径
	getServerUrl:function(url){
		return serverUrl+url;
	}
};

module.exports = _mm;