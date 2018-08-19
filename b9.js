function truncateString(str, num) {
	var result = "";
	if (str.length<=3) {
  	if (str.length>num) {
    	result = str.slice(0, num) + "..."
    }
  }
  else {
  	if (str.length>num) {
    	if (num>3) {
      	result = str.slice(0, num-3) + "..."
      }
    	else result = str.slice(0, num) + "..."
    }
  }
  return result;
}
alert(truncateString("Tin hot: Nữ sinh thích ăn quà trong giờ học", 25))