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
		$('#console').append(' done ');
		result = data;
	})
	.fail(function(data) {
		$('#console').append(' fail ');
		console.log("fail");
		alert(data);
	})
	.always(function() {
		$('#console').append(' always ');
	});
	return result;
}