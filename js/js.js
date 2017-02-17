// JavaScript Document
var wxready = false;
var wx_fx_n = 0
function wxShare(title,url,img,title2){
	url = url || document.location.href;

	if(!wxready){
		wx_fx_n++;
		if(wx_fx_n<5){
			setTimeout(function(){wxShare(title,url,img,title2)},1000);
		}
		return ;	
	}
	wx_fx_n = 0;
	wx.onMenuShareTimeline({
		title: title2?title2:title, // 分享标题
		link: url, // 分享链接
		imgUrl: img, // 分享图标
		success: function () { location.reload();alert("hi1") },
		cancel: function () { }
	});
	wx.onMenuShareAppMessage({
		title: title,desc: title2,link: url,imgUrl: img,
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function () {location.reload(); alert("hi2")},
		cancel: function () {}
	});
	wx.onMenuShareQQ({
		title: title,desc: title2,link: url,imgUrl: img, // 分享图标
		success: function () {location.reload(); alert("hi3") },
		cancel: function () {}
	});
	wx.onMenuShareWeibo({
		title: title,desc: title2,link: url,imgUrl: img,
		success: function () { location.reload(); alert("hi4") },
		cancel: function () { }
	});
}
function geturl(){
			//获取当前URL
			var local_url = document.location.href; 
			//获取要取得的get参数位置
			var get = local_url.indexOf("#url=");
			if(get == -1){
				return false;   
			}   
			//截取字符串
			var get_par = local_url.substr(get+5);    
			//判断截取后的字符串是否还有其他get参数
			
			return get_par;
    }
	$(function(){
		wx.ready(function(){
			wxready = true;
			
		})	
		wxShare("小酷宝","http://alibaba.2591314.com/201610/kubao/index.php","http://alibaba.2591314.com/201610/kuabo/images/btn.png","我是小酷宝，和我一起开启回忆之旅吧！");
})

$.get("http://wtmgame.2591314.com/wx.php?a=getsign",function(msg){
		appId1 = msg.appId;
		timestamp1 = msg.timestamp;
		nonceStr1 = msg.nonceStr;
		signature1 = msg.signature;
		wx.config({
			debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
			appId: appId1, // 必填，公众号的唯一标识
			timestamp: timestamp1, // 必填，生成签名的时间戳
			nonceStr: nonceStr1, // 必填，生成签名的随机串
			signature: signature1,// 必填，签名，见附录1
			jsApiList: ['checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'hideMenuItems',
                'showMenuItems',
                'hideAllNonBaseMenuItem',
                'showAllNonBaseMenuItem',
                'translateVoice',
                'startRecord',
                'stopRecord',
                'onRecordEnd',
                'playVoice',
                'pauseVoice',
                'stopVoice',
                'uploadVoice',
                'downloadVoice',
                'chooseImage',
                'previewImage',
                'uploadImage',
                'downloadImage',
                'getNetworkType',
                'openLocation',
                'getLocation',
                'hideOptionMenu',
                'showOptionMenu',
                'closeWindow',
                'scanQRCode',
                'chooseWXPay',
                'openProductSpecificView',
                'addCard',
                'chooseCard',
                'openCard'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
		});
		
	},"json");
