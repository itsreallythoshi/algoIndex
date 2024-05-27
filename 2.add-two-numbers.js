const ll = require("./helpers");

// consider this example throughout the explanation
// input [2, 4, 3]
//       [5, 6, 4]
// output[7, 0, 8]
var addTwoNumbers = function (l1, l2, helper) {
    let dummy = new helper.ListNode(0); // dummy would be [0, 7, 0, 8] // this is a convention that avoids many edge cases
    // in the example case answer ll is 7 -> 0 -> 8. our answer would be 0 -> 7 -> 0 -> 8 where head is at zero. we return dummy.next in the end resulting in 7 -> 0 -> 8
    let current = dummy; // let's say at the end of interations current.val would be 8 dummy.val would be 0 and dummy.next would be 7. therefore dummy is only kept as a reference to the start of current as current traverses and we no longer have a reference to the head of the linked list
    let carry = 0;
    let count = 0;

    // consider the scenario l1  =  [9,9,9,9,9,9,9]   , l1 null check would ensure the loop going for 7 iterations since l2 only gives 4
    //                       l2  =  [9,9,9,9]
    //                       output=[8,9,9,9,0,0,0,1] , at the end of the 7th iteration, l1 !== null and l2 !== null check return false. but there still is a carry value. which makes it run for another iteration.
    while (l1 !== null || l2 !== null || carry !== 0) {
        count++;
        let sum = carry;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10); // carry value as an integer
        current.next = new helper.ListNode(sum % 10); // 10 % 10 = 0, 12 % 10 = 2 and so on
        current = current.next; // set the linked list reference
    }
    console.log(count);
    return dummy.next; // dummy.next would be [7, next.val=0, next.next.val=8]
};

let l1, l2, result;

console.log("example 1");
l1 = ll.arrayToList([2, 4, 3]);
l2 = ll.arrayToList([5, 6, 4]);
result = addTwoNumbers(l1, l2, ll);
ll.printList(result); // Output should be [7, 0, 8]

console.log("example 2");
l1 = ll.arrayToList([9, 9, 9, 9, 9, 9, 9]);
l2 = ll.arrayToList([9, 9, 9, 9]);
result = addTwoNumbers(l1, l2, ll);
ll.printList(result); // Output should be [7, 0, 8]
