
function anagram(s){
    // Complete this function

    //case 1 odd number return -1
    if (Number.isInteger(s) || s.length < 2 || s.length % 2 === 1) return -1;

    const s1 = s.substring(0, s.length / 2).split('');
    const s2 = s.substring(s.length / 2, s.length).split('');

    let changes = 0;
    let s2Obj = {};
    let s1Obj = {};

    //Count character
    s2.forEach((c) => {
        s2Obj[c] ? s2Obj[c]++ : s2Obj[c] = 1;
    });

    s1.forEach((c) => {
        s1Obj[c] ? s1Obj[c]++ : s1Obj[c] = 1;
    });

    for (let key in s2Obj) {
        if (s1Obj[key]) changes += s2Obj[key] - s1Obj[key];
        else changes += s2Obj[key];
    }

    return changes;
}

console.log(anagram('aaabbb'));
console.log(anagram(6788));