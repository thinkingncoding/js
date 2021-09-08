//1.Use strict
//added in Es5
// use this for valina javascript.

"use strict";
//2. variable
// let(added in ES6)
let globalName = "global name";

{
  let bbb = "sos";
  console.log(bbb);
  bbb = "sos002";
  console.log(bbb);
  console.log(globalName);
}
//console.log(bbb);
console.log(globalName);

const count = 17;
const size = 17.1;
console.log(`value : ${count},  type: ${typeof count}`);
console.log(`value: ${size}, type:${typeof size}`);

//number - speical numeric values :
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = "not a number" / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt
const bigInt = 1234567890989898989898989n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

//string
const char = "c";
const brendan = "brendan";
const greeting = "hello" + brendan;
console.log(`value : ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}`;
console.log(`value: ${helloBob}, type : ${typeof helloBob} `);
console.log("value:" + helloBob + "  type: " + typeof helloBob);

//boolean

//false : 0, null, undefined, NaN, '': 비어져있는 스트링
//true : any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof ttest}`);

//null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
//
const gsymbol1 = Symbol.for("id");
const gsymbol2 = Symbol.for("id");
console.log(gsymbol1 === gsymbol2); //ture

//console.log(`value: ${symbol1}, type: ${typeof Symbol1}`); // 오류  그래서 아래와 같이 한다.

console.log(`value: ${symbol1.description}, type: ${typeof Symbol1}`); //스트링으로 변환해서 출력을 해야한다.

//5. Dynamic typing : dynamically typed language
let text = "hello";
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = "7" + 5; //자바스크립트 엔진이 5를 문자열로 변환해서 더해진다.
console.log(`value: ${text}, type: ${typeof text}`);

text = "8" / "2"; // 엔진이 스트링을 숫자로 자동변환한다. :
console.log(`value: ${text}, type: ${typeof text}`);

//object, real-life object, data structure
const hong = { name: "honggil", age: 20 };
hong.age = 21;
console.log(`age : ${hong.age}`);
