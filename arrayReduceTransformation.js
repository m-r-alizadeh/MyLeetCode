/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    var sum = init
    for (let i = 0; i < nums.length; i++) sum = fn(sum, nums[i]);
    return sum
};
init = 0
nums = [1, 2, 3, 4]
fn = function sum(accum, curr) { return accum + curr; }

console.log(reduce(nums, fn, init));