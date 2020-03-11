// import React from "react";
const contrast = require("get-contrast");

const randomColor = () => {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
};
const getRandomPair = () => {
	let color1 = randomColor();
	let color2 = randomColor();
};

export default getRandomPair;
