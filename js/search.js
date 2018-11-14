var form = $('#search_form')[0];

$(document).ready(function(){
	var i = 0;
	// AJAX call for autocom
	$("#search_field").keyup(function(event){
		
		i++;
		var numbers = $(this).val();
		
		var query_numbers = $(this).val(numbers.replace(/\D/, ''))
		var query = +$(this).val();
		
		var params = {
			"key" : '43cdb56a',
			"title" : query
		}
		var currentFocus;
		if(i >= 3) {
			var currentFocus = -1;
			$.ajax({
				type: "POST",
				url: "http://www.omdbapi.com/?i=tt3896198&apikey=43cdb56a",
				//xhrFields: { withCredentials: true },
				data: params,
				
				success: function(data){
					
					if(data) {
						
						console.log(data);
						// if it is not authorized send to login page
//						$.each(data, function(index, value) {
//							
//							if(index == 'authorized' && value == false) {
//								// prikazi error so crveni bukvi na searchot *You are not aithorized for this action please log in first
//								console.log('You are not authorized for this action please log in first.');
//							} else {
//								if(index == 'successful') {
//									// if it is not successfull print error message
//									if(value == false) {
//										$.each(value, function(index, value) {
//											if(index=='error') {
//												// prikazi go ovoj eror isto so crveno nad searchot
//												console.log(value);
//											}
//										});
//									} 
//								}
//								var list = $('#autocolete_list')[0];
//								var child = $('#autocolete_list').has( "ul").length;
//								
//								if(index == 'search') {
//									
//									$.each(value, function(index, value) {
//									
//										if(index == 'null') {
//										
//											if(child > 0) {
//												$('#autocomplete-list').remove();
//											}
//										}
//										if(index=='suggestions') {
//											
//											if(child > 0) {
//												$('#autocomplete-list').remove();
//											}
//										
//											/*create ul element for autosuggestion*/
//										    var ul = $("<ul class='autocomplete-items' id='autocomplete-list'></ul>").appendTo(list);
//										    
//											$.each(value, function(index, value) {
//												link = value.link;
//												output = value.output;
//												
//												/*create li for each output value:*/
//											    var li = $("<li class='autocomplete-item' id='item'></ul>").appendTo(ul);
//											   	var a = $("<a href='javascript:void(0);' class='links' id='link_item' value='"+output+"'></a>").appendTo(li);
//												var span = $("<span class='output' output='"+output+"' link='"+link+"'>"+output +"</span>").appendTo(a);
//												var input = $("<input type='hidden' id='hidden_value' value='"+output+"'></input>").appendTo(span);
//												
//												span.on('click', function(e) {
//													$("#search_field").val($('#hidden_value').val());
//												});
//										
//											});
//									
//										}
//
//									});
//
//
//								}
//
//							}
//						});
					}
				}
		
			});
		}
		
		var list = $("#autocomplete-list")[0];
		var child = $('#autocolete_list').has( "ul").length;
		
		if(child > 0) {
			var li = $('#item');

			if(event.keyCode == 40) {
				currentFocus = currentFocus++;
				addActive(li);
				
			} else if(event.keyCode == 38) {
				currentFocus--;
				addActive(li);
			
			} else if(event.keyCode == 13) {
				event.preventDefault();
				if(currentFocus > -1) {
					if(li) li[currentFocus].click();
				}
			}
		}

		
		 function addActive(li) {
			 var li = li;
			
			/*a function to classify an item as "active":*/
			if (!li) return false;
			/*start by removing the "active" class on all items:*/
			removeActive(li);
			if (currentFocus >= li.length) currentFocus = 0;
			if (currentFocus < 0) currentFocus = (li.length - 1);
			/*add class "autocomplete-active":*/
			li[currentFocus].classList.add("autocomplete-active");
		  }
		  function removeActive(li) {
			/*a function to remove the "active" class from all autocomplete items:*/
			for (var i = 0; i < li.length; i++) {
			  li[i].classList.remove("autocomplete-active");
			}
		  }
	});
	
	 /*execute a function presses a key on the keyboard:*/
//  	$("#search_field").keydown (function(e) {
//      	var list = $("#autocomplete-list")[0];
//		var child = $('#autocolete_list').has( "ul").length;
//		console.log(e.keyCode);
//      	if (x) x = x.getElementsByTagName("div");
//      	if (e.keyCode == 40) {
//        	/*If the arrow DOWN key is pressed,
//        	increase the currentFocus variable:*/
//        	currentFocus++;
//        	/*and and make the current item more visible:*/
//        	addActive(x);
//		  } else if (e.keyCode == 38) { //up
//			/*If the arrow UP key is pressed,
//			decrease the currentFocus variable:*/
//			currentFocus--;
//			/*and and make the current item more visible:*/
//			addActive(x);
//		  } else if (e.keyCode == 13) {
//			/*If the ENTER key is pressed, prevent the form from being submitted,*/
//			e.preventDefault();
//			if (currentFocus > -1) {
//			  /*and simulate a click on the "active" item:*/
//			  if (x) x[currentFocus].click();
//			}
//		  }
//	  });
	 
//	  function closeAllLists(elmnt) {
//		/*close all autocomplete lists in the document,
//		except the one passed as an argument:*/
//		var x = document.getElementsByClassName("autocomplete-items");
//		for (var i = 0; i < x.length; i++) {
//		  if (elmnt != x[i] && elmnt != inp) {
//			x[i].parentNode.removeChild(x[i]);
//		  }
//		}
//	  }
//  	  /*execute a function when someone clicks in the document:*/
//  	  document.addEventListener("click", function (e) {
//		closeAllLists(e.target);
//      });


});
							
