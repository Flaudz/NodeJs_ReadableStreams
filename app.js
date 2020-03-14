const http = require("http");
const fs = require("fs");

const myReadStream = fs.createReadStream(__dirname + "/textfile.txt", "utf8");

myReadStream.on("data", (chunk) => {
	console.log("New chunk recevied:");
	console.log(chunk);
});
