function reverseString (word) {
    return word.split('').reverse().join('');
};

function isPalindrome (string) {
    let reversedString = reverseString(string);
    console.log(string === reversedString);
}

isPalindrome("racecar");
isPalindrome("hello");