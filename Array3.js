var num = process.argv[2];
var factors = new Array();
for (var i = 1; i <= num; i++) {
    //if number is completely divisible by 'i' then 'i' is a factor
    if (num % i == 0) {
        factors.push(i);
    }
}
//Print the factors
console.log("The factors are :");
for (var i = 0; i < factors.length; i++) {
    console.log(factors[i]);
}
