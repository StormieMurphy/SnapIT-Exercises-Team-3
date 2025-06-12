function numberOfWords(givenString)
{

    let words = 0
    for(let i = 0; i < givenString.length; i++)
    {
        if (givenString[i] == ' ')
        {
            words++;
        }
    }

    let total = words + 1;

    console.log('output of words: ' + total);

}

numberOfWords("I am learning and practicing string.");

numberOfWords('hello how are you my name is shiv shah, hellooooo');
