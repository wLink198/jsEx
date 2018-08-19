function rot13(str) {
    var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    var result = str.split('').map(translate).join('');

    function translate(x) {
    	if (index(x) > -1) {
    		return output[index(x)]
    	}
    	else {
    	 	return x
    	 }
    }
    function index(x) {
    	return input.indexOf(x)
    }
  
    return result;
}
rot13("gtaSA")