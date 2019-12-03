/* QUESTION 2:
	
	Write a javascript function that takes an array of numbers and a target number. 
	The function should find two different numbers in the array that, 
	when added together, give the target number. 

	For example: answer([1,2,3], 4)should return [1,3]

*/
const q2_array = [1,2,3,4,2];
	  //index:    0 1 2
function arrayTarget(array, target) {
	let temp = [];
	let sumArray= [];
	let resultArray = [];
	
	for(let i = 0; i < array.length; i++) {
		if(array[i] + array[i+1] === target) {
			temp.push(array[i], array[i+1]);
			sumArray.push(temp);
			temp = [];
		} 
		for(let j = 0; j < i; j++) {
			if(array[i+1] + array[j] === target) {
				temp.push(array[j], array[i+1]);
				sumArray.push(temp);
				// console.log("0",sumArray[0]);
				// console.log("1",sumArray[1]);
				if(sumArray[i-1] === array[j][i]) {
					sumArray.pop();
				}
				temp = [];
			}
		}
		
	}
	resultArray = resultArray.concat([sumArray]);
	
	return resultArray;
}


console.log("////// START OF Q2 //////");

console.log("Q2 array vals =>", arrayTarget(q2_array, 4));

console.log("////// END OF Q2 //////");
