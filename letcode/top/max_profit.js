/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/
var maxProfit = function(prices) {
    let i =0;
    let maxProfit = 0;
    let top = prices[0];
    let bottom = prices[0];

    while(i < prices.length - 1) {
    	while (i < prices.length - 1 && prices[i] >= prices[i+1]) {
    		++i;
    	}
    	bottom = prices[i];
    	while (i < prices.length - 1 && prices[i] <= prices[i+1]) {
    		++i;
    	}
    	top = prices[i]
    	maxProfit += top - bottom;
    }
    return maxProfit;
};

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));