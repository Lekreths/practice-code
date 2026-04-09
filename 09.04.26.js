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
