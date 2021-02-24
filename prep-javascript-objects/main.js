var person = {
  firstName: 'Aly',
  lastName: 'Klepper',
  hobby: 'cooking'
};
console.log(person);

// put pluses before and after eat dot.notation to fully add it
var fullName = 'The person\'s name is:' + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

// dot notion to add new property named job to person object, and assign it to a string value
person.job = 'student';
console.log('The person\'s current job is: ' + person.job + '.');

// dot notion for previous job property added to person object
person.previousJob = 'sales manager';
console.log('The person\'s previous job is: ' + person.previousJob + '.');

console.log(person);

// declare new object myCar
var myCar = {
  make: 'jeep',
  model: 'patriot',
  year: '2014'
};

console.log(myCar);

// bracket notation to create new property for owner on myCar
myCar['owner'] = person.firstName + ' ' + person.lastName;

// use bracket notation to create a concatenated string
console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.');

// bracket notation to add color on myCar object
myCar['color'] = 'grey';

// final console log for myCar
console.log(myCar);
