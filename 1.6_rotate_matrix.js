/*
 Given an image represented by an NxN matrix, where each pixel in the image is 4
 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
 */

///For Loop
function rotateMatrix(matrix) {
    let newMatrix = [];

    for (let i = 0; i < matrix.length; i++){
        let temp = [];
        for (let j = 0; j < matrix[i].length; j++) {
            temp.push(matrix[matrix[i].length - 1  - j][i]);
        }
        newMatrix.push(temp);
    }

    return newMatrix;
}
