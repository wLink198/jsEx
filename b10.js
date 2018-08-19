function chunkArrayInGroups(arr, size) {
	var result = [];
	for (var i=0; i<arr.length; i+=size) {
  		result.push(arr.slice(i, i+size))
  	}
  return result;
}
(chunkArrayInGroups(["a", 3, 5, 2, "xa", "2d"], 3));