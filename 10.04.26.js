// Рекурсия - это функция, которая в процессе выполнения может вызываться себя повторно. 

// 1 Cпособ - интеративынй: 
let x = 2;
let n = 3;

function pow(x,n)  {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

alert( pow(2,3) );

// 2 Способ - рекурсивный:

function pow(x,n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x,n - 1)
  }
}

alert( pow(2,3) );

// 2 задание с объектами и массивами 
let company = {
  sales: [{
    name: "John",
    salary: 1000
  }, {
    name: "Ivan",
    salary: 700
  }],

  development: {
    sities: [{
      name; "Alice",
      salary: 800
    }, {
      name: "Daniel",
      salary: 900,
    }],
    internals: [{
      name: "Jack",
      salary: 800
    }]
  }
};

function sumSalaries(department) {
  if (Array.isArray(department)) {
    return depatment.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep);
    }
    return sum;
  }
}





function bubbleSort(arr) {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if(arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
}
