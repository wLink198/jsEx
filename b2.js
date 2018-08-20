var number = 0;
function factorialize(number) {
	var result = 1;
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
