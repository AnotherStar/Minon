$(document).ready(function() {
	$('#console').text('Ready!');
	$('#console').append(getAjax());
});

function getAjax(){
	var result;
	$.ajax({
		url: 'http://ajax.minon.ru/minon.php',
		type: 'POST',
		dataType: 'html',
		async: false,
		data: {action: 'helloWorld'},
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