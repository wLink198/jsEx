var string = "";
var longest = 0;
function findLongestWord(string) {
	string.split(" ").forEach(function(e) {
		if (e.length>longest) {
			longest = e.length;
		}
	})
	return longest;
}