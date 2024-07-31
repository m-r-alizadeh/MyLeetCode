/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
    var sum = init
    nums.map(x => {
        sum = fn(sum, x)
        console.log(x,sum)
    })
    return sum
};
init = 0
nums = [1, 2, 3, 4]
fn = function sum(accum, curr) { return accum + curr; }

console.log(reduce(nums, fn, init));

// /**
//  * @param {number[]} nums
//  * @return {number[]}
//  */
// var frequencySort = function (nums) {
//     // return nums.sort((a, b) => b - a)
//     //     .map(a => [a, nums.filter(b => b === a).length])
//     //     .sort((a, b) => a[1] - b[1])
//     //     .map(a => a[0])
//     const m = new Map()
//     for (const num of nums) {
//         m.set(num, (m.get(num) ?? 0) + 1)
//     }
//     return nums.sort((a, b) => m.get(a) - m.get(b) || b - a)
// };

// nums = [1, 1, 2, 2, 2, 3]

// console.log(frequencySort(nums))

// var sortPeople = function (names, heights) {
//     // let o = []
//     // names.map((a, i) => o.push({ name: a, height: heights[i] }))
//     // o.sort((a, b) => b.height - a.height)
//     // return o.map(i => i.name)

//     return names
//     .map((s, i) => [s, heights[i]])
//     .sort((a, b) => b[1] - a[1])
//     .map(([v]) => v)
// };

// names = ["Mary", "John", "Emma"]
// heights = [180, 165, 170]

// console.log(sortPeople(names, heights))