let button = document.getElementById("gen");
// var canvas = document.getElementById("canvas");

button.onclick = () => {
	fetch("https://api.statbotics.io/v3/team_year/1391/2023").then((res) => {
		console.log(res);
		console.log(res.json());
	});
	TBAHeaders = new Headers();
	TBAHeaders.append(
		"X-TBA-Auth-Key",
		"oPPHkGl0iiYsAvlMObdoj0PcYcI7gSE8qlrZ8NCmzYodo2fNmWfAh90c6RFKqboe"
	);
	fetch("https://www.thebluealliance.com/api/v3/event/2023mrcmp/teams/simple", {
		headers: TBAHeaders,
	}).then((res) => {
		console.log(res);
		console.log(res.json());
	});
	FRCHeaders = new Headers();
	FRCHeaders.append(
		"Authorization",
		"Basic cmF6emxlY2F0OjhiODdiMTVmLTNmZTMtNGM4MC1iNzExLWU5MjdhNzEwMDk0NQ=="
	);
	FRCHeaders.append("If-Modified-Since", "");
	fetch("https://frc-api.firstinspires.org/v3.0/2023/events?districtCode=FMA", {
        method: 'GET',
		headers: FRCHeaders,
        redirect: 'follow'
	}).then((res) => {
		console.log(res);
		console.log(res.json());
	});

	// QRCode.toCanvas(canvas, "sample text", function (error) {
	// 	if (error) console.error(error);
	// 	console.log("success!");
	// });
};
