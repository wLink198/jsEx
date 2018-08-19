function slasher(arr, num) {
	if (num>=arr.length) {
  		return [];
  	}
  	else {
	  	if (num<=0) {
	    	return arr;
	    }
	    else {
    		arr.splice(0, num);
			return arr;   
	  	}
	}  
}
console.log(slasher(["Heo", 24, 1, 32, "Gà"], 3))