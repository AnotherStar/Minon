var rithm = 80;

$(document).ready(function() {
	document.addEventListener("deviceready", onDeviceReady(), true);
	$('#rithm').on('change', function(){
		rithm = $('#rithm').val();
		$('#rithm_text').text(rithm);
	})
	heartBeat();
});


function onDeviceReady(){
	ajax();
}

function ajax(){
	var result;
	$.ajax({
		url: 'http://ajax.minon.ru/minon.php',
		type: 'POST',
		dataType: 'html',
		data: {},
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

function heartBeat(){

	var time = 60*1000/rithm;
	var b1 = .2 * time;
	var w1 = .15 * time;
	var b2 = .1 * time;
	var w2 = .55 * time;
	navigator.vibrate([b1, w1, b2]);
	setTimeout(function(){
		heartBeat(rithm);
	}, w2);

}

// Register for any urban airship events
// document.addEventListener("urbanairship.registration", function (event) {
//     if (event.error) {
//         console.log('there was an error registering for push notifications');
//     } else {
//         console.log("Registered with ID: " + event.pushID);
//     } 
// }, false)

// document.addEventListener("urbanairship.push", function (event) {
//     console.log("Incoming push: " + event.message)
// }, false)

// // Set tags on a device, that you can push to
// // https://docs.urbanairship.com/display/DOCS/Server%3A+Tag+API
// PushNotification.setTags(["loves_cats", "shops_for_games"], function () {
//     PushNotification.getTags(function (obj) {
//         obj.tags.forEach(function (tag) {
//             console.log("Tag: " + tag);
//         });
//     });
// });

// // Set an alias, this lets you tie a device to a user in your system
// // https://docs.urbanairship.com/display/DOCS/Server%3A+iOS+Push+API#ServeriOSPushAPI-Alias
// PushNotification.setAlias("awesomeuser22", function () {
//     PushNotification.getAlias(function (alias) {
//         console.log("The user formerly known as " + alias)
//     });
// });

// // Check if push is enabled
// PushNotification.isPushEnabled(function (enabled) {
//     if (enabled) {
//         console.log("Push is enabled! Fire away!");
//     }
// })