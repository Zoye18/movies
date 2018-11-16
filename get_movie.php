	<?php
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
	
	$sql = "SELECT
				movies.id,
				movies.title, 
				movies.runtime,
				movies.genre,
				movies.director,
				movies.writer,
				movies.actors,
				movies.plot,
				movies.poster,
				movies.imbd_rating,
				movies.imbd_votes
				FROM movies
				LIMIT 10";

	
	
	$result = $conn->query($sql);
	
	if ($result->num_rows > 0) {
		$movies = [];
				
		while($row = $result->fetch_assoc()) {
			if($row['id'] >4) {
				$movies[] = $row;
				
				
			} else {
				unset($row['id']);
			}
		}
	}
//	echo '<pre>';
//	print_r($movies);
	echo json_encode($movies);
?>
					