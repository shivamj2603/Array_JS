var myArray = new Array(1, 2, 3, 4, 5, -2, -3, -4);
myArray.forEach(i => console.log(i));
myArray.forEach((i, j, k) => {
    if (i + j + k == 0) {
        console.log("Sum of elements : " + i + " " + j + " " + k + " " + "is zero");
    }
})
