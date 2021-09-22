let money = parseInt("10000");
let price = parseInt("2000");

let change = money - price;

console.log(`거스름돈:  ${change}`);
let coin500s = change; // 500 	   // 500으로 나누어서 몫이 500원짜리의 개수
change = change % 500; //로 나눈 나머지를 계산한다.
let coin100s = change; // 100 	// 100으로 나누어서 몫이 100원짜리의 개수

console.log(`500원 동전의 개수: ${coin500s}`);
console.log(`100원 동전의 개수: ${coin100s}`);
