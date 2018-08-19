var result = "";
function titleCase(str) {
	str.split(" ").forEach( function(e) {
		var start = e.substring(0, 1).toUpperCase();
		var end = e.substring(1).toLowerCase();
		result += " " + start+end
	});
	return result;
}