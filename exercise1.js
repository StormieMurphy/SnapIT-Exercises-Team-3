function findTriangleArea (sideA, sideB, sideC) {
    const semiParam = (sideA + sideB + sideC) / 2;
    area = Math.sqrt(semiParam * (semiParam - sideA) * (semiParam - sideB) * (semiParam - sideC));
    console.log(area);
}
findTriangleArea(2, 8, 9);