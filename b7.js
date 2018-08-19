function confirmEnding(string, target) {
	if (string.substr(-target.length) === target) {
		return true
	}
	else {
		return false
	}
}
alert(confirmEnding("Hôm nay trời thật đẹp", "ẹp"))