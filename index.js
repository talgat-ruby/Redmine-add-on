var data = {};
var self = require("sdk/self");
var Request = require("sdk/request").Request;
var { ToggleButton } = require("sdk/ui/button/toggle");

var button = ToggleButton({
	id: "my-button",
    label: "my button",
    icon: {
	    "16": "./icon-16.png",
	    "32": "./icon-32.png",
	    "64": "./icon-64.png"
  	},
  	onClick: handleClick
});

var panel = require("sdk/panel").Panel({
	contentURL: self.data.url("panel.html"),
	contentStyleFile: self.data.url("panel.css"),
	contentScriptFile: self.data.url("panel.js")
});

function handleClick(state) {
	panel.show({position: button});
}

panel.on("show", function() {
	panel.port.emit("show");
});

panel.port.on("submit-button-press", function(text) {
	data = text;
	console.log(data);
});