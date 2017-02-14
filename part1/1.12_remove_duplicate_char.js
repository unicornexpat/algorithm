/*
 Question: How will you remove duplicate characters from a sting?
 */

function removeDuplicateChar(str) {
    return [...(new Set(str.split('')))].join('');
}

removeDuplicateChar('Ethan Nguyen');