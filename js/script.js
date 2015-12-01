document.addEventListener("deviceready", onDeviceReady(), true);

function onDeviceReady(){
	alert('onDeviceReady');
	$(document).ready(function() {
		alert('ready');
		$('#console').text(Date.now);
	});
}

