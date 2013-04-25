// JavaScript Document

var xmlHttp;

// checking to see if it's ok to send the car, if it isn't alert that shit's weak!
function qrForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request.");
		return;
	}	
	// setting variable to empty initially
	var formdata = "";
	// putting value of the form into variables
	formdata = "mysnakes_qrsnakeid=" + thisform.elements['mysnakes_qrsnakeid'].value + "mysnakes_qrsnakename=" + thisform.elements['mysnakes_qrsnakename'].value + "mysnakes_qrsnakeemail=" + thisform.elements['mysnakes_qrsnakeemail'].value;
	var snakename = thisform.elements['mysnakes_qrsnakename'].value;
    var email = thisform.elements['mysnakes_qrsnakeemail'].value;
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=qrformSubmitted;
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/generate_qr.php?userid="+localStorage.getItem('Userid')+"&snakeid="+localStorage.getItem('Snakeid')+"&snakename="+snakename+"&email="+email, true);
	// data being sent is in the format of a form submission, we also give the length of the parameters we are sending
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-Length",formdata.length);
	xmlHttp.setRequestHeader("Connection","close");
	// sending the form data
	xmlHttp.send(formdata);
	// browser is asking for event handler code, were saying "no don't go there", unless appropriate fields are filled out (then return true and run action  
	return false;
}

function qrformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert('QR Code successfully generated!');
		$.mobile.changePage('index.html#mysnakes_maindetails', {transition : "slide"});
		getThisSnake(localStorage.getItem('Snakeid'));
	}
}

function GetXmlHttpObject() {
	xmlHttp==null;
	try
	{
		xmlHttp=new XMLHttpRequest();	
		}
		catch (e)
		{
		try
		{
		xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");	
		}
		catch (e)
		{
		xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
return xmlHttp;
}