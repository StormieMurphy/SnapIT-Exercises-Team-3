function findLargest (numOne, numTwo, numThree) {
    if (numOne >= numTwo && numOne >= numThree) {
        console.log(`${numOne} is the largest.`);
    }
    else if (numTwo >= numOne && numTwo >= numThree) {
        console.log(`${numTwo} is the largest.`);
    }
    else if (numThree >= numOne && numThree >= numTwo) {
        console.log(`${numThree} is the largest.`);
    }
}
findLargest(6, 5, 7);
findLargest(8, 5, 6);
findLargest(7, 9, 2);
findLargest(8, 8, 6);
findLargest(6, 8, 8);
findLargest(7, 2, 7);
findLargest(6, 6, 6);