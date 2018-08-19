function destroyer(arr) {
	var args = Array.prototype.slice.call(arguments);
	args.splice(0, 1);
	var result = arr.filter(e => {
		if (args.indexOf(e) === -1) {
			return e
		}
	})
	return result;
}
destroyer([9],1,2,3)