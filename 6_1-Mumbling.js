function accum(str) {
    let arrStr = str.toLowerCase().split('');
    let result =[];
    arrStr.forEach((letter,index)=>{
        let extra= letter.repeat(index);
        let firstLetter= letter.toUpperCase();
        result.push(firstLetter+extra);
    })
    return result.join('-')
}


//Test:
console.log(accum("abcd"));
console.log(accum("RqaEzty"));