var state = "init";
var data = {};
function panelState(state) {
	if(state === "init") {
		var submitButton = document.getElementById("submit");
		self.port.on("show", function() {
			document.getElementById("host").focus();
		});
		submitButton.addEventListener("click", function() {
			data = {
				host: document.getElementById("host").value,
				key: document.getElementById("API").value
			};
			self.port.emit("submit-button-press", data);
			document.getElementById("init").style.cssText = "display: block";
			document.getElementById("other").style.cssText = "display: none";
			state = "projects";
			panelState(state);
			self.port.emit("submit-button-press", state);
		}, false);
	} else {
		var backButton = document.getElementById("back");
		backButton.addEventListener("click", function() {
			document.getElementById("init").style.cssText = "display: none";
			document.getElementById("other").style.cssText = "display: block";
			state = "init";
			panelState(state);
		});
	};
}

panelState(state);