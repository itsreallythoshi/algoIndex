/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let remainders = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const ct = target - num;
        if (ct in remainders) return [remainders[ct], i];
        remainders[num] = i;
    }
    return [];
};
