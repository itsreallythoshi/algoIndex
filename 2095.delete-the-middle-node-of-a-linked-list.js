const ll = require("./helpers");

// consider input 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
// and input 1 -> 2 -> 3 -> 4 -> 5 -> null
var deleteMiddle = function (head) {
    if (!head || !head.next) return null;

    let dummy = new ll.ListNode(0, head); // 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
    let slow = dummy; // we start slow pointer from 0
    let fast = head; // we start fast pointer from 1

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 0 -> // 1 -> 2 -> slow[3] -> 4 -> 5 -> 6 -> fast[null]
    // 0 -> // 1 -> slow[2] -> 3 -> 4 -> 5 -> fast[null]
    slow.next = slow.next.next;
    // set 3 -> 5
    // set 2 -> 4

    return dummy.next;
};

console.log("======== test case 1 ========");
val = ll.arrayToList([1, 3, 4, 7, 1, 2, 6]);
ll.printList(deleteMiddle(val));
console.log("expected: [1,3,4,1,2,6]");

console.log("======== test case 2 ========");
val = ll.arrayToList([1, 2, 3, 4]);
ll.printList(deleteMiddle(val));
console.log("expected: [1,2,4]");

console.log("======== test case 3 ========");
val = ll.arrayToList([2, 1]);
ll.printList(deleteMiddle(val));
console.log("expected: [2]");
