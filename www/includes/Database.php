<?php

// A class is a collection of variables and functions working with these variables. Classes have methods and properties, creates a way for people to access code. CLASSES ARE BLUEPRINTS TO OBJECTS. OBJECTS EXIST IN MEMORY

// always make class name same as file name

class Database {
	
	//properties for this class go at the top
	
	public $msg = "I'm a database object!";
	
	// constructor function(method) for the class. This code runs whenever you write 'new Database()'. ALWAYS make function even if it doesn't have content in it.
	public function Database() {
		// Connect to DB
		mysql_connect('localhost', 'feral120_jake', 'hahaha');
		mysql_select_db("feral120_jqmobile");	
	}
	
	// Class methods(functions) for using the database
	
	//function runs query to get requested info from database and returns it 
	public function getTotal($tbl,$idfld) {
		//implementation of the method (what does the method do?)
		$total = mysql_query("SELECT ".$idfld." FROM ".$tbl);
		$num = mysql_num_rows($total);
		return $num;
	}
	
	// CRUD METHODS
	
	public function insertRecord() {
		
	}
	
	public function deleteRecord() {
		
	}
	
	public function updateRecord() {
		
	}
	
	public function purchaseHistory($cust) {
		
	}
	
	//Variables that are NULL do not need a parameter, they are optional
	public function getAll($tbl,$sort=NULL,$dir="ASC") {
		$qstring = "SELECT * FROM ".$tbl;
		if ($sort != NULL) {
			$qstring .= " ORDER BY ".$sort." ".$dir;
		}
		$results = mysql_query($qstring);
		return $results;
	}
	
	public function getByCategory($category) {
		// query gets products that match the dropdown menu option  
		$qstring = "SELECT * FROM tbl_merch WHERE product_type='".$category."' ORDER BY product_name ASC";
		$results = mysql_query($qstring);
		return $results;
	}
	
	public function searchProducts($str) {
		$qstring = "SELECT * FROM tbl_merch WHERE product_name LIKE '%".$str."%' ORDER BY product_name ASC";
		$results = mysql_query($qstring);
		return $results;
	}
	
	public function searchTable() {
		
	}
	
	
	public function addToCart() {
		
	}
	
	public function removeFromCart() {
		
	}
	
	public function checkOut() {
		
	}
	
	public function getBySQL($sql) {
		$result = mysql_query($sql);
		return $result;
	}
	
	public function logIn($user,$pass) {
		$email = mysql_real_escape_string($user); //makes sure certain characters are escaped out for database (*IMPORTANT*) 
		$password = mysql_real_escape_string($pass); 	
		$qstring = "SELECT users_id FROM tbl_users WHERE users_email='".$email."' AND users_password='".$password."'"; //sql injection is how to hack
		$result = mysql_query($qstring);
		$count = mysql_num_rows($result);
		if ($count==1) { //if it returns integer, proceed to login, otherwise it will return false
			$row = mysql_fetch_array($result);
			$id = intval($row['users_id']);	
			return $id;
		} else {
			return false;	
		}
	}
	
	/*public function getAll($tbl="tbl_companies",$sort=NULL,$sortdir="ASC") {
		$sql = "SELECT * FROM ".$tbl;
		if($sort != NULL) {
			$sql .= " ORDER BY ".$sort." ".$sortdir;	
		}
		$results = mysql_query($sql);
		return $results;
	}*/
	
}

?>