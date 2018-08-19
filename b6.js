var result = [];
function largestOfFour(arr1, arr2, arr3, arr4) {
	arr1.sort(function(a, b){return b-a});
	arr2.sort(function(a, b){return b-a});
	arr3.sort(function(a, b){return b-a});
	arr4.sort(function(a, b){return b-a});
	result.push(arr1[0], arr2[0], arr3[0], arr4[0]);
	return result;
}