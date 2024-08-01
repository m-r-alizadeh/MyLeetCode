/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
    var cnt = 0
    // for (let i = 0; i <= details.length - 1; i++) {
    //     if (+(details[i].charAt(11) + details[i].charAt(12)) > 60) cnt++
    // }

    /*Faster way*/
    for (let detail of details) {
        if (+detail.substring(11, 13) > 60) cnt++
    }
    
    return cnt
};
console.log(countSeniors(["7868190130M7522", "5303914400F9211", "9273338290F4010", "1313579440F2036", "2921522980M5644"]))