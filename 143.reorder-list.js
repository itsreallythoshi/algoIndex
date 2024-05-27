// prerequisite: 206 reverse a linked list
// in-place modification (saves space). the reorderList function will not return a value. the function is expected to perform the
// modifications without returning a new list or the modified list. The original list, now reordered, is the output.

const ll = require("./helpers");

var reorderList = function (head) {
    //1. find the mid point. we use tortoise and hare pointer technique (or fast and slow pointer technique)
    let slow = head; // slow pointer to start. slow moves one by one
    let fast = head; // fast pointer to start. fast moves 2 positions at a time

    // for the while condition, we
    // fast skips to 3, 5, 7 and so on.
    // 1, 2, [3], 4 // in case of odd list, fast needs to check if fast.next is available. in even [1,2] first half [3,4] second half
    // 1, 2, [3], 4, [5] // in case of even list, fast needs to check if fast.next.next is available. in odd [1,2,3] first and [4,5] second
    // When fast reaches the end of the list, slow will be at the midpoint.
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // console.log("slow pointer position: ", slow); // cl shows slow is at the end of the first list
    // console.log("fast pointer position: ", fast); //
    // if input is even [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] fast.next.val would be the end value of second list.
    // and if odd [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] fast.val would be the end value of second list.

    // 2. reverse second ll
    let curr = slow.next;
    let prev = null;
    // 7 -> 8 -> 9 -> 10 -> null
    // null <- 7 <- 8 <- 9 <- 10

    // refer 206 for explanation
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    slow.next = null; // break link between two lls. DO NOT FORGET THIS STEP!!!

    // 3. merge the two lists
    let h1 = head;
    let h2 = prev;

    // next part is very tricky if you don't know what's going on. so pay close attention. hint: the pointers get switched
    // 1 -> 2 -> 3 -> 4 -> 5 -> null
    // 10 -> 9 -> 8 -> 7 -> 6 -> null
    // result: 1 -> 10 -> 2 -> 9 // connections form a zigzag
    while (h2) {
        let temp = h1.next;
        h1.next = h2;
        h1 = h2;
        h2 = temp;
    }
    // iteration 1: h1: 1, h2: 10, updates: 1 -> 10
    // while (h2) {            // h2 not null
    //     let temp = h1.next; // 1.next (2) saved in temp
    //     h1.next = h2;       // 1.next set to 10
    //     h1 = h2;            // h1 points to 10 now
    //     h2 = temp;          // h2 points to 2 now
    // }
    // iteration 2: h1: 10, h2: 2, updates: 10 -> 2
    // while (h2) {            // h2 not null
    //     let temp = h1.next; // 10.next (9) saved in temp
    //     h1.next = h2;       // 10.next set to 2
    //     h1 = h2;            // h1 points to 2 now
    //     h2 = temp;          // h2 points to 9
    // }
    // iteration 3: h1: 2, h2: 9, 2 -> 9
    // while (h2) {            // h2 not null. because: in the update chain h2 always takes the right side.
    //     let temp = h1.next; // 2.next (3) saved in temp
    //     h1.next = h2;       // 2.next set to 9
    //     h1 = h2;            // h1 points to 9 now
    //     h2 = temp;          // h2 points to 3
    // }
    // notice the h1 and h2 patterns in the beginning of each iteration and the update: h1 is the left and h2 is the right in the new chain

    // final explanation
    // 1 -> 2 -> 3 -> 4 -> 5 -> null
    // 10 -> 9 -> 8 -> 7 -> 6 -> null
    // 1 -> 10 -> 2 -> 9 -> ...
    // while (h2) {
    //     let temp = h1.next; // we save h1.next since we are updating it
    //     h1.next = h2; // we do the update. h1 is left side, h2 is right side
    //     h1 = h2; // we set up pointers for next iteration. if current update was 1 -> 10. next update should be 10 -> 2
    //     h2 = temp;
    // }
};

let i1 = ll.arrayToList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let r1 = reorderList(i1);
ll.printList(i1);
