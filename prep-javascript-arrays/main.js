
// declare array
var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log(languagesArray);

// array length
console.log(languagesArray.length);

// add elements
languagesArray.push('C#', 'php');
console.log(languagesArray);

// remove last item
languagesArray.pop();
console.log(languagesArray);

// add to beginning
languagesArray.unshift('C++');
console.log(languagesArray);

// remove first element
languagesArray.shift();
console.log(languagesArray);

// thirdElement assignment
var thirdElement = languagesArray[2];
console.log(thirdElement);

// array.length of array
var arrayLength = languagesArray.length;
console.log(arrayLength);

// lastItem of array
var lastItem = languagesArray[languagesArray.length - 1];
console.log(lastItem);
