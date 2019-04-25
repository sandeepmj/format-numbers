let num = 18432.4563;

console.log("The raw number we are working with is: " + num);

//toLocalString converts numbers to USA formatting as in xx,xxx.xxxx
console.log("We add the comma for USA formatting: " + num.toLocaleString('US'));

// add the currency symbol for US Dollar.
//notice it reformats number to two decimal places
console.log("Adds the dollar sign but doesn't round it: " + num.toLocaleString('US', { style: 'currency', currency: 'USD' }));

//this style rounds the number to a whole number when pennies don't matter
console.log("When pennies don't matter: " + '$' + Math.round(num).toLocaleString('US', { currency: 'USD' }));

let per = .15;
console.log("The decimal we are working with is: " + per);

console.log("Converted to a percentage: " + per.toLocaleString('US', { style: 'percent' }));