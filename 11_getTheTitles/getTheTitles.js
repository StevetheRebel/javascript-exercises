const getTheTitles = function (arr) {
	let titleArray = [];
	let len = arr.length;
  
	for (let i = 0; i < len; i++) {
	  titleArray.push(arr[i].title);
	}
  
	return titleArray;
  };

// Do not edit below this line
module.exports = getTheTitles;
