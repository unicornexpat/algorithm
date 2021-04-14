var findNumbers = function(nums) {
    let count = 0;
    let evenNumber = 0;
    for(let i = 0;i < nums.length; i++) {
        let number = nums[i];
        count = 0;
        while(number > 0) {
            number = Math.floor(number / 10);
            ++count;
        }
        if(count % 2 === 0) {
            ++evenNumber;
        }
    }
    return evenNumber;    
};

console.log(findNumbers([768, 1, 2678]));