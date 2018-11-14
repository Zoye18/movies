<link href="./css/main.css" type="text/css" rel="stylesheet">
<link href="./css/class.css" type="text/css" rel="stylesheet">
<link href="./css/font-awesome.min.css"  type="text/css" rel="stylesheet">
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
	
	
	
	$sql = "SELECT
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
			$row_num = $result->num_rows;
		
		?>
		<div class="movies">
			<div class="movie_box">
				<div class="add_new_holder">
					<a href="http://localhost/movies/index.html" clas="add" id="add_new">Add New</a>
				</div>
				<div class="movie_table">
					<table>
						 <tr>
							<th>Poster</th>
							<th>Movie</th> 
							<th>Genre</th>
							<th>Plot</th>
							<th>Director</th> 
							<th>Writer</th>
							<th>Actors</th>
							<th>Rating</th> 
							<th>Votes</th>
							<th>Runtime</th>
							<th>Actions</th> 
						  </tr>
							<?php
								$i = 0;
								if($i > 5 ) { return; }
								while($row = $result->fetch_assoc()) { 
									if($i < 5 ) { 
									$i++; ?>
						  			<tr>
							
										<td id="movie_poster"><?php echo $row['poster'];?></td>
										<td id="movie_title"><?php echo $row['title'];?></td> 
										<td id="movie_genre"><?php echo $row['genre'];?></td>
										<td id="movie_plot"><?php echo $row['plot'];?></td>
										<td id="movie_director"><?php echo $row['director'];?></td>
										<td id="movie_writer"><?php echo $row['writer'];?></td>
										<td id="movie_actors"><?php echo $row['actors'];?></td>
										<td id="movie_rating"><?php echo $row['imbd_rating'];?></td>
										<td id="movie_votes"><?php echo $row['imbd_votes'];?></td>
										<td id="movie_runtime"><?php echo $row['runtime'];?></td>
										<td id="movie_actions" class="flex">
											<a href="edit">
												<i class="fa fa-pencil" aria-hidden="true"></i>
											</a>
											<a href="delete">
												<i class="fa fa-times" aria-hidden="true"></i>
											</a>
										</td>
							  
						  		</tr>
						  <?php } }?>
					</table>
				</div>
				<?php if ($row_num > 4): ?>
				
				<div class="load_more">
					<a href="javascript:void(0);" id="show_more" onclick="load_more()">Load More</a>
				</div>
				
				<?php endif; ?>
<!--				load more should be ajax to load next 5 movies from datatbase-->
			</div>
		</div>
<?php } ?>