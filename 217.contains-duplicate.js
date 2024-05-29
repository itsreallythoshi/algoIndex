/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    // 1, 2, 3, 1
    let visited = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in visited) return true;
        visited[nums[i]] = i;
    }
    return false;
};
