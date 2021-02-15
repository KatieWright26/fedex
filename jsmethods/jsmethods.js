// MAP
const arrayToMap = [1,2,3,4,5,6,7,8];
// array.map(a => a + 2);
const map = (arr) => {
    let newArray = [];
    for(let i = 0; i < arr.length; i++ ) {
        newArray.push(arr[i] + 2);
    }
    return newArray;
}

// expect [3, 4, 5, 6, 7, 8, 9, 10];
console.log('map: ', map(arrayToMap));


// FILTER - get all even numbers from an array

// array.filter(a => a % 2 === 0);
const arrayToFilter = [1,2,3,4,5,6,7,8, 9, 10];

const filter = (arr) => {
    let newArray = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

// expect [ 2, 4, 6, 8, 10 ]
console.log('filter: ', filter(arrayToFilter));


// array.reduce((accumulator, item) => accumulator + item, 0)

//REDUCE - reduce an array of mixed values and return a sum of all integers; 
const arrayToReduce = [1,2,'katie',4,5,{},7,8];

const reduce = ((accumulator, arr) => {
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
            accumulator += arr[i]; 
        }
    }
    return accumulator;
});

// expect 27
console.log('reduce: ', reduce(0, arrayToReduce))
