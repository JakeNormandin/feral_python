// JavaScript Document

var xmlHttp;

<!-- FUNCTION GETS MY SNAKES FOR REPTILE TRACKER -->

function getMySnakes() {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?allsnakes="+localStorage.getItem('Userid'), function(mysnakes){
	$('#MySnakesList li').remove(); /* Remove list items, then run forloop */
	for (var i=0; i<mysnakes.length; i++) {
		document.getElementById('MySnakesList').innerHTML += 
		'<li id="mysnakes_li">' + '<a href="#mysnakes_maindetails"  data-transition="slide" onclick="getThisSnake('+mysnakes[i].id+')">' +
		'<h1>' + mysnakes[i].name + '</h1>' + 
		'<img src="http://www.feralmedia.ca/FPTest/images/'+mysnakes[i].photo+'" height="100" width="100"/>'+'<p>Morph: ' + mysnakes[i].morph+'</p>' + '</a>' + '</li>'
	}
	$('#MySnakesList').listview('refresh'); // refresh the listview
	});
}

function getAddSnakeForm() {
	clearContent('add_snake_form');
	var MyDate = new Date();
	var MyDateString;
	MyDate.setDate(MyDate.getDate());
	MyDateString = ('0' + (MyDate.getMonth()+1)).slice(-2) + '/' + ('0' + MyDate.getDate()).slice(-2) + '/'  + MyDate.getFullYear();
	document.getElementById("add_snake_form").innerHTML = 
	'<h3>Add Snake</h3>' +
	'<form id="mysnakes_addsnake" data-ajax="false" action="..." onsubmit="return snakeForm(this);">' +
	'Birth Date:' +
	'<input type=\"date\" name=\"mysnakes_snakedate\" id=\"mysnakes_snakedate\" value=\"'+MyDateString+'\"  />'+
	'<div id="add_snake_errors"></div>'+
    '<input type="text" class="input" name="mysnakes_name" id="mysnakes_name" placeholder="Name:" data-theme="a" value="" />' +
	'<input type="text" class="input" name="mysnakes_morph" id="mysnakes_morph" placeholder="Morph:" data-theme="a" value=""  />' +
	'<select id="mysnakes_sex" name="mysnakes_sex">' +
    	'<option data-placeholder="true" value="Sex">Sex</option>' +
        '<option value="Male">Male</option>' +
        '<option value="Female">Female</option>' +
    '</select>' +
	 '<input type="submit" data-theme="a" value="ADD SNAKE" />' +
	'</form>';	
	$('#add_snake').page("destroy").page();
}

<!-- FUNCTION GETS SELECTED SNAKE FOR REPTILE TRACKER -->

function getThisSnake(thissnakeid) {
	localStorage.setItem('Snakeid',thissnakeid); //putting snakeid into local storage
    clearContent('this_snake');
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thissnake="+localStorage.getItem('Snakeid'), function(thissnake){
	for (var i=0; i<thissnake.length; i++) {
		document.getElementById('this_snake').innerHTML +=
              '<div id="thissnake_details">' +
              '<div id="mysnakes_con1">' +
              '<div id="mysnakes_image">'+
              '<img src="http://www.feralmedia.ca/FPTest/images/'+thissnake[i].photo+'" height="100" width="100" style="border-radius:20px;"/>'+
              '</div>'+
              '</div>' + //end of enlarge photo popup
              '<div id="mysnakes_maininfo">'+
              '<h3>'+thissnake[i].name+'</h3>'+
              '<span class="snake_heading">Morph:</span> '+thissnake[i].morph+'<br />'+
              '<span class="snake_heading">Sex:</span> '+thissnake[i].sex+'<br />'+
              '<div id="last_fed"></div>'+
              '</div>'+
              '</div>'+
              '<div data-role="controlgroup" data-type="horizontal" id="snake_buttons">' +
              '<a href="#choose_photo_popup" onclick="resetSnakeQRId('+thissnakeid+')" data-role="button" data-rel="popup" data-position-to="window" data-inline="true" data-mini="true" data-icon="camera" data-iconpos="right">Photo</a>' +
              '<div data-role="popup" id="choose_photo_popup" data-theme="a" data-overlay-theme="a" data-transition="pop">' +
              '<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>' +
              '<a href="#" id="choose_photo_but" onclick="getImage()" data-role="button">Choose Photo</a>'+
              '<a href="#" id="take_photo_but" onclick="getPhoto()" data-role="button">Take Photo</a>'+
              '</div>' +
              '<a href="#mysnakes_editsnake"  data-transition="slide" onclick="editSnake('+thissnake[i].id+')" data-role="button" data-inline="true" data-mini="true" data-icon="edit" data-iconpos="right">Edit</a>' +
              '<a href="#delete_snake_popup" onclick="resetSnakeId('+thissnake[i].id+')" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-mini="true" data-icon="delete" data-iconpos="right">Delete</a>' +
              '<div data-role="popup" id="delete_snake_popup" data-theme="a" data-overlay-theme="a">' +
              '<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>' +
              '<h3>Delete Snake?</h3>' +
              '<p>Are you sure you want to delete this snake? This action cannot be undone.<p>' +
              '<form id="mysnakes_deletesnake" class="delete" data-ajax="false" action="..." onsubmit="return deletesnakeForm(this)">' +
              '<input type="hidden" class="input" name="mysnakes_snakeid" id="mysnakes_snakeid" value="'+thissnake[i].id+'" />' +
              '<input type="submit" data-theme="a" value="Delete" />' +
              '</form>' +
              '</div>' + //end of delete feeding popup
              '</div>'+ //end of controlgroup
              '<div id="mysnakes_con2">'+
              '<div id="mysnakes_qr_desc"><img src="http://www.feralmedia.ca/FPTest/images/qr_desc.png" height="100" width="165"/></div>'+
              '<div id="mysnakes_qr_img"><img src="http://www.feralmedia.ca/FPTest/images/QR/'+thissnake[i].qrphoto+'" height="100" width="100" style="border-radius:20px;"/></div>'+
              '</div>' +
              '</div>'+              
              '<div data-role="controlgroup" data-type="horizontal" id="qr_buttons">' +
              '<a href="#qr_generate_popup" onClick="resetSnakeQRId('+thissnake[i].id+'); resetSnakeQRName(\''+thissnake[i].name+'\');" data-role="button" data-rel="popup" data-position-to="window" data-inline="true" data-mini="true" data-icon="gear" data-iconpos="right">Generate QR</a>' +
              '<div data-role="popup" id="qr_generate_popup" data-theme="a" data-overlay-theme="a" data-transition="pop">' +
              '<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>' +
              '<p>Please provide an email below so we can send you the generated QR code.<p>' +
              '<form id="mysnakes_generateqr" data-ajax="false" action="..." onsubmit="return qrForm(this)">' +
              '<input type="hidden" class="input" name="mysnakes_qrsnakeid" id="mysnakes_qrsnakeid" value="'+thissnake[i].id+'" />' +
              '<input type="hidden" class="input" name="mysnakes_qrsnakename" id="mysnakes_qrsnakename" value="'+thissnake[i].name+'" />' +
              '<input type="email" class="input" name="mysnakes_qrsnakeemail" id="mysnakes_qrsnakeemail" placeholder="Email:" data-theme="a" value=""  />'+
              '<input type="submit" data-theme="a" value="Generate QR" />' +
              '</form>' +
              '</div>' +
              '<a href="#qr_email_popup" onClick="resetSnakeQRId2('+thissnake[i].id+'); resetSnakeQRName2(\''+thissnake[i].name+'\');" data-role="button" data-rel="popup" data-position-to="window" data-inline="true" data-mini="true" data-icon="email" data-iconpos="right">Email QR</a>' +
              '<div data-role="popup" id="qr_email_popup" data-theme="a" data-overlay-theme="a" data-transition="pop">' +
              '<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>' +
              '<p>Please provide an email below so we can send you the generated QR code.<p>' +
              '<form id="email_qr_form" data-ajax="false" action="..." onsubmit="return emailQRForm(this)">' +
              '<input type="hidden" class="input" name="qr_email_id" id="qr_email_id" value="'+thissnakeid+'" />' +
              '<input type="hidden" class="input" name="mysnakes_qremailname" id="mysnakes_qremailname" value="'+thissnake[i].name+'" />' +
              '<input type="email" class="input" name="qr_email" id="qr_email" placeholder="Email:" data-theme="a" value=""  />'+
              '<input type="submit" data-theme="a" value="Email QR" />' +
              '</form>' +
              '</div>' +
              '</div>'+ //end of controlgroup              
              '<a href="#mysnakes_feedingdetails" data-transition="slide" onClick="getFeeding();" data-role="button" data-icon="arrow-r" data-iconpos="right">Feeding</a>'+
              '<a href="#mysnakes_sheddingdetails" data-transition="slide" onClick="getShedding();" data-role="button" data-icon="arrow-r" data-iconpos="right">Shedding</a>' +
              '<a href="#mysnakes_weightdetails" data-transition="slide" onClick="getWeight();" data-role="button" data-icon="arrow-r" data-iconpos="right">Weight</a>' +
              '<a href="#mysnakes_lengthdetails" data-transition="slide" onClick="getLength();" data-role="button" data-icon="arrow-r" data-iconpos="right">Length</a>';
              }
          $("#mysnakes_maindetails").trigger("create"); //force refreses page for buttons
          $('#this_snake').button('refresh');
	});
    $.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?lastfed="+localStorage.getItem('Snakeid'), function(lastfed){
    for (var i=0; i<lastfed.length; i++) {
        document.getElementById('last_fed').innerHTML += '<span class="snake_heading">Last Fed:</span> '+lastfed[i].date;
    }
    });
}

// resets snake id value in generate QR form
function resetSnakeQRId(id) {
	document.getElementById("mysnakes_qrsnakeid").value = id;
	document.getElementById("mysnakes_qrsnakeemail").value = "";
}

// resets snake name value in generate QR form
function resetSnakeQRName(name) {
	document.getElementById("mysnakes_qrsnakename").value = name;
}

// resets snake id value in email QR form
function resetSnakeQRId2(id) {
	document.getElementById("qr_email_id").value = id;
	document.getElementById("qr_email").value = "";
}

// resets snake name value in generate QR form
function resetSnakeQRName2(name) {
	document.getElementById("mysnakes_qremailname").value = name;
}
function resetSnakeId(Snakeid) {
	document.getElementById("mysnakes_snakeid").value = Snakeid;
}

function clearContent(sec) {
	document.getElementById(sec).innerHTML="";
}

function editSnake(snakeid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thissnake="+snakeid, function(thissnake){
	clearContent('edit_snake_form');
	for (var i=0; i<thissnake.length; i++) {
		document.getElementById('edit_snake_form').innerHTML += 
		'<h3>Edit Snake</h3>' +
			'<form id=\"mysnakes_editsnake\" data-ajax="false" action="..." onsubmit=\"return editsnakeForm(this)\">' +
					'<input type="hidden" class="input" name="mysnakes_editsnakeid" id="mysnakes_editsnakeid" value="'+snakeid+'" />' +	
					'Name:' +
					'<input type="text" class="input" name="mysnakes_editsnakename" id="mysnakes_editsnakename" data-theme="a" value="'+thissnake[i].name+'" />' +
					'Morph:' +
					'<input type="text" class="input" name="mysnakes_editsnakemorph" id="mysnakes_editsnakemorph" data-theme="a" value="'+thissnake[i].morph+'"  />' +
					'Sex:' +
					'<select id="mysnakes_editsnakesex" name="mysnakes_editsnakesex">' +
						'<option value="'+thissnake[i].sex+'">'+thissnake[i].sex+'</option>' +
						'<option value="Male">Male</option>' +
						'<option value="Female">Female</option>' +
					'</select>' +
					'<input type="submit" data-theme="a" value="EDIT SNAKE" />' +
					'</form>'+
					'<div id="edit_snake_errors"></div>';
	}	
	$("#mysnakes_editsnake").trigger("create"); //force refreses page for control group
	$('#mysnakes_editsnake').page("destroy").page();	
	});
}

<!------------- FEEDING -------------------><!------------- FEEDING -------------------><!------------- FEEDING ------------------->

<!-- FUNCTION GETS FEEDING RECORDS -->

function getFeeding() {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?allfeed="+localStorage.getItem('Snakeid'), function(feed){
	clearContent('feeding_list');
	for (var i=0; i<feed.length; i++) {
		document.getElementById('feeding_list').innerHTML += 
		'<li><a href="#this_feeding" data-transition="slide" onClick="getthisFeeding('+feed[i].id+');"><h1>'+feed[i].date+'</h1></a></li>';
	}
	$('#feeding_list').listview('refresh'); //refreshes collapsible sets
	});
}

<!-- FUNCTION GETS THIS FEEDING RECORD -->

function getthisFeeding(feedid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thisfeed="+feedid, function(thisfeed){
	clearContent('this_feed');
	for (var i=0; i<thisfeed.length; i++) {
		document.getElementById('this_feed').innerHTML += 
		'<h3>'+thisfeed[i].date+'</h3>' +
		'<span class="breeding_heading">Quantity:</span><span class="breeding_info"> '+thisfeed[i].quantity + '</span><br />'+
		'<span class="breeding_heading">Type:</span><span class="breeding_info"> '+thisfeed[i].type + '</span><br />'+
		'<span class="breeding_heading">Size:</span><span class="breeding_info"> '+thisfeed[i].size + '</span><br />'+
		'<span class="breeding_heading">Refused:</span><span class="breeding_info"> '+thisfeed[i].refused + '</span><br />'+
		'<span class="breeding_heading">Weight:</span><span class="breeding_info"> '+thisfeed[i].weight + '</span><br />'+
		'<span class="breeding_heading">Notes:</span><span class="breeding_info"> '+thisfeed[i].notes +
			'</span><div data-role="controlgroup" data-type="horizontal" id="feeding_buttons">' +
				'<a href="#mysnakes_editfeeding"  data-transition="slide" onclick="editFeeding('+feedid+')" data-role="button" data-inline="true" data-mini="true" data-icon="edit" data-iconpos="right">Edit</a>' +
				'<a href="#delete_feeding_popup" onclick="resetFeedId('+feedid+')" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-mini="true" data-icon="delete" data-iconpos="right">Delete</a>' + 
				'<div data-role="popup" id="delete_feeding_popup" data-theme="a" data-overlay-theme="a">' +
					'<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>' +
					'<h3>Delete Feeding?</h3>' +
					'<p>Are you sure you want to delete this feeding? This action cannot be undone.<p>' +					
					'<form id="mysnakes_deletefeeding" class="delete" data-ajax="false" action="..." onsubmit="return deletefeedingForm(this)">' +
						'<input type="hidden" class="input" name="mysnakes_feedid" id="mysnakes_feedid" value="'+feedid+'" />' +
						'<input type="submit" data-theme="a" value="Delete" />' +
					'</form>'
				'</div>' + //end of delete feeding popup
			'</div>'; //end of controlgroup
	}	
	$('#feeding_buttons').controlgroup('refresh'); //refreshes control group
	$("#this_feeding").trigger("create"); //force refreses page for control group	
	});
}

function resetFeedId(id) {
	document.getElementById("mysnakes_feedid").value = id;
}

function getAddFeedingForm() {
	clearContent('add_feeding_form');
	var MyDate = new Date();
	var MyDateString;
	MyDate.setDate(MyDate.getDate());
	MyDateString = ('0' + (MyDate.getMonth()+1)).slice(-2) + '/' + ('0' + MyDate.getDate()).slice(-2) + '/'  + MyDate.getFullYear();
	document.getElementById("add_feeding_form").innerHTML = '<h3>Add Feeding</h3><form id="mysnakes_addfeeding" data-ajax="false" action="..." onsubmit="return feedingForm(this)"><input type=\"date\" name=\"mysnakes_feedingdate\" id=\"mysnakes_feedingdate\" value=\"'+MyDateString+'\"  />'+
        '<div id="add_feeding_errors"></div>'+
    '<select id="mysnakes_feedingquantity" name="mysnakes_feedingquantity">'+
    	'<option data-placeholder="true" value=\'Quantity\'>Quantity</option>'+
        '<option value=\'1\'>1</option>'+
        '<option value=\'2\'>2</option>'+
        '<option value=\'3\'>3</option>'+
        '<option value=\'4\'>4</option>'+
        '<option value=\'5\'>5</option>'+
        '<option value=\'6\'>6</option>'+
        '<option value=\'7\'>7</option>'+
        '<option value=\'8\'>8</option>'+
        '<option value=\'9\'>9</option>'+
        '<option value=\'10\'>10</option>'+
     '</select>'+
	 '<select id="mysnakes_feedingsize" name="mysnakes_feedingsize">'+
     	'<option data-placeholder="true" value=\'Size\'>Size</option>'+
        '<option value=\'Pinkie\'>Pinkie</option>'+
        '<option value=\'Fuzzy\'>Fuzzy</option>'+
        '<option value=\'Hopper\'>Hopper</option>'+
        '<option value=\'Weaned\'>Weaned</option>'+
        '<option value=\'Adult\'>Adult</option>'+
        '<option value=\'Jumbo\'>Jumbo</option>'+
     '</select>'+
	 '<select id="mysnakes_feedingtype" name="mysnakes_feedingtype">'+
     	'<option data-placeholder="true" value=\'Type\'>Type</option>'+
        '<option value=\'Mouse\'>Mouse</option>'+
        '<option value=\'Rat\'>Rat</option>'+
        '<option value=\'Hampster\'>Hampster</option>'+
        '<option value=\'Guinea Pig\'>Guinea Pig</option>'+
        '<option value=\'Bunny\'>Bunny</option>'+
     '</select>'+
	 '<input type="text" class="input" name="mysnakes_feedingweight" id="mysnakes_feedingweight" placeholder="Weight:" data-theme="a" value="" />'+
	 'Refused?'+
     	'<select id="mysnakes_feedingrefused" name="mysnakes_feedingrefused">'+
        	'<option value=\'No\'>No</option>'+
            '<option value=\'Yes\'>Yes</option>'+
        '</select>'+
	'Notes:'+
    	'<textarea cols="40" rows="8" name="mysnakes_feedingnotes" id="mysnakes_feedingnotes" class="input"></textarea>'+
	'<input type="submit" data-theme="a" value="ADD FEEDING" /></form>';
	$('#add_feeding').page("destroy").page();
}

<!-- FUNCTION GETS THIS FEEDING RECORD FOR EDITING -->

function editFeeding(feedid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thisfeed="+feedid, function(thisfeed){
	clearContent('edit_feeding_form');
	for (var i=0; i<thisfeed.length; i++) {
		document.getElementById('edit_feeding_form').innerHTML += 
		'<h3>Edit Feeding</h3>' +
			'<form id=\"mysnakes_editfeeding\" data-ajax="false" action="..." onsubmit=\"return editfeedingForm(this)\">' +
					'<input type="hidden" class="input" name="mysnakes_editfeedid" id="mysnakes_editfeedid" value="'+feedid+'" />' +
					'Quantity:'+
					'<select id="mysnakes_editfeedingquantity" name="mysnakes_editfeedingquantity">'+
						'<option value="'+thisfeed[i].quantity+'">'+thisfeed[i].quantity+'</option>'+
						'<option value=\'1\'>1</option>'+
						'<option value=\'2\'>2</option>'+
						'<option value=\'3\'>3</option>'+
						'<option value=\'4\'>4</option>'+
						'<option value=\'5\'>5</option>'+
						'<option value=\'6\'>6</option>'+
						'<option value=\'7\'>7</option>'+
						'<option value=\'8\'>8</option>'+
						'<option value=\'9\'>9</option>'+
						'<option value=\'10\'>10</option>'+
					 '</select>'+
					 'Size:'+
					 '<select id="mysnakes_editfeedingsize" name="mysnakes_editfeedingsize">'+
						'<option value="'+thisfeed[i].size+'">'+thisfeed[i].size+'</option>'+
						'<option value=\'Pinkie\'>Pinkie</option>'+
						'<option value=\'Fuzzy\'>Fuzzy</option>'+
						'<option value=\'Hopper\'>Hopper</option>'+
						'<option value=\'Weaned\'>Weaned</option>'+
						'<option value=\'Adult\'>Adult</option>'+
						'<option value=\'Jumbo\'>Jumbo</option>'+
					 '</select>'+
					 'Type:'+
					 '<select id="mysnakes_editfeedingtype" name="mysnakes_editfeedingtype">'+
						'<option value="'+thisfeed[i].type+'">'+thisfeed[i].type+'</option>'+
						'<option value=\'Mouse\'>Mouse</option>'+
						'<option value=\'Rat\'>Rat</option>'+
						'<option value=\'Hampster\'>Hampster</option>'+
						'<option value=\'Guinea Pig\'>Guinea Pig</option>'+
						'<option value=\'Bunny\'>Bunny</option>'+
					 '</select>'+
					 'Weight:'+
					 '<input type="text" class="input" name="mysnakes_editfeedingweight" id="mysnakes_editfeedingweight" data-theme="a" value="'+thisfeed[i].weight+'" />'+
					 'Refused?'+
						'<select id="mysnakes_editfeedingrefused" name="mysnakes_editfeedingrefused">'+
							'<option value="'+thisfeed[i].refused+'">'+thisfeed[i].refused+'</option>'+
							'<option value=\'No\'>No</option>'+
							'<option value=\'Yes\'>Yes</option>'+
						'</select>'+
					 'Notes:'+
						'<textarea cols="40" rows="8" name="mysnakes_editfeedingnotes" id="mysnakes_editfeedingnotes" class="input">'+thisfeed[i].notes+'</textarea>'+
					'<input type="submit" data-theme="a" value="EDIT FEEDING" />' +
			'</form>';
	}	
	$("#mysnakes_editfeeding").trigger("create"); //force refreses page for control group
	$('#mysnakes_editfeeding').page("destroy").page();	
	});
}

<!------------- SHEDDING -------------------><!------------- SHEDDING -------------------><!------------- SHEDDING ------------------->

<!-- FUNCTION GETS SHEDDING RECORDS -->

function getShedding() {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?allshed="+localStorage.getItem('Snakeid'), function(shed){
	clearContent('shedding_list');
	for (var i=0; i<shed.length; i++) {
		document.getElementById('shedding_list').innerHTML += 
		'<li><a href="#this_shedding" data-transition="slide" onClick="getthisShedding('+shed[i].id+');"><h1>'+shed[i].date+'</h1></a></li>';
	}
	$('#shedding_list').listview('refresh'); //refreshes collapsible sets	
	});
}

<!-- FUNCTION GETS THIS SHEDDING RECORD -->

function getthisShedding(shedid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thisshed="+shedid, function(thisshed){
	clearContent('this_shed');
	for (var i=0; i<thisshed.length; i++) {
		document.getElementById('this_shed').innerHTML += 
		'<h3>'+thisshed[i].date+'</h3>' +
		'<span class="breeding_heading">Notes:</span><span class="breeding_info"> '+thisshed[i].notes +
			'</span><div data-role="controlgroup" data-type="horizontal" id="shedding_buttons">' +
				'<a href="#mysnakes_editshedding"  data-transition="slide" onclick="editShedding('+shedid+')" data-role="button" data-inline="true" data-mini="true" data-icon="edit" data-iconpos="right">Edit</a>' +
				'<a href="#delete_shedding_popup" onclick="resetId('+shedid+')" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-mini="true" data-icon="delete" data-iconpos="right">Delete</a>' + 
				'<div data-role="popup" id="delete_shedding_popup" data-theme="a" data-overlay-theme="a">' +
					'<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>' +
					'<h3>Delete Shedding?</h3>' +
					'<p>Are you sure you want to delete this shedding? This action cannot be undone.<p>' +								
					'<form id="mysnakes_deleteshedding" class="delete" data-ajax="false" action="..." onsubmit="return deletesheddingForm(this)">' +
						'<input type="hidden" class="input" name="mysnakes_shedid" id="mysnakes_shedid" value="'+shedid+'" />' +
						'<input type="submit" data-theme="a" value="Delete" />' +
					'</form>'
				'</div>' + //end of delete shedding popup
			'</div>'; //end of controlgroup
	}
	$('#shedding_buttons').controlgroup('refresh'); //refreshes control group
	$("#this_shedding").trigger("create"); //force refreses page for control group	
	});
}

function resetId(id) {
	document.getElementById("mysnakes_shedid").value = id;
}

function getAddSheddingForm() {
	clearContent('add_shedding_form');
	var MyDate = new Date();
	var MyDateString;
	MyDate.setDate(MyDate.getDate());
	MyDateString = ('0' + (MyDate.getMonth()+1)).slice(-2) + '/' + ('0' + MyDate.getDate()).slice(-2) + '/'  + MyDate.getFullYear();
	document.getElementById("add_shedding_form").innerHTML = '<h3>Add Shedding</h3><form id="mysnakes_addshedding" data-ajax="false" action="..." onsubmit="return sheddingForm(this)"><input type=\"date\" name=\"mysnakes_sheddingdate\" id=\"mysnakes_sheddingdate\" value=\"'+MyDateString+'\"  />Notes:<textarea cols="40" rows="8" name="mysnakes_sheddingnotes" id="mysnakes_sheddingnotes" class="input"></textarea><input type="submit" data-theme="a" value="ADD SHEDDING" /></form>'+
	'<div id="add_shedding_errors"></div>';
	$('#add_shedding').page("destroy").page();
}

<!-- FUNCTION GETS THIS SHEDDING RECORD FOR EDITING -->

function editShedding(shedid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thisshed="+shedid, function(thisshed){
	clearContent('edit_shedding_form');
	for (var i=0; i<thisshed.length; i++) {
		document.getElementById('edit_shedding_form').innerHTML += 
		'<h3>Edit Shedding</h3>' +
			'<form id=\"mysnakes_editshedding\" data-ajax="false" action="..." onsubmit=\"return editsheddingForm(this)\">' +
					'<input type="hidden" class="input" name="mysnakes_editshedid" id="mysnakes_editshedid" value="'+shedid+'" />' +
                    'Notes:' +
					'<textarea cols=\"40\" rows=\"8\" name=\"mysnakes_editsheddingnotes\" id=\"mysnakes_editsheddingnotes\" class=\"input\">'+thisshed[i].notes+'</textarea>' +
                    '<input type=\"submit\" data-theme=\"a\" value=\"EDIT SHED\" />'+
            '</form>'
	}
	$("#mysnakes_editshedding").trigger("create"); //force refreses page for control group
	$('#mysnakes_editshedding').page("destroy").page();	
	});
}

<!------------- WEIGHT -------------------><!------------- WEIGHT -------------------><!------------- WEIGHT ------------------->

<!-- FUNCTION GETS WEIGHT RECORDS -->

function getWeight() {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?allweight="+localStorage.getItem('Snakeid'), function(weight){
	clearContent('weight_list');
	for (var i=0; i<weight.length; i++) {
		document.getElementById('weight_list').innerHTML += 
		'<li><a href="#this_weightdetails" data-transition="slide" onClick="getthisWeight('+weight[i].id+');"><h1>'+weight[i].date+'</h1></a></li>';
	}
	$('#weight_list').listview('refresh'); //refreshes collapsible sets	
	});
}

<!-- FUNCTION GETS THIS WEIGHT RECORD -->

function getthisWeight(weightid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thisweight="+weightid, function(thisweight){
	clearContent('this_weight');	
	for (var i=0; i<thisweight.length; i++) {
		document.getElementById('this_weight').innerHTML += 
		'<h3>'+thisweight[i].date+'</h3>' +
		'<span class="breeding_heading">Weight:</span><span class="breeding_info"> '+thisweight[i].weight +
			'</span><div data-role="controlgroup" data-type="horizontal" id="weight_buttons">' +
				'<a href="#mysnakes_editweight"  data-transition="slide" onclick="editWeight('+weightid+')" data-role="button" data-inline="true" data-mini="true" data-icon="edit" data-iconpos="right">Edit</a>' +
				'<a href="#delete_weight_popup" onclick="resetWeight('+weightid+')" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-mini="true" data-icon="delete" data-iconpos="right">Delete</a>' + 
				'<div data-role="popup" id="delete_weight_popup" data-theme="a" data-overlay-theme="a">' +
					'<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>' +
					'<h3>Delete Weight?</h3>' +
					'<p>Are you sure you want to delete this weight? This action cannot be undone.<p>' +										
					'<form id="mysnakes_deleteweight" class="delete" data-ajax="false" action="..." onsubmit="return deleteweightForm(this)">' +
						'<input type="hidden" class="input" name="mysnakes_weightid" id="mysnakes_weightid" value="'+weightid+'" />' +
						'<input type="submit" data-theme="a" value="Delete" />' +
					'</form>'
				'</div>' + //end of delete shedding popup
			'</div>'; //end of controlgroup
	}
	$('#weight_buttons').controlgroup('refresh'); //refreshes control group
	$("#this_weight").trigger("create"); //force refreses page for control group	
	});
}

function resetWeight(weightid) {
	document.getElementById("mysnakes_weightid").value = weightid;
}

function getAddWeightForm() {
	clearContent('add_weight_form');
	var MyDate = new Date();
	var MyDateString;
	MyDate.setDate(MyDate.getDate());
	MyDateString = ('0' + (MyDate.getMonth()+1)).slice(-2) + '/' + ('0' + MyDate.getDate()).slice(-2) + '/'  + MyDate.getFullYear();
	document.getElementById("add_weight_form").innerHTML = '<h3>Add Weight</h3><form id="mysnakes_addweight" data-ajax="false" action="..." onsubmit="return weightForm(this)"><input type=\"date\" name=\"mysnakes_weightdate\" id=\"mysnakes_weightdate\" value=\"'+MyDateString+'\"  /><div id="add_weight_errors"></div><input type="text" class="input" name="mysnakes_weightvalue" id="mysnakes_weightvalue" placeholder="Weight:" data-theme="a" value="" /><input type="submit" data-theme="a" value="ADD WEIGHT" /></form>';
	$('#add_weight').page("destroy").page();
}

<!-- FUNCTION GETS THIS WEIGHT RECORD FOR EDITING -->

function editWeight(weightid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thisweight="+weightid, function(thisweight){
	clearContent('edit_weight_form');
	for (var i=0; i<thisweight.length; i++) {
		document.getElementById('edit_weight_form').innerHTML += '<h3>Edit Weight</h3><form id="mysnakes_editweight" data-ajax="false" action="..." onsubmit="return editweightForm(this)"><input type="hidden" class="input" name="mysnakes_editweightid" id="mysnakes_editweightid" value="'+weightid+'" />'+
              '<div id="edit_weight_errors"></div>'+
              '<input type="text" class="input" name="mysnakes_editweightvalue" id="mysnakes_editweightvalue" placeholder="Weight:" data-theme="a" value="'+thisweight[i].weight+'" /><input type="submit" data-theme="a" value="EDIT WEIGHT" /></form>';
	}
	$("#mysnakes_editweight").trigger("create"); //force refreses page for control group
	$('#mysnakes_editweight').page("destroy").page();	
	});
}

<!------------- LENGTH -------------------><!------------- LENGTH -------------------><!------------- LENGTH ------------------->

<!-- FUNCTION GETS LENGTH RECORDS -->

function getLength() {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?alllength="+localStorage.getItem('Snakeid'), function(length){
	clearContent('length_list');
	for (var i=0; i<length.length; i++) {
		document.getElementById('length_list').innerHTML += 
		'<li><a href="#this_lengthdetails" data-transition="slide" onClick="getthisLength('+length[i].id+');"><h1>'+length[i].date+'</h1></a></li>';
	}	
	$('#length_list').listview('refresh'); //refreshes collapsible sets	
	});
}

<!-- FUNCTION GETS THIS LENGTH RECORD -->

function getthisLength(lengthid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thislength="+lengthid, function(thislength){
	clearContent('this_length');	
	for (var i=0; i<thislength.length; i++) {
		document.getElementById('this_length').innerHTML += 
		'<h3>'+thislength[i].date+'</h3>' +
		'<span class="breeding_heading">Length:</span><span class="breeding_info"> '+thislength[i].length +
			'</span><div data-role="controlgroup" data-type="horizontal" id="length_buttons">' +
				'<a href="#mysnakes_editlength"  data-transition="slide" onclick="editLength('+lengthid+')" data-role="button" data-inline="true" data-mini="true" data-icon="edit" data-iconpos="right">Edit</a>' +
				'<a href="#delete_length_popup" onclick="resetLength('+lengthid+')" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-mini="true" data-icon="delete" data-iconpos="right">Delete</a>' + 
				'<div data-role="popup" id="delete_length_popup" data-theme="a" data-overlay-theme="a">' +
					'<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>' +
					'<h3>Delete Length?</h3>' +
					'<p>Are you sure you want to delete this length? This action cannot be undone.<p>' +										
					'<form id="mysnakes_deletelength" class="delete" data-ajax="false" action="..." onsubmit="return deletelengthForm(this)">' +
						'<input type="hidden" class="input" name="mysnakes_lengthid" id="mysnakes_lengthid" value="'+lengthid+'" />' +
						'<input type="submit" data-theme="a" value="Delete" />' +
					'</form>'+
				'</div>' + //end of delete shedding popup
			'</div>'; //end of controlgroup
	}
	$('#length_buttons').controlgroup('refresh'); //refreshes control group
	$("#this_length").trigger("create"); //force refreses page for control group	
	});
}

function resetLength(lengthid) {
	document.getElementById("mysnakes_lengthid").value = lengthid;
}

function getAddLengthForm() {
	clearContent('add_length_form');
	var MyDate = new Date();
	var MyDateString;
	MyDate.setDate(MyDate.getDate());
	MyDateString = ('0' + (MyDate.getMonth()+1)).slice(-2) + '/' + ('0' + MyDate.getDate()).slice(-2) + '/'  + MyDate.getFullYear();
	document.getElementById("add_length_form").innerHTML = '<h3>Add Length</h3><form id=\"mysnakes_addlength\" data-ajax="false" action="..." onsubmit=\"return lengthForm(this)\"><input type=\"date\" name=\"mysnakes_lengthdate\" id=\"mysnakes_lengthdate\" value=\"'+MyDateString+'\"  /><div id="add_length_errors"></div><input type=\"text\" class=\"input\" name=\"mysnakes_lengthvalue\" id=\"mysnakes_lengthvalue\" placeholder=\"Length:\" data-theme=\"a\" value=\"\" /><input type=\"submit\" data-theme=\"a\" value=\"ADD LENGTH\" /></form>';
	$('#add_length').page("destroy").page();
}

<!-- FUNCTION GETS THIS LENGTH RECORD FOR EDITING -->

function editLength(lengthid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thislength="+lengthid, function(thislength){
	clearContent('edit_length_form');  
	for (var i=0; i<thislength.length; i++) {
		document.getElementById('edit_length_form').innerHTML += 
		'<h3>Edit Length</h3><form id=\"mysnakes_editlength\" data-ajax="false" action="..." onsubmit=\"return editlengthForm(this)\"><input type="hidden" class="input" name="mysnakes_editlengthid" id="mysnakes_editlengthid" value="'+lengthid+'" />'+              
              '<div id="edit_length_errors"></div>'+
              'Length:<input type=\"text\" class=\"input\" name=\"mysnakes_editlengthvalue\" id=\"mysnakes_editlengthvalue\" placeholder=\"\" data-theme=\"a\" value=\"'+thislength[i].length+'\" /><input type=\"submit\" data-theme=\"a\" value=\"EDIT LENGTH\" /></form>';
		}
	$("#mysnakes_editlength").trigger("create"); //force refreses page for control group
	$('#mysnakes_editlength').page("destroy").page();	
	});
}

<!------------- PAIRINGS -------------------><!------------- PAIRINGS -------------------><!------------- PAIRINGS ------------------->

function getPairingValues() {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?allsnakes="+localStorage.getItem('Userid'), function(mysnakes){
	clearContent('pairings_addmale');
	clearContent('pairings_addfemale');
    clearContent('add_pairing_errors');
	document.getElementById('pairings_addmale').innerHTML += '<option value="Male">Male</option>';
	document.getElementById('pairings_addfemale').innerHTML += '<option value="Female">Female</option>';
	for (var i=0; i<mysnakes.length; i++) {	
		var MyDate = new Date();
		var MyDateString;
		MyDate.setDate(MyDate.getDate());
		MyDateString = ('0' + (MyDate.getMonth()+1)).slice(-2) + '/' + ('0' + MyDate.getDate()).slice(-2) + '/'  + MyDate.getFullYear();
		document.getElementById("pairings_addpairingsdate").value = MyDateString;
		document.getElementById('pairings_addmale').innerHTML += 
		'<option value="' + mysnakes[i].id + '">' + mysnakes[i].name + '</option>';
		document.getElementById('pairings_addfemale').innerHTML += 
		'<option value="' + mysnakes[i].id + '">' + mysnakes[i].name + '</option>';
	}
	$("#add_pairings").trigger("create"); //force refreses page for control group
	$('#add_pairings').page("destroy").page();	
	});
}

<!-- FUNCTION GETS MY PAIRINGS -->

function getMyPairings() {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?allpairings="+localStorage.getItem('Userid'), function(pairings){
	$('#PairingsList li').remove(); /* Remove list items, then run forloop */
	for (var i=0; i<pairings.snakes[0].males.length; i++) {
		document.getElementById('PairingsList').innerHTML += 
		'<li>' + '<a href="#breeding_thispairing" data-transition="slide" onclick="getThisPairing('+pairings.snakes[0].males[i].id+')">' +
		'<h1>' + pairings.snakes[0].males[i].name + ' x ' + pairings.snakes[1].females[i].name + '<br />' + pairings.snakes[0].males[i].date+'</h1></p></a></li>';
	}
	$('#PairingsList').listview('refresh'); // refresh the listview	
	});
}

function getThisPairing(pairid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thispairing="+pairid, function(thispairing){
              clearContent('this_pairing');
              for (var i=0; i<thispairing.snakes[0].males.length; i++) {
              document.getElementById('this_pairing').innerHTML +=
              '<h3>Pairing</h3>'+
              '<span class="breeding_heading">Male: </span><span class="breeding_info">' + thispairing.snakes[0].males[i].name + '</span><br /><span class="breeding_heading">Female: </span><span class="breeding_info">' + thispairing.snakes[1].females[i].name + '</span><br /><span class="breeding_heading">Start Date: </span><span class="breeding_info">' + thispairing.snakes[0].males[i].date+
              '</span><div data-role="controlgroup" data-type="horizontal" id="pair_buttons">' +
              '<a href="#breeding_editpair"  data-transition="slide" onclick="editPair('+pairid+')" data-role="button" data-inline="true" data-mini="true" data-icon="edit" data-iconpos="right">Edit</a>' +
              '<a href="#delete_pair_popup" onclick="resetThisPair('+pairid+')" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-mini="true" data-icon="delete" data-iconpos="right">Delete</a>' +
              '<div data-role="popup" id="delete_pair_popup" data-theme="a" data-overlay-theme="a">' +
              '<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>' +
              '<h3>Delete Pair?</h3>' +
              '<p>Are you sure you want to delete this pair? This action cannot be undone.<p>' +
              '<form id="mysnakes_deletepair" class="delete" action="#" onsubmit="return deletepairForm(this)">' +
              '<input type="hidden" class="input" name="breeding_pairid" id="breeding_pairid" value="'+pairid+'" />' +
              '<input type="submit" data-theme="a" value="Delete" />' +
              '</form>'
              '</div>' + //end of delete shedding popup
              '</div>'; //end of controlgroup
              }		
              $('#pair_buttons').controlgroup('refresh'); //refreshes control group
              $("#this_pairing").trigger("create"); //force refreses page for control group
              });
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?allevents="+pairid, function(events){
		$('#MyEventsList li').remove();
		for (var i=0; i<events.length; i++) {
			document.getElementById('MyEventsList').innerHTML += 
			'<li>' + '<a href="#this_event_main" data-transition="slide" onclick="getthisEvent('+events[i].id+');">' +
			'<h1>' + events[i].events + '<br />Date: ' + events[i].date+'</h1></p></a></li>';
		}			
		$('#MyEventsList').listview('refresh');
	});
	clearContent('add_event_button');
	document.getElementById('add_event_button').innerHTML += '<a href="#add_event" data-transition="slide" onclick="getAddEventForm('+pairid+');" data-role="button" data-inline="true" data-mini="true" data-icon="plus">Add Event</a>';	
	document.getElementById('pairing_clutches').innerHTML = '<h3>Clutch Results</h3><div id="pairing_clutchdetails"></div><div id="add_clutch_button"></div>';
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?allclutches="+pairid, function(clutches){
		for (var i=0; i<clutches.length; i++) {
			var clutchid = clutches[i].id;
			document.getElementById('pairing_clutchdetails').innerHTML += 
			'<span class="breeding_heading">Date: </span><span class="breeding_info">'+clutches[i].date+'</span><br /><span class="breeding_heading">Quantity: </span><span class="breeding_info">'+clutches[i].quantity+'</span><br /><span class="breeding_heading">Weight: </span><span class="breeding_info">'+clutches[i].weight+'</span><br /><span class="breeding_heading">Notes: </span><span class="breeding_info">'+clutches[i].notes+
			'</span><div data-role="controlgroup" data-type="horizontal" id="clutch_buttons">' +
				'<a href="#breeding_editclutch"  data-transition="slide" onclick="editClutch('+clutches[i].id+')" data-role="button" data-inline="true" data-mini="true" data-icon="edit" data-iconpos="right">Edit</a>' +
				'<a href="#delete_clutch_popup" onclick="resetPairId('+clutches[i].id+')" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-mini="true" data-icon="delete" data-iconpos="right">Delete</a>' + 
				'<div data-role="popup" id="delete_clutch_popup" data-theme="a" data-overlay-theme="a">' +
					'<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>' +
					'<h3>Delete Clutch?</h3>' +
					'<p>Are you sure you want to delete this clutch? This action cannot be undone.<p>' +					
					'<form id="mysnakes_deleteclutch" class="delete" data-ajax="false" action="..." onsubmit="return deleteclutchForm(this)">' +
						'<input type="hidden" class="input" name="breeding_clutchid" id="breeding_clutchid" value="'+clutches[i].id+'" />' +
						'<input type="submit" data-theme="a" value="Delete" />' +
					'</form>'
				'</div>' + //end of delete shedding popup
			'</div>'; //end of controlgroup
		}
		//Makes the add clutch button dissapear if there is already a clutch added for the pair
		if(clutchid==null) {
			document.getElementById('add_clutch_button').innerHTML += '<a href="#add_clutch" data-transition="slide" onclick="getAddClutchForm('+pairid+');" data-role="button" data-inline="true" data-mini="true" data-icon="plus">Add Clutch</a>';
		} else if(clutchid!=null){
			document.getElementById('add_clutch_button').innerHTML += '';
		}
		$('#clutch_buttons').controlgroup('refresh'); //refreshes control group
		$("#breeding_thispairing").trigger("create"); //force refreses page for control group
	});
}

function editPair(pairid) {
    $.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?allsnakes="+localStorage.getItem('Userid'), function(editthispairing){
              clearContent('edit_pair_form');
              document.getElementById('edit_pair_form').innerHTML +=
              '<form id="mysnakes_editpairings" action="#" data-ajax="false" action="..." onsubmit="return editPairingsForm(this)">'+
              '<div id="edit_pairing_errors"></div>'+
              '<input type="hidden" class="input" name="breeding_editpairid" id="breeding_editpairid" value="'+pairid+'" />'+
              '<select id="pairings_editmale" name="pairings_editmale">'+
              '<option data-placeholder="true">Male</option>'+
              '</select>'+
              '<select id="pairings_editfemale" name="pairings_editfemale" value="Female">'+
              '<option data-placeholder="true">Female</option>'+
              '</select>'+
              '<input type="submit" data-theme="a" value="EDIT PAIRING" />'+
    		  '</form>';              
              for (var i=0; i<editthispairing.length; i++) {
              document.getElementById('pairings_editmale').innerHTML +=
              '<option value="' + editthispairing[i].id + '">' + editthispairing[i].name + '</option>';
              document.getElementById('pairings_editfemale').innerHTML +=
              '<option value="' + editthispairing[i].id + '">' + editthispairing[i].name + '</option>';
              }
              $("#breeding_editpair").trigger("create"); //force refreses page for control group
              $('#breeding_editpair').page("destroy").page();
              });
}

function resetThisPair(id) {
		document.getElementById("breeding_pairid").value = id;
}

function resetPairId(id) {
	document.getElementById("breeding_clutchid").value = id;
}

function getAddClutchForm(pairid) {
	clearContent('add_clutch_form');
	var MyDate = new Date();
	var MyDateString;
	MyDate.setDate(MyDate.getDate());
	MyDateString = ('0' + (MyDate.getMonth()+1)).slice(-2) + '/' + ('0' + MyDate.getDate()).slice(-2) + '/'  + MyDate.getFullYear();
	document.getElementById("add_clutch_form").innerHTML = '<h3>Add Clutch</h3><form id=\"breeding_addclutch\" data-ajax="false" action="..." action=\"#\" onsubmit=\"return clutchForm(this)\"><input type=\"date\" name=\"breeding_clutchdate\" id=\"breeding_clutchdate\" value=\"'+MyDateString+'\"  /><div id="add_clutch_errors"></div><input type="hidden" class="input" name="breeding_pairid" id="breeding_pairid" value="'+pairid+'" />'+
	'<select id="breeding_clutchquantity" name="breeding_clutchquantity">'+
    	'<option data-placeholder="true" value=\'Quantity\'>Quantity</option>'+
        '<option value=\'1\'>1</option>'+
        '<option value=\'2\'>2</option>'+
        '<option value=\'3\'>3</option>'+
        '<option value=\'4\'>4</option>'+
        '<option value=\'5\'>5</option>'+
        '<option value=\'6\'>6</option>'+
        '<option value=\'7\'>7</option>'+
        '<option value=\'8\'>8</option>'+
        '<option value=\'9\'>9</option>'+
        '<option value=\'10\'>10</option>'+
     '</select>'+
	'<input type=\"text\" class=\"input\" name=\"breeding_clutchweight\" id=\"breeding_clutchweight\" placeholder=\"Weight:\" data-theme=\"a\" value=\"\" />Notes:<textarea cols="40" rows="8" name="breeding_clutchnotes" id="breeding_clutchnotes" class="input"></textarea><input type=\"submit\" data-theme=\"a\" value=\"ADD CLUTCH\" /></form>';
	$('#add_clutch').page("destroy").page();
}

function editClutch(clutchid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thisclutch="+clutchid, function(thisclutch){
	clearContent('edit_clutch_form');  
	for (var i=0; i<thisclutch.length; i++) {
		document.getElementById('edit_clutch_form').innerHTML += 
		'<h3>Edit Clutch</h3><form id=\"breeding_editclutch\" data-ajax="false" action="..." onsubmit=\"return editclutchForm(this)\"><input type="hidden" class="input" name="breeding_editclutchid" id="breeding_editclutchid" value="'+clutchid+'" />'+        
        'Quantity:'+
		'<select id="breeding_editclutchquantity" name="breeding_editclutchquantity">'+
    	'<option value="'+thisclutch[i].quantity+'">'+thisclutch[i].quantity+'</option>'+
        '<option value=\'1\'>1</option>'+
        '<option value=\'2\'>2</option>'+
        '<option value=\'3\'>3</option>'+
        '<option value=\'4\'>4</option>'+
        '<option value=\'5\'>5</option>'+
        '<option value=\'6\'>6</option>'+
        '<option value=\'7\'>7</option>'+
        '<option value=\'8\'>8</option>'+
        '<option value=\'9\'>9</option>'+
        '<option value=\'10\'>10</option>'+
     '</select>'+
	'Weight:<input type=\"text\" class=\"input\" name=\"breeding_editclutchweight\" id=\"breeding_editclutchweight\" placeholder=\"\" data-theme=\"a\" value=\"'+thisclutch[i].weight+'\" />Notes:<textarea cols=\"40\" rows=\"8\" name=\"breeding_editclutchnotes\" id=\"breeding_editclutchnotes\" class=\"input\">'+thisclutch[i].notes+'</textarea><input type=\"submit\" data-theme=\"a\" value=\"EDIT CLUTCH\" /></form>';
		}
	$("#breeding_editclutch").trigger("create"); //force refreses page for control group
	$('#breeding_editclutch').page("destroy").page();
	});
}

<!------------- EVENTS -------------------><!------------- EVENTS -------------------><!------------- EVENTS ------------------->

function getAddEventForm(pairid) {
	clearContent('add_event_form');
	var MyDate = new Date();
	var MyDateString;
	MyDate.setDate(MyDate.getDate());
	MyDateString = ('0' + (MyDate.getMonth()+1)).slice(-2) + '/' + ('0' + MyDate.getDate()).slice(-2) + '/'  + MyDate.getFullYear();
	document.getElementById("add_event_form").innerHTML = '<h3>Add Event</h3><form id=\"breeding_addevent\" action=\"#\" data-ajax="false" action="..." onsubmit=\"return eventForm(this)\"><input type=\"date\" name=\"breeding_eventdate\" id=\"breeding_eventdate\" value=\"'+MyDateString+'\"  /><input type="hidden" class="input" name="events_pairid" id="events_pairid" value="'+pairid+'" /><div id="add_event_errors"></div><select id="breeding_event" name="breeding_event"><option data-placeholder="true">Event</option><option value="Temperature Cycling">Temperature Cycling</option><option value="Introduction">Introduction</option><option value="Copulation">Copulation</option><option value="Ovulation">Ovulation</option><option value="Clutch Laid">Clutch Laid</option><option value="Incubation">Incubation</option></select>Notes:<textarea cols="40" rows="8" name="breeding_eventnotes" id="breeding_eventnotes" class="input"></textarea><input type=\"submit\" data-theme=\"a\" value=\"ADD EVENTS\" /></form>';
	$('#add_event').page("destroy").page();
}

function getthisEvent(eventid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thisevent="+eventid, function(thisevent){
	clearContent('this_event');	
	for (var i=0; i<thisevent.length; i++) {
		document.getElementById('this_event').innerHTML += 
		'<h3>'+thisevent[i].date+'</h3>' +
		'<span class="breeding_heading">Event:</span><span class="breeding_info"> '+thisevent[i].eventdetails+'</span><br />'+
		'<span class="breeding_heading">Notes:</span><span class="breeding_info"> '+thisevent[i].notes + '</span>'+
			'<div data-role="controlgroup" data-type="horizontal" id="event_buttons">' +
				'<a href="#breeding_editevent"  data-transition="slide" onclick="editEvent('+eventid+')" data-role="button" data-inline="true" data-mini="true" data-icon="edit" data-iconpos="right">Edit</a>' +
				'<a href="#delete_event_popup" onclick="resetEvent('+eventid+')" data-rel="popup" data-position-to="window" data-role="button" data-inline="true" data-mini="true" data-icon="delete" data-iconpos="right">Delete</a>' + 
				'<div data-role="popup" id="delete_event_popup" data-theme="a" data-overlay-theme="a">' +
					'<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-right">Close</a>' +
					'<h3>Delete Event?</h3>' +
					'<p>Are you sure you want to delete this event? This action cannot be undone.<p>' +					
					'<form id="breeding_deleteevent" class="delete" data-ajax="false" action="..." onsubmit="return deleteeventForm(this)">' +
						'<input type="hidden" class="input" name="breeding_eventid" id="breeding_eventid" value="'+eventid+'" />' +
						'<input type="submit" data-theme="a" value="Delete" />' +
					'</form>' +
				'</div>' + //end of delete shedding popup
			'</div>'; //end of controlgroup
	}
	$('#event_buttons').controlgroup('refresh'); //refreshes control group
	$("#this_event").trigger("create"); //force refreses page for control group
	});
}

function resetEvent(id) {
	document.getElementById("breeding_eventid").value = id;
}

function editEvent(eventid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thisevent="+eventid, function(thisevent){
	clearContent('edit_event_form');  
	for (var i=0; i<thisevent.length; i++) {
		document.getElementById('edit_event_form').innerHTML += 
		'<h3>Edit Event</h3><form id=\"breeding_editevent\" data-ajax="false" action="..." onsubmit=\"return editeventForm(this)\"><input type="hidden" class="input" name="breeding_editeventid" id="breeding_editeventid" value="'+eventid+'" />'+
        'Event:<select id="breeding_event" name="breeding_event"><option value="'+thisevent[i].eventdetails+'">'+thisevent[i].eventdetails+'</option><option value="Temperature Cycling">Temperature Cycling</option><option value="Introduction">Introduction</option><option value="Copulation">Copulation</option><option value="Ovulation">Ovulation</option><option value="Clutch Laid">Clutch Laid</option><option value="Incubation">Incubation</option></select>Notes:<textarea cols=\"40\" rows=\"8\" name=\"breeding_editeventnotes\" id=\"breeding_editeventnotes\" class=\"input\">'+thisevent[i].notes+'</textarea><input type=\"submit\" data-theme=\"a\" value=\"EDIT EVENT\" /></form>';
	}
	$("#breeding_editevent").trigger("create"); //force refreses page for control group
	$('#breeding_editevent').page("destroy").page();
	});
}

<!------------- PYTHON INDEX -------------------><!------------- PYTHON INDEX -------------------><!------------- PYTHON INDEX ------------------->

<!-- FUNCTION GETS BALL PYTHONS FOR INDEX -->

function getBallPythons() {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php", function(bps){
              $('#morph_index_list li').remove(); /* Remove list items, then run forloop */
              for (var i=0; i<bps.length; i++) {
              document.getElementById('morph_index_list').innerHTML +=
              '<li id="morph_index_li">' + '<a href="#morph_details" data-transition="slide" onclick="getThisBP('+bps[i].id+')">' +
              '<h1>' + bps[i].morph + '</h1>' +
              '<p>Year Proven: '+bps[i].yearproven+'</p>'+
              '<img src="images/'+bps[i].photo+'" height="100" width="100"/></a></li>';
              }
              $('#morph_index_list').listview('refresh'); // refresh the listview
    });
}

function getThisBP(morphid) {
	$.getJSON("http://www.feralmedia.ca/FPTest/json_caller.php?thismorph="+morphid, function(morph){
              for (var i=0; i<morph.length; i++) {
              document.getElementById('morph_info').innerHTML = 
              '<h3>' + morph[i].morph + '</h3>'+
              '<img src="images/'+morph[i].mainphoto+'" height="123" width="288"/><br />'+
              '<span class="breeding_heading">Year Proven: </span><span class="morph_index">'+morph[i].yearproven+'</span><br />'+
              '<span class="breeding_heading">Genetics: </span><span class="morph_index">'+morph[i].genetics+'</span>'+
              '<div id="morph_desc">'+morph[i].info+'</div>';
              }              
    });
}

function logOut() {
	localStorage.removeItem('Userid');
	$.mobile.changePage('index.html', {transition : "slide"});
}

function snakeForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_name=" + thisform.elements['mysnakes_name'].value + "&mysnakes_morph=" + thisform.elements['mysnakes_morph'].value  + "&mysnakes_sex=" + thisform.elements['mysnakes_sex'].value + "&mysnakes_snakedate=" + thisform.elements['mysnakes_snakedate'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=snakeformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/add_snake.php?userid="+localStorage.getItem('Userid'),true);
	
	// data being sent is in the format of a form submission, we also give the length of the parameters we are sending
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-Length",formdata.length);
	xmlHttp.setRequestHeader("Connection","close");
	
	// sending the form data
	xmlHttp.send(formdata);
	
	// browser is asking for event handler code, were saying "no don't go there", unless appropriate fields are filled out (then return true and run action
	return false;
}

function snakeformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
        if(xmlHttp.responseText=="") {
            alert('You\'re snake has been added!');
            $.mobile.changePage('index.html#reptile_tracker', {transition : "slide"});
            getMySnakes();
        } else if (xmlHttp.responseText!="") {
            document.getElementById("add_snake_errors").innerHTML = xmlHttp.responseText;
        }
        $('#mysnakes_addsnake').find('input:text, input:password, input:file, select, textarea').val('');
        $('#mysnakes_addsnake').find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
        $("#mysnakes_sex").selectmenu('refresh', true);
        $("#mysnakes_month").selectmenu('refresh', true);
        $("#mysnakes_day").selectmenu('refresh', true);
        $("#mysnakes_year").selectmenu('refresh', true);
	}
}

function deletesnakeForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_snakeid=" + thisform.elements['mysnakes_snakeid'].value;
	
	var snakeid = thisform.elements['mysnakes_snakeid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=deletesnakeformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/delete_snake.php?snakeid="+snakeid, true);
	
	// data being sent is in the format of a form submission, we also give the length of the parameters we are sending
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-Length",formdata.length);
	xmlHttp.setRequestHeader("Connection","close");
	
	// sending the form data
	xmlHttp.send(formdata);
	
	// browser is asking for event handler code, were saying "no don't go there", unless appropriate fields are filled out (then return true and run action
	return false;    
}

function deletesnakeformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert('You\'re snake has been deleted!');
		$.mobile.changePage('index.html#reptile_tracker', {transition : "slide"});
		getMySnakes();
	}
}

function editsnakeForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_editsnakeid=" + thisform.elements['mysnakes_editsnakeid'].value + /*"&mysnakes_editsnakedate=" + thisform.elements['mysnakes_editsnakedate'].value +*/ "&mysnakes_editsnakename=" + thisform.elements['mysnakes_editsnakename'].value + "&mysnakes_editsnakemorph=" + thisform.elements['mysnakes_editsnakemorph'].value + "&mysnakes_editsnakesex=" + thisform.elements['mysnakes_editsnakesex'].value;
	
	var snakeid = thisform.elements['mysnakes_editsnakeid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=editsnakeformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/edit_snake.php?sid="+snakeid, true);
	
	// data being sent is in the format of a form submission, we also give the length of the parameters we are sending
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-Length",formdata.length);
	xmlHttp.setRequestHeader("Connection","close");
	
	// sending the form data
	xmlHttp.send(formdata);
	
	// browser is asking for event handler code, were saying "no don't go there", unless appropriate fields are filled out (then return true and run action
	return false;    
}

function editsnakeformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		if(xmlHttp.responseText=="You're snake has been edited!") {
			alert('You\'re snake has been edited!');
			$.mobile.changePage('index.html#mysnakes_maindetails', {transition : "slide"});
			getThisSnake(localStorage.getItem('Snakeid'));
		} else if (xmlHttp.responseText!="") {
			document.getElementById("edit_snake_errors").innerHTML = xmlHttp.responseText;
		} 	
	}
}

function feedingForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_feedingdate=" + thisform.elements['mysnakes_feedingdate'].value + "&mysnakes_feedingquantity=" + thisform.elements['mysnakes_feedingquantity'].value + "&mysnakes_feedingsize=" + thisform.elements['mysnakes_feedingsize'].value + "&mysnakes_feedingtype=" + thisform.elements['mysnakes_feedingtype'].value + "&mysnakes_feedingweight=" + thisform.elements['mysnakes_feedingweight'].value + "&mysnakes_feedingrefused=" + thisform.elements['mysnakes_feedingrefused'].value + "&mysnakes_feedingnotes=" + thisform.elements['mysnakes_feedingnotes'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=feedingformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/add_feeding.php?snakeid="+localStorage.getItem('Snakeid'), true);
	
	// data being sent is in the format of a form submission, we also give the length of the parameters we are sending
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-Length",formdata.length);
	xmlHttp.setRequestHeader("Connection","close");
	
	// sending the form data
	xmlHttp.send(formdata);
	
	// browser is asking for event handler code, were saying "no don't go there", unless appropriate fields are filled out (then return true and run action
	return false;
}

function feedingformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		
		if(xmlHttp.responseText=="You're feeding has been added!") {
			alert('You\'re feeding has been added!');
			$.mobile.changePage('index.html#mysnakes_feedingdetails', {transition : "slide"});
			getFeeding();
		} else if (xmlHttp.responseText!="") {
			document.getElementById("add_feeding_errors").innerHTML = xmlHttp.responseText;
		}
		
		$("#mysnakes_feedingquantity").selectmenu('refresh', true);
		$("#mysnakes_feedingsize").selectmenu('refresh', true);
		$("#mysnakes_feedingtype").selectmenu('refresh', true);
		$("#mysnakes_year").selectmenu('refresh', true);
		$('#mysnakes_feedingtype').find('input:text, input:password, input:file, select, textarea').val('');
		$("#mysnakes_feedingmonth").selectmenu('refresh', true);
		$("#mysnakes_feedingday").selectmenu('refresh', true);
		$("#mysnakes_feedingyear").selectmenu('refresh', true);
		$('#mysnakes_feedingrefused').find('input:text, input:password, input:file, select, textarea').val('');
		$('#mysnakes_feedingnotes').find('input:text, input:password, input:file, select, textarea').val('');
		
	}
}

function deletefeedingForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_feedid=" + thisform.elements['mysnakes_feedid'].value;
	
	var feedid = thisform.elements['mysnakes_feedid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=deletefeedingformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/delete_feeding.php?fid="+feedid, true);
	
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
function deletefeedingformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert('You\'re feeding has been deleted!');
		$.mobile.changePage('index.html#mysnakes_feedingdetails', {transition : "slide"});
		getFeeding();        
	}
}

function editfeedingForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_editfeedid=" + thisform.elements['mysnakes_editfeedid'].value + /*"&mysnakes_editfeedingdate=" + thisform.elements['mysnakes_editfeedingdate'].value + */"&mysnakes_editfeedingquantity=" + thisform.elements['mysnakes_editfeedingquantity'].value + "&mysnakes_editfeedingsize=" + thisform.elements['mysnakes_editfeedingsize'].value + "&mysnakes_editfeedingtype=" + thisform.elements['mysnakes_editfeedingtype'].value + "&mysnakes_editfeedingweight=" + thisform.elements['mysnakes_editfeedingweight'].value + "&mysnakes_editfeedingrefused=" + thisform.elements['mysnakes_editfeedingrefused'].value + "&mysnakes_editfeedingnotes=" + thisform.elements['mysnakes_editfeedingnotes'].value;
	
	var feedid = thisform.elements['mysnakes_editfeedid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=editfeedingformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/edit_feeding.php?fid="+feedid, true);
	
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
function editfeedingformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
        alert ('You\'re feeding has been edited!');
		$.mobile.changePage('index.html#mysnakes_feedingdetails', {transition : "slide"});
		getFeeding();
	}
}



function lengthForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_lengthvalue=" + thisform.elements['mysnakes_lengthvalue'].value + "&mysnakes_lengthdate=" + thisform.elements['mysnakes_lengthdate'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=lengthformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/add_length.php?snakeid="+localStorage.getItem('Snakeid'), true);
	
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
function lengthformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		if(xmlHttp.responseText=="You're length has been added!") {
			alert('You\'re length has been added!');
			$.mobile.changePage('index.html#mysnakes_lengthdetails', {transition : "slide"});
			getLength();
		} else if (xmlHttp.responseText!="") {
			document.getElementById("add_length_errors").innerHTML = xmlHttp.responseText;
		}
	}
}

function deletelengthForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_lengthid=" + thisform.elements['mysnakes_lengthid'].value;
	
	var lengthid = thisform.elements['mysnakes_lengthid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=deletelengthformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/delete_length.php?lid="+lengthid, true);
	
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
function deletelengthformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert('You\'re length has been deleted!');
		$.mobile.changePage('index.html#mysnakes_lengthdetails', {transition : "slide"});
		getLength();
	}
}

function editlengthForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_editlengthid=" + thisform.elements['mysnakes_editlengthid'].value + "&mysnakes_editlengthvalue=" + thisform.elements['mysnakes_editlengthvalue'].value/* + "&mysnakes_editlengthdate=" + thisform.elements['mysnakes_editlengthdate'].value*/;
	
	var lengthid = thisform.elements['mysnakes_editlengthid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=editlengthformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/edit_length.php?lid="+lengthid, true);
	
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
function editlengthformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		if(xmlHttp.responseText=="You're length has been edited!") {
			alert('You\'re length has been edited!');
			$.mobile.changePage('index.html#mysnakes_lengthdetails', {transition : "slide"});
			getLength();
		} else if (xmlHttp.responseText!="") {
			document.getElementById("edit_length_errors").innerHTML = xmlHttp.responseText;
		} 
	}
}



function sheddingForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_sheddingdate=" + thisform.elements['mysnakes_sheddingdate'].value + "&mysnakes_sheddingnotes=" + thisform.elements['mysnakes_sheddingnotes'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=sheddingformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/add_shedding.php?snakeid="+localStorage.getItem('Snakeid'), true);
	
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
function sheddingformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert('You\'re shedding has been added!')
		$.mobile.changePage('index.html#mysnakes_sheddingdetails', {transition : "slide"});
		getShedding();
		$('#mysnakes_sheddingnotes').find('input:text, input:password, input:file, select, textarea').val('');
		$('#mysnakes_sheddingnotes').find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
		$("#mysnakes_sheddingmonth").selectmenu('refresh', true);
		$("#mysnakes_sheddingday").selectmenu('refresh', true);
		$("#mysnakes_sheddingyear").selectmenu('refresh', true);
	}
}

function deletesheddingForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_shedid=" + thisform.elements['mysnakes_shedid'].value;
	
	var shedid = thisform.elements['mysnakes_shedid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=deletesheddingformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/delete_shedding.php?sid="+shedid, true);
	
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
function deletesheddingformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert('You\'re shedding has been deleted!');
		$.mobile.changePage('index.html#mysnakes_sheddingdetails', {transition : "slide"});
		getShedding();
	}
}

function editsheddingForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_editshedid=" + thisform.elements['mysnakes_editshedid'].value + /*"&mysnakes_editsheddingdate=" + thisform.elements['mysnakes_editsheddingdate'].value + */"&mysnakes_editsheddingnotes=" + thisform.elements['mysnakes_editsheddingnotes'].value;
	
	var shedid = thisform.elements['mysnakes_editshedid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=editsheddingformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/edit_shedding.php?sid="+shedid, true);
	
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
function editsheddingformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert('You\'re shedding has been edited!');
		$.mobile.changePage('index.html#mysnakes_sheddingdetails', {transition : "slide"});
		getShedding();
	}
}



function weightForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_weightdate=" + thisform.elements['mysnakes_weightdate'].value + "&mysnakes_weightvalue=" + thisform.elements['mysnakes_weightvalue'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=weightformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/add_weight.php?snakeid="+localStorage.getItem('Snakeid'), true);
	
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
function weightformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		if(xmlHttp.responseText=="You're weight has been added!") {
			alert('You\'re weight has been added!');
			$.mobile.changePage('index.html#mysnakes_weightdetails', {transition : "slide"});
			getWeight();
		} else if (xmlHttp.responseText!="") {
			document.getElementById("add_weight_errors").innerHTML = xmlHttp.responseText;
		}
	}
}

function deleteweightForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_weightid=" + thisform.elements['mysnakes_weightid'].value;
	
	var weightid = thisform.elements['mysnakes_weightid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=deleteweightformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/delete_weight.php?wid="+weightid, true);
	
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
function deleteweightformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert('You\'re weight has been deleted!');
		$.mobile.changePage('index.html#mysnakes_weightdetails', {transition : "slide"});
		getWeight();
	}
}

function editweightForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "mysnakes_editweightid=" + thisform.elements['mysnakes_editweightid'].value + /*"&mysnakes_editweightdate=" + thisform.elements['mysnakes_editweightdate'].value +*/ "&mysnakes_editweightvalue=" + thisform.elements['mysnakes_editweightvalue'].value;
	
	var weightid = thisform.elements['mysnakes_editweightid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=editweightformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/edit_weight.php?wid="+weightid, true);
	
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
function editweightformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		if(xmlHttp.responseText=="You're weight has been edited!") {
			alert('You\'re weight has been edited!');
			$.mobile.changePage('index.html#mysnakes_weightdetails', {transition : "slide"});
			getWeight();
		} else if (xmlHttp.responseText!="") {
			document.getElementById("edit_weight_errors").innerHTML = xmlHttp.responseText;
		} 
	}
}

function PairingsForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "pairings_addpairingsdate=" + thisform.elements['pairings_addpairingsdate'].value + "&pairings_addmale=" + thisform.elements['pairings_addmale'].value + "&pairings_addfemale=" + thisform.elements['pairings_addfemale'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=pairingsformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/add_pairings.php?userid="+localStorage.getItem('Userid'),true);
	
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
function pairingsformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		if(xmlHttp.responseText=="You're pairing has been added!") {
			alert('You\'re pairing has been added!');
			$.mobile.changePage('index.html#breeding_mypairings', {transition : "slide"});
			getMyPairings();
		} else if (xmlHttp.responseText!="") {
			document.getElementById("add_pairing_errors").innerHTML = xmlHttp.responseText;
		}
	}
}

function deletepairForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "breeding_pairid=" + thisform.elements['breeding_pairid'].value;
	
	var pairid = thisform.elements['breeding_pairid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=deletepairingformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/delete_pairing.php?pid="+pairid, true);
	
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
function deletepairingformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		$.mobile.changePage('index.html#breeding_mypairings', {transition : "slide"});
		getMyPairings();
	}
}

function editPairingsForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "breeding_editpairid=" + thisform.elements['breeding_editpairid'].value + "&pairings_editmale=" + thisform.elements['pairings_editmale'].value + "&pairings_editfemale=" + thisform.elements['pairings_editfemale'].value;
	
	var pairid = thisform.elements['breeding_editpairid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=editpairingformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/edit_pairing.php?pid="+pairid, true);
	
	// data being sent is in the format of a form submission, we also give the length of the parameters we are sending
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-Length",formdata.length);
	xmlHttp.setRequestHeader("Connection","close");
	
	// sending the form data
	xmlHttp.send(formdata);
	
	// browser is asking for event handler code, were saying "no don't go there", unless appropriate fields are filled out (then return true and run action
	
	return false;
    
}

function editpairingformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
        if(xmlHttp.responseText=="You're pairing has been edited!") {
			alert('You\'re pairing has been edited!');
            $.mobile.changePage('index.html#breeding_mypairings', {transition : "slide"});
            getMyPairings();
        } else if (xmlHttp.responseText!="") {
			document.getElementById("edit_pairing_errors").innerHTML = xmlHttp.responseText;
		}        
	}
}

function eventForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	var pairid = thisform.elements['events_pairid'].value;
	
	// putting value of the form into variables
	formdata = "breeding_eventdate=" + thisform.elements['breeding_eventdate'].value + "&events_pairid=" + thisform.elements['events_pairid'].value  + "&breeding_event=" + thisform.elements['breeding_event'].value + "&breeding_eventnotes=" + thisform.elements['breeding_eventnotes'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=eventformSubmitted;
	
	pairid = thisform.elements['events_pairid'].value;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/add_event.php?pid="+pairid, true);
	
	// data being sent is in the format of a form submission, we also give the length of the parameters we are sending
	xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlHttp.setRequestHeader("Content-Length",formdata.length);
	xmlHttp.setRequestHeader("Connection","close");
	
	// sending the form data
	xmlHttp.send(formdata);
	
	// browser is asking for event handler code, were saying "no don't go there", unless appropriate fields are filled out (then return true and run action
	
	return false;
	
}

function eventformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		if(xmlHttp.responseText=="You're event has been added!") {
			alert('You\'re event has been added!');
			$.mobile.changePage('index.html#breeding_mypairings', {transition : "slide"});
			getMyPairings();
		} else if (xmlHttp.responseText!="") {
			document.getElementById("add_event_errors").innerHTML = xmlHttp.responseText;
		}
	}
}

function deleteeventForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "breeding_eventid=" + thisform.elements['breeding_eventid'].value;
	
	var eventid = thisform.elements['breeding_eventid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=deleteeventformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/delete_event.php?eid="+eventid, true);
	
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
function deleteeventformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert('You\'re event has been deleted!');
		$.mobile.changePage('index.html#breeding_mypairings', {transition : "slide"});
        getMyPairings();
	}
}

function editeventForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "breeding_editeventid=" + thisform.elements['breeding_editeventid'].value + /*"&breeding_editeventdate=" + thisform.elements['breeding_editeventdate'].value + */"&breeding_event=" + thisform.elements['breeding_event'].value + "&breeding_editeventnotes=" + thisform.elements['breeding_editeventnotes'].value;
	
	var eventid = thisform.elements['breeding_editeventid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=editeventformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/edit_event.php?eid="+eventid, true);
	
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
function editeventformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert('You\'re event has been edited!');
		$.mobile.changePage('index.html#breeding_mypairings', {transition : "slide"});
		getMyPairings();
	}
}

function clutchForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "breeding_clutchdate=" + thisform.elements['breeding_clutchdate'].value + "&breeding_pairid=" + thisform.elements['breeding_pairid'].value + "&breeding_clutchweight=" + "&breeding_clutchquantity=" + thisform.elements['breeding_clutchquantity'].value + "&breeding_clutchweight=" + thisform.elements['breeding_clutchweight'].value + "&breeding_clutchnotes=" + thisform.elements['breeding_clutchnotes'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=clutchformSubmitted;
	
	pairid = thisform.elements['breeding_pairid'].value;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/add_clutch.php?pid="+pairid, true);
	
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
function clutchformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		if(xmlHttp.responseText=="You're clutch has been added!") {
			alert('You\'re clutch has been added!');
			$.mobile.changePage('index.html#breeding_mypairings', {transition : "slide"});
			getMyPairings();
		} else if (xmlHttp.responseText!="") {
			document.getElementById("add_clutch_errors").innerHTML = xmlHttp.responseText;
		}
	}
}

function deleteclutchForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "breeding_clutchid=" + thisform.elements['breeding_clutchid'].value;
	
	var clutchid = thisform.elements['breeding_clutchid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=deleteclutchformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/delete_clutch.php?cid="+clutchid, true);
	
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
function deleteclutchformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
        alert('You\'re clutch has been deleted!');
		$.mobile.changePage('index.html#breeding_mypairings', {transition : "slide"});
        getMyPairings();
	}
}

function editclutchForm(thisform) {
	xmlHttp=GetXmlHttpObject();
	if (xmlHttp==null) {
        alert ("Browser does not support HTTP Request.");
        return;
	}
	
	// setting variable to empty initially
	var formdata = "";
	
	// putting value of the form into variables
	formdata = "breeding_editclutchid=" + thisform.elements['breeding_editclutchid'].value + /*"&breeding_editclutchdate=" + thisform.elements['breeding_editclutchdate'].value + */"&breeding_editclutchquantity=" + thisform.elements['breeding_editclutchquantity'].value + "&breeding_editclutchweight=" + thisform.elements['breeding_editclutchweight'].value + "&breeding_editclutchnotes=" + thisform.elements['breeding_editclutchnotes'].value;
	
	var clutchid = thisform.elements['breeding_editclutchid'].value;
	
	// when it's ready, go to formSubmitted function
	xmlHttp.onreadystatechange=editclutchformSubmitted;
	
	// open the tunnel
	xmlHttp.open("POST","http://www.feralmedia.ca/FPTest/edit_clutch.php?cid="+clutchid, true);
	
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
function editclutchformSubmitted() {
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete") {
		alert('You\'re clutch has been edited!');
		$.mobile.changePage('index.html#breeding_mypairings', {transition : "slide"});
        getMyPairings();
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


