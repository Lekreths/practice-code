let arr = [1,"Hello",3];
arr.delete("Hello")
alert( arr.length ); //3

let arr2 = [1,2,3,4]
arr2.splice(0,1)
alert(arr2); //2,3,4

let arr3 = [1,2,3,4]
arr3.slice(1,3)
alert(arr3) //2,3

// delete: can delete the element in massive, but when you need use length, then can be same length, then before
// splice: can delete the element on an index, an element or 's
// splice: can copy elements with use index and element, like 1 index start - and 3 index to end 

let arr4 = [1,2,3,4]
arr4.forEach(alert)
arr4.forEach(function(item, index, array) {
  alert(`The ${item} has index ${index} in ${array}`);
})

let arr5 = [1,2,3,4]
alert(arr5.indexOf(2)); // 1
alert(arr5.indexOf(4)); // 3
alert(arr5.indexOf(null)) // -1 

// Be careful, in there used by ===, then if he found "false", this is correctly "false", not zero 0

let arr6 = [1,2,3,4]
alert(arr6.includes(1) // True
alert(arr6.includes(3) // True 
alert(arr6.includes(5) // False 

// forEach - is method, where every element in array used "separately"
// indexOF - is method, where from massive find the correctly element.
// includes - it is like indexOf, but in return write: True, False

let arr7 = [
  {id: 1, number: 1},
  {id: 2, number: 2},
  {id: 3, number: 3},
  {id: 4, number: 1}
];

// 1.1 find
let result = arr7.find(item => item.id == 1);
alert(result.number);
// 1.2 find 
let result = arr7.find(function(item) {
  return item.id == 1;
})
alert(result)

// 2.1 findIndex
alert(arr7.findIndex(number => arr7.name == 2)) // 1
// 2.2 findLastIndex
alert(arr7.findLastIndex(number => arr7.name == 1)) // 3

// find - is a method, where from array with objects find corrctly massive

let arr8 = [
  {id: 1, number: 1},
  {id: 2, number: 2},
  {id: 3, number: 3},
  {id: 4, number: 1}
];

let result = arr8.filter(item => item.id < 3);
alert(result.length);

// filter - like mthod find, but be able to find many same elements: 4 or more

let arr9 = ["Alfa", "Beta", "Gamma"];
alert(arr9.map(item => item.length));

// From [A,B,C] to [4,4,5];


let arr10 = [2, 1, 15];
alert(arr10.sort());

// Be careful: sort without other functions, can sort like stirng elements 
// 2, 1, 15 -> 1, 15, 2 
// You need create a funbction, where can be if/else for integer

function Numbers(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

alert(arr10.sort(Numbers));
// 2 - 1 - 15 -> 2 - 1 - 15

let arr11 = ["Alfa", "Beta", "Gamma"];
let example = arr11.split(', ');
for (let name of arr11) {
  alert(`Сообщение получат: ${name}.`)
}

// split like a cut, evry elemnt cut from array and print everytime 

let arr12 = ["Alfa", "Beta", "Gamma"];
let example = arr12.join(';);
alert(example);
// Alfa;Beta;Gamma

// join: no commentary...








