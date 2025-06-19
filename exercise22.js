function asteriskTriangle(){
    let asterisk = "*";
    let counter = 0;
    while (counter < 5){
        console.log(asterisk.repeat(counter + 1));
        counter++;
    }
}

asteriskTriangle();
function printPattern(rows);
for(let i = 1; i<= rows; i++);{
for(let j = 1; j<= i)
}

//samyu's version (both work)

function createPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "*";
        }
        pattern.repeat();
        console.log(pattern);
    }
}

createPattern(5);