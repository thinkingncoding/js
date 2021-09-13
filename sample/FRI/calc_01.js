let americano_price = 2000;
let cafelatte_price = 3000;
let capucino_price = 3500;

let americano_sell = 20;
let cafelatte_sell = 10;
let capucino_sell = 5;

let sales = americano_price * americano_sell;
sales = sales + cafelatte_price * cafelatte_sell;
sales = sales + capucino_price * capucino_sell;
console.log(`총매출은 ${sales}입니다.`);