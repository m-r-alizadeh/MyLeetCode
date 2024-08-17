/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
    const m = points.length
    const n = points[0].length
    let dp = points[0]

    for (let r = 1; r < m; r++) {
        let lm = new Array(n).fill(0)
        let rm = new Array(n).fill(0)
        let ndp = new Array(n).fill(0)
        lm[0] = dp[0]
        for (let c = 1; c < n; c++) {
            lm[c] = Math.max(lm[c - 1] - 1, dp[c])
        }
        rm[n - 1] = dp[n - 1];
        for (let c = n - 2; c >= 0; c--) {
            rm[c] = Math.max(rm[c + 1] - 1, dp[c])
        }
        for (let c = 0; c < n; c++) {
            ndp[c] = points[r][c] + Math.max(lm[c], rm[c])
        }
        dp = ndp
    }
    return Math.max(...dp)
};
console.log(maxPoints([
    [1, 2, 3],
    [1, 5, 1],
    [3, 1, 1]
])); // 9

console.log(maxPoints([
    [1, 5],
    [2, 3],
    [4, 2]
])); // 11