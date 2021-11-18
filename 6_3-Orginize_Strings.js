function orginizeStrings(s1,s2) {
    let result= new Set();
    let arrStr1 = s1.split('');
    let arrStr2= s2.split('');
    arrStr1.forEach(char=>result.add(char));
    arrStr2.forEach(char=>result.add(char));
    return Array.from(result).sort().join('');
}

console.log(orginizeStrings('xyaabbbccccdefww','xxxxyyyyabklmopq'));
console.log(orginizeStrings('ddddsdd','drwertdd'));
