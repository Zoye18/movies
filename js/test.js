var form = $('#search_form')[0];

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
					var title;
					if(index == "Title") {
						var title = value.toLowerCase();
						var query = res.toLowerCase();
						if(query.length > 0) {
							if(title.indexOf(query) == 0) {
								
								if(movie_list_holder.hasClass('none')) {
									movie_list_holder.removeClass('none');
								}
							}
						}
						
						
						
					}
//					console.log(title);
					
					// when we found this movie show movie 
//					if(title === 'undefined') {
						var child = $('#search_movie_results').has( "ul").length;
						console.log(child);
						console.log(index);
						if(child < 1) {
							var ul = $("<ul class='movie_list' id='my_movie_list'></ul>").appendTo(movie_list_holder);
							var li = $("<li class='search_movie row' id='my_movie_item'></li>").appendTo(ul);
						} else {
							var ul = $("#my_movie_list");
							var li = $("#my_movie_item");
							var image_div = $("<div class='image_holder col-3'></div>").appendTo(li);
							
							if(index == 'Poster') {
								var image_div = $("<div class='image_holder col-3'></div>").appendTo(li);
								console.log(value);
								var image = $("<img src='"+value+"' class='width-100'>").appendTo(image_div);
								//image_div.innerHTML = $("<img href='"+value+"' class='width-100'>");
							}

							var main_info_div = $("<div class='movie_main_info_holder col-3'></div>").appendTo(li);
							var main_ul = $("<ul class='main_info'></ul>").appendTo(main_info_div);	
							var main_title_li = $("<li class='title_year'></li>").appendTo(main_ul);
							if(index == 'Title') {
								var span_title = $("<span id='title'>"+value+"</span>").appendTo(main_title_li);
							}
							if(index == 'Year') {
								var span_t_year = $("<span id='t_year'>("+value+")</span>").insertAfter(span_title);
							}
							var raiting_li = $("<li class='raiting_info'></li>").appendTo(main_ul);
							var star = $("<i class='fa fa-star' aria-hidden='true'></i>").appendTo(raiting_li);
							if(index=='Ratings'){
								var avarage_score = 7.4/10;
								var raiting_info = $("<span id='ratings'>"+avarage_score+"</span>").insertAfter(star);
							}
							var time_li = $("<li class='time_info'></li>").appendTo(main_ul);
							if(index == 'Rated') {
								var rated = $("<span id='rated'>"+value+"</span>").appendTo(time_li);
								var separator = $("<span class='separator'>|</span>").appendTo(time_li);
							}
							if(index == 'Runtime') {
								var duration = $("<span id='duration'>"+value+"</span>").appendTo(time_li);
							}
							var genre_li = $("<li class='genre_year_info'></li>").appendTo(main_ul);
							if(index == 'Genre') {
								var genre = $("<span id='genre'>"+value+"</span>").appendTo(genre_li);
								var separator = $("<span class='separator'>|</span>").appendTo(genre_li);
							}
							if(index == 'Released') {
								var genre = $("<span id='year'>"+value+"</span>").appendTo(genre_li);
							}


							 var description_box = $("<div class='description_holder col-3'></div>").appendTo(li);
							 var ul_desc = $("<ul class='movie_description'></ul>").appendTo(description_box);
							 if(index == 'Plot') {
								var desc_short_li = $("<li id='short_description'>"+value+"</li>").appendTo(ul_desc);
							 }
							 var fix_dir_li = $("<li class='director_info'></li>").appendTo(ul_desc);
							 if(index == 'Director') {
								var span_dir = $("<span class='director'>Director:</span>").appendTo(fix_dir_li);
								var director = $("<span id='director'>"+value+"</span>").insertAfter(span_dir);
							}
							var fix_wri_li = $("<li class='writer_info'></li>").appendTo(ul_desc);
							 if(index == 'Writer') {
								var span_wri = $("<span class='writer'>Writer:</span>").appendTo(fix_wri_li);
								var writer = $("<span id='writers'>"+value+"</span>").insertAfter(span_wri);
							}
							var fix_act_li = $("<li class='actor_info'></li>").appendTo(ul_desc);
							 if(index == 'Actors') {
								var span_act = $("<span class='actor'>Actors:</span>").appendTo(fix_act_li);
								var actor = $("<span id='actors'>"+value+"</span>").appendTo(span_act);
							}

						}
//					}
							
							
				});

			}
		}

	});

}


