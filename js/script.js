alert('first');


$(document).ready(function() {
	alert('ready');
	document.addEventListener("deviceready", onDeviceReady(), true);
	$('#console').text(Date.now);
});


function onDeviceReady(){
	alert(ajax());
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
	return result;
}


