function classifyTriangle(sideOne, sideTwo, sideThree){
    if (sideOne == sideTwo && sideTwo == sideThree){
        console.log("This triangle is equilateral."); 
    }
    else if (sideOne == sideTwo || sideTwo == sideThree){
        console.log("This triangle is isosceles.");
    }
    else {
        console.log("This triangle is scalene.");
        
    };
};
classifyTriangle(10, 10, 10);
classifyTriangle(15, 20, 15);
classifyTriangle(15, 15, 20);
classifyTriangle(20, 15, 15);
classifyTriangle(25, 34, 42);