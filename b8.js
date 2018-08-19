function repeatStringNumTimes(string, times) {
	var output = "";
	for (i=0; i<times; i++) {
		output += string;
	}
	return output;
}
alert(repeatStringNumTimes("Lặp em đi", 3))