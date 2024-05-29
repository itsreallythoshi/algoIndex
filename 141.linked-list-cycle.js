const ll = require("./helpers");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // floyd's tortoise and hare algorithm
    let slow = head,
        fast = head;
    // why is time complexity O(n)? consider following ll. the length is 10 (10 links)
    // 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9 -> 10 -> 1
    // when we initialise both slow and fast at 1. fast has 10 steps to meet slow.
    // slow moves by 1. therefore, + 1 steps for fast
    // fast moves by 2. therefore, - 2 steps for fast (10 + 1) - 2 = 9
    // (9 + 1) - 2 = 8 and so on.
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};
