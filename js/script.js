alert('before init');

$(document).ready(function() {
	init();
});

function init(){
	alert('init');
	$('#console').text('Ready!');
	$('#console').append(getAjax());
	$('#console').append(getAjax());
}

function getAjax(){
	alert('getAjax');
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
		console.log(data);
	})
	.always(function() {
		$('#console').append(' always ');
	});
	return result;
}