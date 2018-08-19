var number = 0;
var result = 1;
function factorialize(number) {
	if (number === 0) {
   		result = 1;
  	}
	else {
		var i = 1;
		while (i <= number) {
		  result *= i;
		  i++;
		}  
	}
	return result;
}