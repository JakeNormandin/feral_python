// JavaScript Document

function handleOpenURL(url) {
	var url = url.split('/');	
	if(localStorage.getItem('Userid') == (url[3])) {
		$.mobile.changePage('index.html#mysnakes_maindetails', {transition : "slide"});
		getThisSnake(url[2]);		
	} else if (localStorage.getItem('Userid') === null){
		alert ('Please log in to use this feature!');	
	} else if (localStorage.getItem('Userid') != (url[3]) && localStorage.getItem('Userid') != null) {
		alert ('You cannot scan another users snake!');
	} 	
}
