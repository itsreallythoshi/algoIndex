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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // 1 -> 2: remove 1 from end
    // 1 -> 2 -> 3 -> 4 -> 5 -> null: remove 2 from end
    //// if we use two pointers, a left and a right, start left at head, and start skipping values by n
    // l[1] -> 2 -> r[3] -> 4 -> 5 -> null: 2
    //// and we move the two pointers to the right until r is at null
    //// the left ends up at the node we want removed
    // 1 -> 2 -> 3 -> l[4] -> 5 -> r[null]: 2
    //// we want the left to be 1 node slower. so we create a dummy node as 0. link it to head and start the left 1 position before
    // 0 -> 1 -> 2 -> l[3] -> 4 -> 5 -> r[null]: 2

    let dummy = new ll.ListNode(0, head);
    let left = dummy;

    while (n > 0 && head) {
        head = head.next;
        n--;
    }

    while (head) {
        left = left.next;
        head = head.next;
    }

    left.next = left.next.next;
    return dummy.next;
};

let val;

console.log("======== test case 1 ========");
val = ll.arrayToList([1, 2, 3, 4, 5]);
ll.printList(removeNthFromEnd(val, 2));
console.log("expected: [ 1, 2, 3, 5 ]");

console.log("======== test case 2 ========");
val = ll.arrayToList([1]);
ll.printList(removeNthFromEnd(val, 1));
console.log("expected: []");

console.log("======== test case 3 ========");
val = ll.arrayToList([1, 2]);
ll.printList(removeNthFromEnd(val, 1));
console.log("expected: [1]");
