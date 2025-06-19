function removeDuplicates(array) {
    array.sort((a,b) => a - b);
    const newArray = [...new Set(array)];
    console.log(newArray);
}

removeDuplicates([1, 2, 2, 4, 5, 4, 7, 8, 3, 7, 6]);