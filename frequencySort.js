/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    // return nums.sort((a, b) => b - a)
    //     .map(a => [a, nums.filter(b => b === a).length])
    //     .sort((a, b) => a[1] - b[1])
    //     .map(a => a[0])
    const m = new Map()
    for (const num of nums) {
        m.set(num, (m.get(num) ?? 0) + 1)
    }
    return nums.sort((a, b) => m.get(a) - m.get(b) || b - a)
};

nums = [1, 1, 2, 2, 2, 3]

console.log(frequencySort(nums))