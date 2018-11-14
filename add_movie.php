
<?php

header('Content-Type: text/html; charset=utf-8');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);



	$servername = "localhost";
	$username = "root";
	$password = "zorica";
	$dbname = "movies_pro";
				
	$conn = new mysqli($servername, $username, $password, $dbname);	
 
	if(mysqli_connect_error()) {
		
		echo 'There is something wrong in your database connection, please contact your admin.';
		return;
		//header('Location: '.$newURL);
	}
	
	$conn->set_charset('utf8');

if (!empty($_POST) AND isset($_POST['ajax'])) {
	$ajax = $_POST['ajax'];
	if($ajax != 'add') {
		return;
	}
	$poster = $_POST['poster'];
	$title = $_POST['title'];
	$genre = $_POST['gendre'];
	$plot = $_POST['plot'];
	$director = $_POST['director'];
	$writer = $_POST['writer'];
	$actors = $_POST['actor'];
	$rating = $_POST['rating'];
	$votes = $_POST['votes'];
	$runtime = $_POST['runtime'];
	
	// Insert value inter database and read 10 movies and show 5 of them
	
	$sql_ins = "INSERT INTO movies (title,runtime,genre, director, writer, actors, plot, poster, imbd_rating, imbd_votes) VALUES('$title','$runtime','$genre','$director', '$writer', '$actors', '$plot','$poster','$rating','$votes')";

	
	
	$result = $conn->query($sql_ins);
	
	echo '<pre>';
	print_r($result);
	exit;
	
//	if ($result->num_rows > 0) {
//			$movies = [];
//			while($row = $result->fetch_assoc()) {
//				echo '<pre>';
//				print_r($row);
//				exit;
//				
//			}
//		
//		
//	}
	
}
?>