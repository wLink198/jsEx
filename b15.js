function getIndexToIns(arr, number) {
	arr.push(number);
	arr.sort(function(a, b){return a-b});
	return arr.indexOf(number)
}
getIndexToIns([1, 4, 2, 0, 10], 2)