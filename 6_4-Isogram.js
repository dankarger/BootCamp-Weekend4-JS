function isIsograme(str) {
    let setFromStr = new Set(str.toLowerCase());
    return setFromStr.size===str.length;
}

//Test
console.log(isIsograme('bsdat88'));
console.log(isIsograme('aba'));
console.log(isIsograme('dermatoglyphics'));
console.log(isIsograme('abcdefgt'));