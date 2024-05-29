const ll = require("./helpers");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    // we are using merge sort technique
    // where; lists === [ (1,4,5) , (1,3,4) , (2,6) ]
    // step 1: merge (1 -> 4 -> 5 -> null) & (1 -> 3 -> 4 -> null) => (1 -> 1 -> 3 -> 4 -> 4 -> 5 -> null)
    // step 2: merge (2 -> 6 -> null) & (null) => (2 -> 6 -> null)
    // step 3: merge (1 -> 1 -> 3 -> 4 -> 4 -> 5 -> null) & (2 -> 6 -> null) => (1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6 -> null)
    if (!lists || lists.length === 0) return null; // edge case where lists === []

    // lists in first iteration = [ (1,4,5) , (1,3,4) , (2,6) ]
    // lists in second iteration = [(1 -> 1 -> 3 -> 4 -> 4 -> 5 -> null), (2 -> 6 -> null)]
    while (lists.length > 1) {
        let mergedList = [];

        for (let i = 0; i < lists.length; i += 2) {
            // i+=2 to get pairs into l1 and l2
            let l1, l2;
            l1 = lists[i];
            if (i + 1 < lists.length) l2 = lists[i + 1];
            else l2 = null;
            mergedList.push(mergeList(l1, l2));
        }
        lists = mergedList;
    }
    // lists = [(1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6 -> null)]
    return lists[0];
};

// refer: 21.merge-two-sorted-lists.js
var mergeList = function (l1, l2) {
    let dummy = new ll.ListNode(0);
    let curr = dummy;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    if (l1) curr.next = l1;
    else if (l2) curr.next = l2;

    return dummy.next;
};

console.log("======== test case 1 ========");
val1 = ll.arrayToList([1, 4, 5]);
val2 = ll.arrayToList([1, 3, 4]);
val3 = ll.arrayToList([2, 6]);
ll.printList(mergeKLists([val1, val2, val3]));
console.log("expected:", [1, 1, 2, 3, 4, 4, 5, 6]);
