const belowTwenty = [
    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine",
    "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen",
    "Eighteen", "Nineteen"
]

const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
]

const thousands = [
    "", "Thousand", "Million", "Billion"
]

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return "Zero"
    let words = ''
    function format(n) {
        if (n === 0) return ''
        if (n < 20) return belowTwenty[n] + ' '
        if (n < 100) return tens[Math.floor(n / 10)] + ' ' + format(n % 10)
        return belowTwenty[Math.floor(n / 100)] + ' Hundred ' + format(n % 100)
    }
    let i = 0
    while (num > 0) {
        if (num % 1000 !== 0) words = format(num % 1000) + thousands[i] + ' ' + words
        num = Math.floor(num / 1000)
        i++
    }
    return words.trim()
};

console.log(numberToWords(123)); //One Hundred Twenty Three     
console.log(numberToWords(12345)); //Twelve Thousand Three Hundred Forty Five
console.log(numberToWords(1234563)); //One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Three