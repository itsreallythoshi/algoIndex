function reorderList(n, padding = false) {
    for (let i = 1; i <= n; i++) {
        let left = Array.from({ length: i }, (_, index) => index + 1);
        let right = [];

        let leftPtr = 0;
        let rightPtr = i - 1;

        while (leftPtr <= rightPtr) {
            if (leftPtr <= rightPtr) {
                right.push(left[leftPtr]);
                leftPtr++;
            }
            if (leftPtr <= rightPtr) {
                right.push(left[rightPtr]);
                rightPtr--;
            }
        }

        let leftString = `[${left.join(",")}]`;
        let rightString = `[${right.join(",")}]`;

        if (padding) {
            let paddingSize = (n - i) * 2; // each number adds at least two characters, including the comma
            let paddedLeftString = " ".repeat(paddingSize) + leftString;
            console.log(`${paddedLeftString} -> ${rightString}`);
        } else {
            console.log(`${leftString} -> ${rightString}`);
        }
    }
}

reorderList(8, true);
