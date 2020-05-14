registerServiceWorker();

async function registerServiceWorker() {
	if ("serviceWorker" in navigator) {
		try {
			await navigator.serviceWorker.register("./serviceWorker.js");
		} catch (e) {
			console.log("SW registration failed");
		}
	}
}

//Sending an Ajax request to a file within the system
// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function () {
// 	if (this.readyState == 4 && this.status == 200) {
// 		var response = xhttp.responseText;

// 		var output = "";
// 		for (var i = 0; i < response.length; i++) {
// 			output += "<li>" + response[i] + "</li>";
// 		}
// 		document.getElementById("people").innerHTML = output;
// 	}
// };
// xhttp.open("GET", "people.json", true);
// xhttp.send();
