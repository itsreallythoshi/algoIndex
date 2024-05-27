var MISTAKE_removeNthFromEnd = function (head, n) {
    let l2r = 0;
    let curr = head;
    let pos = [];
    let toRemove = null;

    while (curr) {
        pos.push(curr);
        curr = curr.next;
        l2r++;
    }

    if (l2r >= n) {
        toRemove = pos[l2r - n];
        console.log({ bfr: toRemove });
    }

    if (toRemove) {
        console.log({ bfr: head });
        if (toRemove.next) {
            toRemove.val = toRemove.next.val;
            toRemove.next = toRemove.next.next;
        } else {
            // mistake: I am nulling toRemove variable instead of the instance its pointing to
            // hence: test case 1 works but not 2 and 3
            toRemove = null;
        }
        console.log({ aftr: head });
        console.log({ aftr: toRemove });
    }
    return head;
};

console.log("======== test case 1 ========");
val = ll.arrayToList([1, 2, 3, 4, 5]);
ll.printList(MISTAKE_removeNthFromEnd(val, 2));
console.log("expected: [ 1, 2, 3, 5 ]");

console.log("======== test case 2 ========");
val = ll.arrayToList([1]);
ll.printList(MISTAKE_removeNthFromEnd(val, 1));
console.log("expected: []");

console.log("======== test case 3 ========");
val = ll.arrayToList([1, 2]);
ll.printList(MISTAKE_removeNthFromEnd(val, 1));
console.log("expected: [1]");
