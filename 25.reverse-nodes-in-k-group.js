/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    // input: [1 -> 2] -> [3 -> 4] -> 5 -> null, 2
    // output: [2 -> 1] -> [4 -> 3] -> 5 -> null
    let dummy = new ListNode(0, head); // 0 -> 1 ->
    let groupPrev = dummy; // save node previous to group // it1: 0 ->

    while (true) {
        let kth = getKth(groupPrev, k); // get the kth // it1: 2 // it2: 4 // it3 -> null
        if (!kth) break; // it3
        let groupNext = kth.next; // saving link to next node in original list // it1: 3 // it2: 5

        // 1 -> 2 -> 3
        // becomes 2 -> 1 -> 3
        let prev = kth.next; // instead of 1 pointing to null. we want it to point to next node in the original list
        let curr = groupPrev.next; // curr becomes starting position // it1: 1 // it2: 3

        while (curr !== groupNext) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        // 2 -> 1 -> 3
        let temp = groupPrev.next; // temp = 0 -> 1
        groupPrev.next = kth; // 0 -> 2
        groupPrev = temp; // 1 becomes groupPrev for next group
    }
    return dummy.next;
};

var getKth = function (curr, k) {
    while (curr && k > 0) {
        curr = curr.next;
        k--;
    }
    return curr;
};
