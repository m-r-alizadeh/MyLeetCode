/**
 * @param {number[][]} books
 * @param {number} shelfWidth
 * @return {number}
 */
var minHeightShelves = function (books, shelfWidth) {
    const n = books.length;
    const dp = new Array(n + 1).fill(0)
    for (let i = 1; i <= n; i++) {
        let w = 0
        let mh = 0
        dp[i] = Infinity
        for (let j = i; j > 0; j--) {
            w += books[j - 1][0]
            if (w > shelfWidth) break
            mh = Math.max(mh, books[j - 1][1])
            dp[i] = Math.min(dp[i], dp[j - 1] + mh)
        }
    }
    return dp[n];
};
books = [[1, 1], [2, 3], [2, 3], [1, 1], [1, 1], [1, 1], [1, 2]]
shelfWidth = 4
console.log(minHeightShelves(books, shelfWidth)) //6

books = [[1, 3], [2, 4], [3, 2]]
shelfWidth = 6
console.log(minHeightShelves(books, shelfWidth)) //4
