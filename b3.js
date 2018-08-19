var string = "";
function palindrome(string) {
	if (string.split("").reverse().join("").replace(/[\W_]/g,"").toLowerCase() === string.replace(/[\W_]/g,"").toLowerCase()) {
		return true
	}
	else {
		return false
	}
}