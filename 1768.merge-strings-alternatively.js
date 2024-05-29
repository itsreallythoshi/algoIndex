/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let result = [];
    let i = 0;

    while (i < word1.length && i < word2.length) {
        result.push(word1[i], word2[i]);
        i++;
    }
    return result.join("") + word1.slice(i) + word2.slice(i);
};
