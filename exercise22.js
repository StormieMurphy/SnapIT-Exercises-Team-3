function asteriskTriangle(){
    let asterisk = "*";
    let counter = 0;
    while (counter < 5){
        console.log(asterisk.repeat(counter + 1));
        counter++;
    }
}

asteriskTriangle();