const ll = require("./helpers");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let dummy = new ll.ListNode(0, head);

    // reach node at post left.
    let leftPrev = dummy,
        curr = head;
    for (let i = 1; i < left; i++) {
        leftPrev = curr;
        curr = curr.next;
    }

    // curr = left, leftPrev = node before left
    // reverse from left to right
    let prev = null;

    // we need to iterate over 3 nodes. reversing 3 links. 2 -> 3 -> 4 becomes null <- 2 <- 3 <- 4
    // (4 - 3) + 1 gives amount of nodes to iterate over. since counting is inclusive.
    for (let i = 0; i < right - left + 1; i++) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    // 1 -> 2
    // null <- 2 <- 3 <- 4 -> 5

    // update pointers
    leftPrev.next.next = curr; // curr is node after right
    leftPrev.next = prev; // prev is right
    return dummy.next;
};

console.log("======== test case 1 ========");
val = ll.arrayToList([1, 2, 3, 4, 5]);
ll.printList(reverseBetween(val, 2, 4));
console.log("expected: [ 1, 4, 3, 2, 5]");

console.log("======== test case 2 ========");
val = ll.arrayToList([5]);
ll.printList(reverseBetween(val, 1, 1));
console.log("expected: [ 5 ]");
