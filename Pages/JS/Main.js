

$(document).ready(function(){
	$.getJSON("https://api.github.com/users/stannl", function(data){
		$("#main").html(data);
	});
})