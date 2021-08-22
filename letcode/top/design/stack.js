/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
 

Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/
/**
 * initialize your data structure here.
 */
function lastItem(arr) {
	return arr[arr.length - 1];
}

var MinStack = function() {
    this.stack = [];
    this.minVal = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
	this.stack.push(val);
	if (this.minVal.length === 0 || val < this.getMin()) {
		this.minVal.push([val, 1]);
	} else if (val === this.getMin()) {
		lastItem(this.minVal)[1]++;
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	if (lastItem(this.stack) === this.getMin()) {
		lastItem(this.minVal)[1] === 1 ? this.minVal.pop() : lastItem(this.minVal)[1]--;
	}
    this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return lastItem(this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return lastItem(this.minVal) ? lastItem(this.minVal)[0] : undefined;
};