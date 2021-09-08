//1.String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1+2 = ${1 + 2}`);
//2.Numeric operators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(5 % 2);
console.log(2 ** 3);
//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = conter +1 ;
// preIncrement = counter ;

console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// postIncrement = counter;
//counter = counter+1 ;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y; // x= x+y;
x -= y;
x *= y;
x /= y;
//5. comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal
