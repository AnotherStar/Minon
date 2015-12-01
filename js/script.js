

$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady(), true);
	
});


function onDeviceReady(){
ajax();
}

function ajax(data){
	var result;
	$.ajax({
		url: 'http://ajax.minon.ru/minon.php',
		type: 'POST',
		dataType: 'html',
		data: {data},
		async: false,
	})
	.done(function(data) {
		result = data;
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});
	$('#console').text(result);
	return result;
}


