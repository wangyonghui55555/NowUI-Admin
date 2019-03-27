import reqwest from 'reqwest';
import {message} from 'antd';
import md5 from 'blueimp-md5';
import constant from './constant';
import storage from './storage';
import ActiveType from "../emun/ActiveType";

function request(config) {
    config.data.appId = constant.appId;
	config.data.token = storage.getToken();
	config.data.platform = constant.platform;
	config.data.version = constant.version;
	config.data.timestamp = Math.round(new Date().getTime() / 1000);

	let data = {};
	let sign = '';
	var sdic = Object.keys(config.data).sort();
	for (let ki in sdic){
		sign += sdic[ki];
		sign += config.data[sdic[ki]];
		data[sdic[ki]] = config.data[sdic[ki]];
	}
	// console.log(sign);

	data.sign = md5(sign);

	if (!config.url.startsWith('http')) {
		config.url = constant.host + config.url;
	}

	if (constant.active === ActiveType.TEST) {
		data.systemRequestUserId = '14463951d1d94d39a9216dbd818fc984';
	}

	reqwest({
		url: config.url,
		type: 'json',
		method: 'POST',
		crossOrigin: true,
		// headers: {
		// 	'Accept': 'application/json',
		// 	'Content-Type': 'application/json'
		// },
		// data: JSON.stringify(data),
		data: data,
		success: function (response) {
			if (response.code === 200) {
				if (response.result) {
                    config.success(response.data);
				} else {
                    message.error('操作不成功！');
				}
			} else {
				message.error(response.message);
			}
		},
		error: function () {
			if(typeof(config.error) == 'function'){
				config.error();
			}else {
                message.error('网络繁忙，请稍后访问！');
            }
		},
		complete: function () {
			config.complete();
		}
	});


    /*function ajax(options){
        var xhr = null;
        var params = formsParams(options.data);
        //创建对象
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest()
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // 连接
        if(options.type == "GET"){
            xhr.open(options.type,options.url + "?"+ params,options.async);
            xhr.send(null)
        } else if(options.type == "POST"){
            xhr.open(options.type,options.url,options.async);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(params);
        }
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                options.success(xhr.responseText);
            }
        }
        function formsParams(data){
            var arr = [];
            for(var prop in data){
                arr.push(prop + "=" + data[prop]);
            }
            return arr.join("&");
        }

    }*/

}

export default {
	request: request
};
