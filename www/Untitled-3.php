<?php

$image_name = $_FILES["file"]["name"];
move_uploaded_file($_FILES["file"]["tmp_name"], "images/".$image_name);

?>
