/* QUESTION 3:
	
	Write a function that converts HEX to RGB. 

	Then Make that function auto-dect the formats so that 

	if you enter HEX color format it returns RGB and 
	if you enter RGB color format it returns HEX.

*/

// Test values
let hexVal1 = "9e";
let hexVal2 = "4a";
let hexVal3 = "4a"; // rgb(158, 74, 74)
let rgbVal1 = 255;
let rgbVal2 = 104;
let rgbVal3 = 23; // #ff6817
function colourConverter(val,val2,val3) { // hex to rgb, rgb to hex
	if(typeof val === "string" && typeof val2 === "string" && typeof val3 === "string") {
		val = parseInt(val, 16);
		val2 = parseInt(val2, 16);
		val3 = parseInt(val3, 16);
		return `rgba(${val}, ${val2}, ${val3})`;
	} else if (typeof val === "number" && typeof val2 === "number" && typeof val3 === "number") {
		val = val.toString(16);
		val2 = val2.toString(16);
		val3 = val3.toString(16);
		return `#${val}${val2}${val3}`;
	}
}



console.log("////// START OF Q3 //////");

console.log("Q3  vals  RGB =>", colourConverter(hexVal1,hexVal2,hexVal3));
console.log("Q3  vals  HEX =>", colourConverter(rgbVal1,rgbVal2,rgbVal3));

console.log("////// END OF Q3 //////");
