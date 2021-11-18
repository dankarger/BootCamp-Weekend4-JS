function countDuplicates(str) {
    let arrStr = str.toLowerCase().split('');
    let result = []
    let numberOfDuplicates = 0;
    let count = arrStr.reduce((result, letter) => {
        if (result[letter]) {
            result[letter] += 1;
        } else {
            result[letter] = 1;
        }
        return result;
    }, {});
    for (let [key, value] of Object.entries(count)) {
        if (value > 1) {
            numberOfDuplicates++;
            result.push([`char "${key}" duplicated ${value} times| `]);
        }
    }
    if (numberOfDuplicates === 0) {
        return 'There are 0 duplicates in the string'
    }
    return `${numberOfDuplicates}#-- ${result.join('')}`
}

//Test
console.log(countDuplicates('aabbcde11'));
console.log(countDuplicates('aaBBssDDdffF'));
console.log(countDuplicates('abcde1'));