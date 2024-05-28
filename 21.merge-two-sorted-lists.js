const ll = require("./helpers");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    // list1: 1 -> 2 -> 4 -> -> 5 -> null
    // list2: 1 -> 3 -> 4 -> null
    // output: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> null

    let dummy = new ll.ListNode(-1); // to solve null input edgecase
    let tail = dummy;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }
    // list 1: 1 -> 2 -> 4
    // list 2: 1 -> 1 -> [5 -> 7 -> 6]
    // in the above case. we just link the remaining [5 -> 7 -> 6] since it's already sorted and we don't need to compare
    if (list1) {
        tail.next = list1;
    } else if (list2) {
        tail.next = list2;
    }
    return dummy.next;
};

console.log("======== test case 1 ========");
val1 = ll.arrayToList([1, 2, 4]);
val2 = ll.arrayToList([1, 3, 4]);
ll.printList(mergeTwoLists(val1, val2));
console.log("expected: [ 1, 1, 2, 3, 4, 4 ]");

console.log("======== test case 1 ========");
ll.printList(mergeTwoLists(null, null));
console.log("expected: [ ]");

console.log("======== test case 1 ========");
val2 = ll.arrayToList([0]);
ll.printList(mergeTwoLists(null, val2));
console.log("expected: [ 0 ]");
