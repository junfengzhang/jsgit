//chrome.tabs.onCreated.addListener(function(tab) {
//	console.log(tab.id);
//});



chrome.extension.onRequest.addListener(function(request,sender,sendResponse){
	console.log("hello");
	chrome.tabs.getSelected(function(tab) {
		sendResponse({tabId:tab.id});
	});
});



