function countVowels () {
    let msg = "JavaScript is a widely used programming language.";
    counter = 0;
    for (let char of msg) {
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
            counter++;
        }
    }
    console.log(counter);
}
countVowels();