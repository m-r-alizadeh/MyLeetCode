/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let res = []
    arr.map((item, i) => { if (fn(item, i)) res.push(item) })
    return res
};

arr = function greaterThan10(n) { return n > 10; }
fn = [0, 10, 20, 30]
console.log(filter(arr, fn)) //[20,30]
