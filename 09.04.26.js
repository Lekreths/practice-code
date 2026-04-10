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
;

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




