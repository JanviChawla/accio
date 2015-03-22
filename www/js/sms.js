document.addEventListener("deviceready", init, false);
function init() {

	document.querySelector("#sendMessage").addEventListener("touchend", function(person, lat, lon) {
		console.log("click");
		var name = ['Vicky', 'Tina', 'Piya', 'Janvi'];
		var number = [6789392712, 6785755462, 7064903774, 7708763971];
		for (i = 0, i < 4, i++) {
			if (person == name[i]) {
				var p = person;
			}
		}
		var message = p + ' is out of range at ' + lat + ', ' + lon;
		//var number = document.querySelector("#number").value;
		//var message = document.querySelector("#message").value;
		console.log("going to send "+message+" to "+name[0]+", "+name[1]+", "+name[2]+", "+name[3]);

		//simple validation for now
		if(number === '' || message === '') return;

		for (i = 0; i < 4; i++) {
			var msg = {
				phoneNumber:number[i],
				textMessage:message
			};

			sms.sendMessage(msg, function(message) {
				console.log("success: " + message);
				navigator.notification.alert(
				    'Message to ' + number + ' has been sent.',
				    null,
				    'Message Sent',
				    'Done'
				);

			}, function(error) {
				console.log("error: " + error.code + " " + error.message);
				navigator.notification.alert(
					'Sorry, message not sent: ' + error.message,
					null,
					'Error',
					'Done'
				);
			});
		}

	}, false);

}