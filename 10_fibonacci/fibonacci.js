const fibonacci = function (num) {
	let fibArr = [];
  
	let n1 = 0,
	  n2 = 1,
	  nextTerm;
  
	for (let i = 1; i <= num + 1; i++) {
	  fibArr.push(n1);
	  nextTerm = n1 + n2;
	  n1 = n2;
	  n2 = nextTerm;
	}
  
	return fibArr[num];
  };

// Do not edit below this line
module.exports = fibonacci;
