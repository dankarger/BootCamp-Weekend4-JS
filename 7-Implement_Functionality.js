data = {
    numbers: [1, 2, 3, 4, 5, 6,],
    strings: ['bla', 'blabla', 'this', 'tralalal']
}

//-------Filter--------
//kind can be 'odd' or 'even'.
function implimentFilter(data, kind) {
    let numbers = data.numbers;
    if (kind === 'even') {
        return numbers.filter(number => {
            if (number % 2 === 0) {
                return number;
            }
        })
    }
    if (kind === 'odd') {
        return numbers.filter(number => {
            if (number % 2 !== 0) {
                return number;
            }
        })
    }
}

//Test
console.log('Filter:' ,implimentFilter(data, 'even'));
console.log('Filter:' ,implimentFilter(data, 'odd'));


//------Map-------
//return power of 2 for each number in the array
function implimentMap(data) {
    let numbersArray = data.numbers;
    return numbersArray.map(num=>num*2);
}
// Test
console.log('Map:' ,implimentMap(data))

// --------forEach---------

// return array of string with the first letter uppercase
function implimentForEach(data){
    let arrayOfStrings = data.strings;
    let result = []
        arrayOfStrings.forEach(word=>{
        result.push(word[0].toUpperCase()+word.slice(1))
    })
    return result
}

//Test
console.log('forEach: ',implimentForEach(data));

//--------------------Extra-------------------------------------

//filter:
//return array of even numbers
function extraFilter(data,kind) {
    let numbersArray = data.numbers;
    let result = [];
    for(let i = 0; i < numbersArray.length; i++) {
        if(kind === 'even') {
            if (numbersArray[i] % 2 === 0) {
                result.push(numbersArray[i]);
            }
        }
        if(kind === 'odd') {
            if (numbersArray[i] % 2 !== 0) {
                result.push(numbersArray[i]);
            }
        }

    }
    return result;
}
console.log('Filter-Extra:' ,extraFilter(data,'even'));
console.log('Filter-Extra:' ,extraFilter(data, 'odd'));

//Map-Extra
function extraMap(data) {
    let numbers = data.numbers;
    let result=[];
    for(let i=0;i<numbers.length;i++) {
        result.push(numbers[i]*2)
    }
    return result;
}
console.log('Extra-Map',extraMap(data))

//Extra- forEach
function extraForEach(data) {
    let arrayOfstrings = data.strings;
    let result = [];
    for(let i=0;i<arrayOfstrings.length;i++) {
        result.push(arrayOfstrings[i][0].toUpperCase()+arrayOfstrings[i].slice(1));
    }
    return result
}
console.log('Extra-forEach:' , extraForEach(data));