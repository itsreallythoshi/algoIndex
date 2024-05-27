const ll = require("./helpers");
// turn 1 -> 2 -> 3 -> 4 -> null
// to   null <- 4 <- 3 <- 2 <- 1

function reverseLinkedList(head) {
    // 1 -> 2 -> 3 -> 4 -> null
    // null <- 1 <- 2 <- 3 <- 4
    let prev = null; // assign the starting prev value
    while (head) {
        // break when head reaches null in original ll
        let temp = head.next; // save next value since we need to overwrite it
        head.next = prev; // reverse the connection from next to prev
        prev = head; // save current node in global prev value for next iteration
        head = temp; // progress pointer to next value
    }
    return prev; // return starting point of linked list which is saved in prev
    // 4 -> 3 -> 2 -> 1 -> null
}

let val = ll.arrayToList([1, 2, 3, 4, 5, 6]);
ll.printList(reverseLinkedList(val));
