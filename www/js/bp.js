// JavaScript Document

<!-- FUNCTION GETS MY SNAKES FOR REPTILE TRACKER -->

function getMySnakes() {
	$.getJSON("http://www.feralmedia.ca/FP/get_mysnakes.php", function(mysnakes){
	$('#MySnakesList li').remove(); /* Remove list items, then run forloop */
	//alert(lures[1].brand);	
	//alert(lures.length);

	for (var i=0; i<mysnakes.length; i++) {
		document.getElementById('MySnakesList').innerHTML += 
		'<li>' + '<a href="#mysnakes_maindetails">' + 
		'<h1>' + mysnakes[i].name + '</h1>' + 
		'<img src="images/'+mysnakes[i].photo+'" height="100">'+'<p>' + mysnakes[i].morph + ' ' + mysnakes[i].sex + '</p>' + '</a>' + '</li>'
	}
	
	$('#MySnakesList').listview('refresh'); // refresh the listview
		
	});
}

<!-- FUNCTION GETS BALL PYTHONS FOR INDEX -->

function getBallPythons() {
	$.getJSON("http://www.feralmedia.ca/FP/get_bp.php", function(bps){
	$('.bp').remove(); /* Remove list items, then run forloop */
	//alert(lures[1].brand);	
	//alert(lures.length);

	for (var i=0; i<bps.length; i++) {
		document.getElementById('ball_pythons').innerHTML += 
		'<div data-role="collapsible" data-theme="a" class="bp" data-collapsed-icon="arrow-d" data-expanded-icon="arrow-u">' +
			'<img src="images/'+bps[i].photo+'">'  +
			'<h3>' + bps[i].morph + '</h3>' +
			'<p>' + bps[i].info + '</p>' +
		'</div>'
	}
	
	$('#ball_pythons').collapsibleset('refresh');
		
	});
}

<!-- FUNCTION GETS CORN SNAKES FOR INDEX -->

function getCornSnakes() {
	$.getJSON("http://www.feralmedia.ca/FP/get_corn.php", function(corn){
	$('.corn').remove(); /* Remove list items, then run forloop */
	//alert(lures[1].brand);	
	//alert(lures.length);

	for (var i=0; i<corn.length; i++) {
		document.getElementById('corn_snakes').innerHTML += 
		'<div data-role="collapsible" data-theme="a" class="corn" data-collapsed-icon="arrow-d" data-expanded-icon="arrow-u">' +
			'<img src="images/'+corn[i].photo+'">'  +
			'<h3>' + corn[i].morph + '</h3>' +
			'<p>' + corn[i].info + '</p>' +
		'</div>'
	}
	
	$('#corn_snakes').collapsibleset('refresh');
		
	});
}

<!-- FUNCTION GETS BOA CONSTRICTORS FOR INDEX -->

function getBoaConstrictors() {
	$.getJSON("http://www.feralmedia.ca/FP/get_boa.php", function(boa){
	$('.boa').remove(); /* Remove list items, then run forloop */
	//alert(lures[1].brand);	
	//alert(lures.length);

	for (var i=0; i<boa.length; i++) {
		document.getElementById('boa_constrictors').innerHTML += 
		'<div data-role="collapsible" data-theme="a" class="boa" data-collapsed-icon="arrow-d" data-expanded-icon="arrow-u">' +
			'<img src="images/'+boa[i].photo+'">'  +
			'<h3>' + boa[i].morph + '</h3>' +
			'<p>' + boa[i].info + '</p>' +
		'</div>'
	}
	
	$('#boa_constrictors').collapsibleset('refresh');
		
	});
}

<!-- FUNCTION GETS CARPET PYTHONS FOR INDEX -->

function getCarpetPythons() {
	$.getJSON("http://www.feralmedia.ca/FP/get_carpet.php", function(carpet){
	$('.carpet').remove(); /* Remove list items, then run forloop */
	//alert(lures[1].brand);	
	//alert(lures.length);

	for (var i=0; i<carpet.length; i++) {
		document.getElementById('carpet_pythons').innerHTML += 
		'<div data-role="collapsible" data-theme="a" class="carpet" data-collapsed-icon="arrow-d" data-expanded-icon="arrow-u">' +
			'<img src="images/'+carpet[i].photo+'">'  +
			'<h3>' + carpet[i].morph + '</h3>' +
			'<p>' + carpet[i].info + '</p>' +
		'</div>'
	}
	
	$('#carpet_pythons').collapsibleset('refresh');
		
	});
}






function capturePhoto() {
      // Take picture using device camera and retrieve image as base64-encoded string
      navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        destinationType: destinationType.DATA_URL });
}

