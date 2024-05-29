const ll = require("./helpers");
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// elegant solution
var removeElements1 = function(head, val) {
    //s1: 1 -> 2 -> 6 -> 3 -> 4 -> 5 -> 6 -> null // val:6
    //s2: [7 -> 7 -> 7 -> 7 -> null], val = 7 Output: []
    //s3: head = [], val = 1 Output: []

    // when head is val. this takes care of this scenario. [7 -> 7 -> 7 -> 7 -> null]. head is at null on return
    while (head && head.val === val) {
        head = head.next;
    }
    // where head is !val. change the next link if it points to wrong item
    // 7 -> 6 -> 5 -> 2. 6 is val
    // 7.next = 5
    let curr = head; // curr is 7
    while (curr && curr.next) {        // iteration 1           // iteration 2
        if (curr.next.val === val) {   // 7.next.val is 6       // 7.next.val is 5 goes to else
            curr.next = curr.next.next // 7.next gets set to 5
        } else {                       // iteration 2
            curr = curr.next;          // curr pointer moves from 7 to 5
        }
    }
    return head;
}

var removeElements2 = function(head, val) {
    let dummy = new ListNode(0, head);
    let prev = dummy, curr = head;

    while (head) {
        if (head.val === val) {
            prev.next = head.next;
        } else {
            prev = head;
        }        
        head = head.next;        
    }
    return dummy.next;
};

// more memory usage
var removeElements3 = function(head, val) {
    let dummy = new ListNode(0);
    let curr = dummy;
    let prev = null;
    while (head) {
        if (head.val !== val) {
            curr.next = new ListNode(head.val);
            curr = curr.next;
        }
        head = head.next;        
    }
    return dummy.next;
}

let val = ll.arrayToList([1, 2, 3, 4, 5, 6, 7, 6, 6, 6]);
ll.printList(removeElements(val, 6));