const palindromes = function (str) {
	let strLength = str.length;
  
	for (let i = 0; i < str.length / 2; i++) {
	  if (str[i] !== str[strLength - 1 - i]) {
		return false;
	  }
  
	  return true;
	}
  
	return;
  };

// Do not edit below this line
module.exports = palindromes;
