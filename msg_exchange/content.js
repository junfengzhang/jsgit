/**
 * 
 */
//.layui-layer-ico{background:url(default/icon.png)
//var imgURL = chrome.extension.getURL("layer/skin/default/icon.png");

var myTabId = chrome


//chrome.extension.onRequest.addListener(function(request,sender,sendResp){
//	
//	var tabId = request.tabId;
//	$("#tabId").text(tabId);
//});

$(function(){	
	chrome.extension.sendRequest(null,
			{"a":"b"},function(response){
		var tabId = response.tabId;
		$("#tabId").text(tabId);		
	});	
});


layer.open({
	type : 1,
	skin : 'layui-layer-rim', // 加上边框
	area : [ '420px', '240px' ], // 宽高
	content : '<div style="position:relative; left:40px; top: 20px;"><span id="tabId"></span><br><textarea type="text" id="session" name= "editer" rows=5 cols = 30/><br>'+
		'tabId:<input type="text"/><br><input type="button" value="send" id="send" /></div>',
	shadeClose:true
});

$("#send").click(function(){
	alert("hello");
	var msg = $("#session").val();
	alert(msg);
	chrome.tabs.getCurrent(function(tab){		
		alert(tab.id);
	});
});






