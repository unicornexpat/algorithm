/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).
*/
var maxProfitByTopBottom = function(prices) {
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

var maxProfit = function(prices) {
    let maxProfit = 0;
    for(let i = 0; i < prices.length - 1; i++) {
    	if(prices[i] < prices[i+1]) {
    		maxProfit += prices[i+1] - prices[i];
    	}
    }

    return maxProfit;
};

const prices = [1, 7, 2, 3, 6, 7, 6, 7];
console.log(maxProfit(prices));