alert('first');


$(document).ready(function() {
	alert('ready');
	document.addEventListener("deviceready", onDeviceReady(), true);
	$('#console').text(Date.now);
});


function onDeviceReady(){
	alert('onDeviceReady');
}

