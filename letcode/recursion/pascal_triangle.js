/*
Given an integer rowIndex, return the rowIndexth row of the Pascal's triangle.

Notice that the row index starts from 0.

Input: rowIndex = 3
Output: [1,3,3,1]
*/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if (rowIndex == 0) {
    	return [1];
    }

    if (rowIndex > 0) {
    	const a = [1];
    	const p = getRow(rowIndex - 1);
    	for (let i = 1; i < rowIndex; i++) {
    		a[i] = p[i - 1] + p[i];
    	}
    	a.push(1);
    	return a;
    }
};

console.log(getRow(3));
