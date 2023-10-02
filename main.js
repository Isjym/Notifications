let notificationContainer = document.getElementById("notification_container");
let successMsg = "Successfully did something.";
let errorMsg = "Something went wrong. Pls try again.";
let infoMsg = "You are now logged in.";
let warningMsg = "You havent changed your passwort for a while.";


function createNotification(Msg, notificationType) {
	let newElement = document.createElement("div");
	newElement.classList.add("notification");
	newElement.classList.add("noselect");

	switch (notificationType) {
		case "successBtn": {
			newElement.innerHTML = "<strong>Success</strong> <span   class=close_NotificationBtn onclick=closeNotification(this)>x</span> <span>" + Msg + "</span>";
			newElement.classList.add("success");
			break;
		}
		case "errorBtn": {
			newElement.innerHTML = "<strong>Error</strong> <span class=close_NotificationBtn onclick=closeNotification(this)>x</span> <span>" + Msg + "</span>";
			newElement.classList.add("error");
			break;
		}
		case "infoBtn": {
			newElement.innerHTML = "<strong>Info</strong> <span class=close_NotificationBtn onclick=closeNotification(this)>x</span> <span>" + Msg + "</span>";
			newElement.classList.add("info");
			break;
		}
		case "warningBtn": {
			newElement.innerHTML = "<strong>Warning</strong> <span class=close_NotificationBtn onclick=closeNotification(this)>x</span> <span>" + Msg + "</span>";
			newElement.classList.add("warning");
			break;
		}
	}

	notificationContainer.appendChild(newElement);

	setTimeout(() => {
		newElement.remove();
	}, 6000);

}


function closeNotification(object) {
	object.parentElement.remove();
}
