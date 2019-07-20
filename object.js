console.log("Here is : ", "Object");

/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

var persons = [
  { name: { first: "John", last: "Hob" }, age: 35 },
  { name: { first: "Alex", last: "Mercer" }, age: 25 },
  { name: { first: "Alice", last: "Zaheer" }, age: 24 },
  { name: { first: "Zues", last: "Odin" }, age: 55 },
  { name: { first: "Soso", last: "Al-Amora" }, age: 67 }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
// function repeatWord(str) {
//   str = str.toLowerCase();
//   var arr = str.split(" ");
//   arr.sort();
//   var current = "";
//   var counter = 0;
//   var obj = {};
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] != current) {
//       if (counter > 0) {
//         obj[current] = counter;
//       }
//       current = arr[i];
//       counter = 1;
//     } else {
//       counter++;
//     }
//   }
//   if (counter > 0) {
//     obj[current] = counter;
//   }
//   return obj;
// }

// console.log(
//   repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
// );
// function repeatWord(str) {
//   str = str.toLowerCase();
//   var array = str.split(" ");
//   var keys = [];
//   var values = [];
//   for (let i = 0; i < array.length; i++) {
//     var counter = 0;
//     keys[i] = array[i];
//     for (let j = 0; j < array.length; j++) {
//       if (array[i] == array[j]) {
//         counter++;
//       }
//     }
//     values[i] = counter;
//   }
//   var newObject = {};
//   keys.forEach((key, i) => (newObject[key] = values[i]));
//   return newObject;
// }
// console.log(
//   repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
// );
/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

function selectFromObject(obj, arr) {
  var newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] != null) {
      newObj[arr[i]] = obj[arr[i]];
    }
  }
  return newObj;
}
console.log(selectFromObject({ a: 1, cat: 3 }, ["a", "cat", "d"]));
/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
function objectToArray(obj) {
  return [Object.keys(obj)[0], obj.firstName, Object.keys(obj)[1], obj.age];
}
// console.log(objectToArray({ firstName: "Moh", age: 24 }));
/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function arrayToObject(arr) {
  var obj = {};
  for (let i = 0; i < arr.length - 1; i++) {
    obj[arr[i]] = arr[i + 1];
    i++;
  }
  return obj;
}
// console.log(arrayToObject(["firstName", "Moh", "age", 24]));
/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
// typeof arr[i] === "number"
function onlyNumber(obj) {
  var arr = Object.keys(obj);
  var newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (typeof obj[arr[i]] === "number") {
      newObj[arr[i]] = obj[arr[i]];
    }
  }
  return newObj;
}
console.log(
  onlyNumber({ firstName: "Moh", age: 24, movies: [1, 5, "string"] })
);
/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function onlyString(obj) {
  var arr = Object.keys(obj);
  var newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (typeof obj[arr[i]] === "string") {
      newObj[arr[i]] = obj[arr[i]];
    }
  }
  return newObj;
}
console.log(
  onlyString({ firstName: "Moh", age: 24, movies: [1, 5, "string"] })
);
/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function onlyArray(obj) {
  var arr = Object.keys(obj);
  var newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (typeof obj[arr[i]] === "object") {
      newObj[arr[i]] = obj[arr[i]];
    }
  }
  return newObj;
}
console.log(onlyArray({ firstName: "Moh", age: 24, movies: [1, 5, "string"] }));
/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
function keysArray(obj) {
  return Object.keys(obj);
}
console.log(keysArray({ firstName: "Moh", age: 24, movies: [1, 5, "string"] }));
/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/
function valuesArray(obj) {
  return Object.values(obj);
}
console.log(
  valuesArray({ firstName: "Moh", age: 24, movies: [1, 5, "string"] })
);
/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
var objective = { a: 1, b: 3, c: 4 };
objective["a"] = 4;
delete objective.b;
objective["c"] = 66;
console.log(objective);
/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
function objectLength(obj) {
  return Object.keys(obj).length;
}
console.log(objectLength({ a: 1, b: 2, c: 3, d: 4 }));
/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
function evenValue(obj) {
  var arr = Object.keys(obj);
  var newObj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]] % 2 == 0) {
      newObj[arr[i]] = obj[arr[i]];
    }
  }
  return newObj;
}
console.log(evenValue({ a: 1, b: 2, c: 3, d: 4 }));
/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
function longestKey(obj) {
  var arr = Object.keys(obj);
  var newObj = {};
  var inst = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (inst.length < arr[i].length) {
      inst = arr[i];
    }
  }
  newObj[inst] = obj[inst];
  return newObj;
}
console.log(longestKey({ car: 1, school: 2, monster: 3, alexMercer: 4 }));
