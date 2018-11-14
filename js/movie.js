
var i = 0;
var inp = $("#search_field");



inp.focusin(function(){
	value = inp.val();
	
	var list = $('#autocomplete-list')[0];
	var child = $('#autocomplete_list').has( "ul").length;
	
	if(value.length >= 3 && child > 0) {
	
		searchMovie(value);
		
	}
	
});

inp.on('paste', function () { 
  setTimeout(function () {
    var value = inp.val();
    searchMovie(value)
  }, 100);
});



function searchMovie(val) {

	var res = val;

	var inp = $("#search_field");
	var currentFocus = 0;

	i++;
 
	if(i >=3 || res.length >= 3) {
		show_movie(res);
	
		
		/*execute a function presses a key on the keyboard:*/
		inp.on("keydown", function(e) {
	  
		  

	  });

	  
		
	}
	
}

// function for showing suggestion
function show_movie(res) {
	
	var movie_list_holder = $('#search_movie_results');
	var my_title = $("#title");
	var my_year = $("#year");
	var my_ratings = $("#rating_details");
	var my_poster = $("#movie_poster");
	var my_rated = $("#rated");
	var my_runtime = $("#runtime");
	var my_genre = $("#genre");
	var my_year_released = $("#year_released");
	var my_short_description = $("#short_description");
	var my_director = $("#director");
	var my_writer = $("#writer");
	var my_actors = $("#actors");
	
	var params = {
		"title" : res
	}

	$.ajax({
		type: "POST",
		url: "http://www.omdbapi.com/?i=tt3896198&apikey=43cdb56a",
		data: params,

		success: function(data){

			if(data) {
				
				$.each(data, function(index, value) {
					
					if(index == "Title") {
						var title = value.toLowerCase();
						var query = res.toLowerCase();
						if(query.length > 0) {
							if(title.indexOf(query) == 0) {
								my_title.html(value);
								my_title.attr('value', value);
								if(movie_list_holder.hasClass('none')) {
									movie_list_holder.removeClass('none');
								}
								
							}
						}
						
						
						
					}
					if(index == 'Poster') {
						my_poster.attr('src', value);
						my_poster.attr('value', value);
					}
					if(index == 'Year') {
						my_year.html('('+value+')');
						my_year.attr('value', value);
					}
					if(index == 'imdbRating') {
						my_ratings.html('<i class="fa fa-star" aria-hidden="true"></i><span id="ratings">'+value+'/10</span>');
						my_ratings.attr('value', value+'/10');
						
					}
//					if(index == 'imbdVotes') {
//						var my_votes = $('<input type="hidden">'+value+'</input>').appendTo(my_ratings);
//					}

					if(index == 'Rated') {
						my_rated.html(value);
						my_rated.attr('value', value);
					}
					if(index == 'Runtime') {
						my_runtime.html(value);
						my_runtime.attr('value', value);
					}

					if(index == 'Genre') {
						my_genre.html(value);
						my_genre.attr('value', value);
					}
					if(index == 'Released') {
						my_year_released.html(value);
						my_year_released.attr('value', value);
					}
					if(index == 'Plot') {
						my_short_description.html(value);
						my_short_description.attr('value', value);
					}
					if(index == 'Director') {
						my_director.html(value);
						my_director.attr('value', value);
					}
					if(index == 'Writer') {
						my_writer.html(value);
						my_writer.attr('value', value);
					}
					if(index == 'Actors') {
						my_actors.html(value);
						my_actors.attr('value', value);
					}
							
				});

			}
		}

	});

}
//
function add_movie(element) {
	
	parent = element.parent().parent();
	children = parent.children();
	children.each(function(i) {
		//console.log($(this));
		if($(this).hasClass('image_holder')) {
			var image = $(this).children();
			var poster = image[0].attributes.value.value;
			
		}
		if($(this).hasClass('movie_main_info_holder')) {
			var child = $(this).children();
		
			var new_child = child.children();
		
			new_child.each(function(i) {
				
				if($(this).hasClass('title_year')) {
					var tt = $(this).children();
					var title = tt[0].attributes.value.value;
					
				}
				if($(this).hasClass('genre_year_info')) {
					var gen = $(this).children();
					var gendre = gen[0].attributes.value.value;
				}
				
				if($(this).hasClass('rating_info')) {
					var rat_info = $(this).children();
					
					var rat = rat_info[1].innerHTML;
					var ratings = rat.substr(0,3);
					
				}
				if($(this).hasClass('time_info')) {
					var time_info = $(this).children();
					var runtime = time_info[2].innerHTML;
					
				}
			});
			

		}
		if($(this).hasClass('description_holder')) {
			var child = $(this).children().children();
			
			child.each(function(i) {
				if( !($(this).hasClass('director_info')) && !($(this).hasClass('writer_info')) && !($(this).hasClass('actor_info')) ) {
					var plot = $(this)[0].innerHTML;
					
				}
				
				if($(this).hasClass('director_info')) {
					var director_child = $(this).children();
					var director = director_child[0].innerHTML;
				}
				
				if($(this).hasClass('writer_info')) {
					var writer_child = $(this).children();
					var writer = writer_child[0].innerHTML;
					
				}
				if($(this).hasClass('actor_info')) {
					var actor_child = $(this).children();
					var actor = actor_child[0].innerHTML;
					
				}
			});
		}
		
		
	});
//	console.log(title);
//	console.log(poster);
//	console.log(gendre);
//	console.log(plot);
//	console.log(director);
//	console.log(writer);
//	console.log(actors);
//	console.log(ratings);
//	console.log(runtime);
	

	// send all parametars to add_movie.php
	var params = {
		"ajax" : 'add',
		"title" : 'Test Title',
		"poster" : 'image',
		"gendre" : 'Komedija',
		"plot" : ' Bla bla bla ...',
		"director" : 'John Smith',
		"writer" : 'Mary Smith',
		"actor" : 'Julia Robers',
		"rating" : 7.7,
		"votes" : 25,
		"runtime" : '136min'
	}

	$.ajax({
		type: "POST",
		url: "http://localhost/movies/add_movie.php",
		data: params,

		success: function(data){
			
		}
	});
}


//function load_more() {
//	console.log($(this));
//}

