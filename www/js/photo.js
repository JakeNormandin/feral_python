// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);
// PhoneGap is ready
function onDeviceReady() {
    // Do cool things here...
}
function getImage() {
// Retrieve image file location from specified source
navigator.camera.getPicture(uploadPhoto, function(message) {
    },{
    quality: 100,
    targetWidth: 200,
    targetHeight: 200,
    destinationType: navigator.camera.DestinationType.FILE_URI,
    sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    }
    );
}
function getPhoto() {
// Retrieve image file location from specified source
navigator.camera.getPicture(uploadPhoto, function(message) {
    },{
    quality: 100,
    targetWidth: 200,
    targetHeight: 200,
    destinationType: navigator.camera.DestinationType.FILE_URI,
    sourceType: navigator.camera.PictureSourceType.CAMERA
    }
    );
}
function uploadPhoto(imageURI) {
	alert('Photo upload in progress!');
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
    options.mimeType="image/jpeg";
    var params = new Object();
    params.value1 = "test";
    params.value2 = "param";
    options.params = params;
    options.chunkedMode = false;
    var ft = new FileTransfer();
    ft.upload(imageURI, "http://feralmedia.ca/FPTest/upload.php?snakeid="+localStorage.getItem('Snakeid'), win, fail, options);
	$.mobile.changePage('index.html#reptile_tracker');
	getMySnakes();  
}
function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
    alert(r.response);
}
function fail(error) {
    alert("An error has occurred: Code = " + error.code);
}