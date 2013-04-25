var xmlHttp;

// checking to see if it's ok to send the car, if it isn't alert that shit's weak!
function regForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
		alert ("Browser does not support HTTP Request.");
		return;
	}	
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "email_reg=" + thisform.elements['email_reg'].value + "&password_reg=" + thisform.elements['password_reg'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=formSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/add_user.php",true);
	
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
function formSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert (xmlHttp.responseText);		
		if (xmlHttp.responseText=="Registration complete!") {
			$.mobile.changePage('index.html', {transition: 'slide'});
		} else {
			$.mobile.changePage('index.html#register_popup');	
		}
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