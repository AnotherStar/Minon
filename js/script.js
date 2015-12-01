alert('before ready');

$(document).ready(function() {
	alert('ready');
	document.addEventListener('deviceready', init_app, false);
});

function init_app(){
	alert('init_app');
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