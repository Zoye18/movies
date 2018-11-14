<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Movies</title>
        <link href="./css/main.css" type="text/css" rel="stylesheet">
		<link href="./css/class.css" type="text/css" rel="stylesheet">
		<link href="./css/font-awesome.min.css"  type="text/css" rel="stylesheet">
    	<script src="./js/jquery-3.3.1.min.js"></script>
    
    </head>
	<body>
		<div class="content_box">
			<!--			Form Holder-->
			<div class="form_box">
				<h3>Find Movie</h3>
				<form class="search_result block" id="search_form" method="post" autocomplete="off">
					<h5>Search Movie By Title</h5>
					<div class="autocomplete row" id="autocomplete_list">
						<input list="autocomplete_list" type="text" class="search_input width-100 p-10" id="search_field" name="search" placeholder="ex: X-Men" autofocus="on" autocomplete="off" oninput="searchMovie(this.value)" >
						<a href="" class="search_btn flex" onclick="searchMovie(this.value)">
							<i class="fa fa-search" aria-hidden="true"></i>
							Search
						</a>
					</div>
				</form>
			</div>
			<!-- <script src="./js/test.js" type="text/javascript"></script> -->
			<script src="./js/movie.js" type="text/javascript"></script>
			<!--		Result Holder	-->
			<div class="result_box none" id="search_movie_results">
				<ul class="movie_list">
					<li class="search_movie row">
						<div class="box_holder image_holder col-3">
							<img  class="width-100" id="movie_poster">
						</div>
						<div class="box_holder movie_main_info_holder col-3">
							<ul class="main_info">
								<li class="title_year">
									<span id="title"></span>
									<span id="year"></span>
								</li>
								<li class="rating_info" id="rating_details"></li>
								<li class="time_info" id="duration_time">
									<span id="rated"></span>
									<span class="separator"> | </span>
									<span id="runtime"></span>
								</li>
								<li class="genre_year_info">
									<span id="genre"></span>
									<span class="separator"> | </span>
									<span id="year_released"></span>
								</li>
							</ul>
						</div>
						<div class="box_holder description_holder col-3">
							<ul class="movie_description">
								<li id="short_description">
								</li>
								<li class="director_info">Director:
									<span id="director"></span>
								</li>
								<li class="writer_info">Writer:
									<span id="writer"></span>
								</li>
								<li class="actor_info">Actors:
									<span id="actors"></span>
								</li>
							</ul>
						</div>
						<div class="box_holder button_holder col-3">
							<div class="add_movie">
								<a href="javascript:void(0);" class="add_movie_btn" onclick="add_movie($(this).parent())">
									<i class="fa fa-plus-circle" aria-hidden="true"></i>
									Add Movie
								</a>
							</div>
						</div>
						
					</li>
				</ul>
			</div>
			
		</div>
		
			
		
	</body>
</html>