// function deleteAndEarn(nums) {
//     let points = {};
//     let maxNumber = 0;
//     let mem = {};
//     for(let num of nums) {
//         if (points[num] == undefined) {
//             points[num] = 0;
//         }
//         maxNumber = Math.max(maxNumber, num);
//         points[num] +=num;
//     }
    
//     const maxPoint = (i) => {
//         if (i == 0) {
//             return 0;
//         }
//         if (i == 1) {
//             return points[1] || 0;
//         }
//         if (mem[i]) {
//             return mem[i]
//         }
        
//         mem[i] = Math.max(maxPoint(i-1), maxPoint(i-2) + (points[i] || 0));
//         return mem[i];
//     }


//     const r = maxPoint(maxNumber);
//     return r;
// };

function deleteAndEarn(nums) {
    let points = {};
    let maxNumber = 0;
    for (let num of nums) {
        points[num] = (points[num] || 0) + num;
        maxNumber = Math.max(maxNumber, num);
    }

    const memo = {};
    const maxPoints = (num) => {
        if (num === 0) return 0;
        if (num === 1) return points[1] || 0;
        if (memo[num] !== undefined) return memo[num];

        const result = Math.max(
            maxPoints(num - 1),
            maxPoints(num - 2) + (points[num] || 0)
        );
        memo[num] = result;
        return result;
    };

    return maxPoints(maxNumber);
};

const nums = [10000];
const res = deleteAndEarn(nums);
console.log(res);