let button = document.getElementById("gen")
var QRCode = require("./qrcode");
var canvas = document.getElementById("canvas");

button.onclick = () => {
    

		QRCode.toCanvas(canvas, "sample text", function (error) {
			if (error) console.error(error);
			console.log("success!");
		});
}