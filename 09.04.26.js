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
arr4.forEach(function(item, index, array) = {
  alert(`The ${item} has index ${index} in ${array}`);
})

let arr5 = [1,2,3,4]
alert(arr.indexOf(2)); // 1
alert(arr.indexOf(4)); // 3
alert(arr.indexOf(null)) // -1 

// Be careful, in there used by ===, then if he found "false", this is correctly "false", not zero 0

