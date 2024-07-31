/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
    let c = -1
    return function () {
        c++
        const r = n + c
        return r
    }
}


const counter = createCounter(10)
counter() // 10
counter() // 11
counter() // 12
