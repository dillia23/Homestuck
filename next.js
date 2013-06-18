//link to the next comic
// var NEXT_LINK = document.getElementsByTagName('table')[7].children[0].children[0].children[0].children[0].children[0].href;
// var BACK_LINK = document.getElementsByTagName('table')[7].children[0].children[0].children[0].children[4].children[1].children[0].href"";
var LINK = 'http://www.mspaintadventures.com/?s=6&p=00' 
var CURR_PAGE = parseInt(window.location.search.split('p=')[1]);


//wait for window to load
window.onload = function () {
  window.onkeydown=function(){
  	var key = String.fromCharCode(event.keyCode);
  	if(key == '\'') {
  		//next
  		window.location.href = LINK + (CURR_PAGE + 1);
  	} else if (key == '%') {
  		//go back
  		window.location.href = LINK + (CURR_PAGE - 1);
  	} else {
  		console.log(key);
  	}
  };
};
