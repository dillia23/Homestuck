//link to the next comic
// var NEXT_LINK = document.getElementsByTagName('table')[7].children[0].children[0].children[0].children[0].children[0].href;
// var BACK_LINK = document.getElementsByTagName('table')[7].children[0].children[0].children[0].children[4].children[1].children[0].href"";
var LINK = 'http://www.mspaintadventures.com/?s=6&p='
var CURR_PAGE = window.location.search.split('p=')[1];


//wait for DOM to load
// Run our kitten generation script as soon as the document's DOM is ready.
document.addEventListener('DOMContentLoaded', function () {
	console.log("loaded");
	var text = createTextNode("Loaded!");
	document.getElementById('text').appendChild(text);
	var bg = chrome.extension.getBackgroundPage;
  bg.onkeydown=function(){
  	var key = String.fromCharCode(event.keyCode);
  	if(key == '\'') {
  		//next
  		bg.location.href = bg.location.href = LINK + (CURR_PAGE + 1);
  	} else if (key == '%') {
  		//go back
  		bg.location.href = LINK + (CURR_PAGE - 1);
  	} else {
  		console.log(key);
  	}
  };
});
