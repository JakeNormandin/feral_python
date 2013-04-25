// JavaScript Document

var xmlHttp;

// checking to see if it's ok to send the car, if it isn't alert that shit's weak!
function emailQRForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request.");
		return;
	}	
	
	// setting variable to empty initially
	var formdata = "";
	// putting value of the form into variables
	formdata = "qr_email_id=" + thisform.elements['qr_email_id'].value + "mysnakes_qremailname=" + thisform.elements['mysnakes_qremailname'].value + "qr_email=" + thisform.elements['qr_email'].value;
	var id = thisform.elements['qr_email_id'].value;
	var snakename = thisform.elements['mysnakes_qremailname'].value;
    var email = thisform.elements['qr_email'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=qrformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/email_qr.php?userid="+localStorage.getItem('Userid')+"&snakeid="+id+"&snakename="+snakename+"&email="+email, true);
	
	// data being sent is in the format of a form submission, we also give the length of the parameters we are sending
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-Length",formdata.length);
	xmlHttp.setRequestHeader("Connection","close");
	
	// sending the form data
	xmlHttp.send(formdata);
	
	// browser is asking for event handler code, were saying "no don't go there", unless appropriate fields are filled out (then return true and run action  
	return false;
}

// dumping passengers into div
function qrformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert('QR code successfully emailed!');
		$.mobile.changePage('index.html#mysnakes_maindetails', {transition : "slide"});
		getThisSnake(localStorage.getItem('Snakeid'));
	}
}

// TRYING TO CREATE SUBWAY CAR, IN DIFFERENT WAYS FOR DIFFERENT BROWSERS
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