/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function(s) {
    const n = s.length
    const dp = Array.from({ length: n }, () => Array(n).fill(0))

    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i][j - 1]
            } else {
                let minTurns = Infinity;
                for (let k = i; k < j; k++) {
                    minTurns = Math.min(minTurns, dp[i][k] + dp[k + 1][j])
                }
                dp[i][j] = minTurns
            }
        }
    }

    return dp[0][n - 1]
};