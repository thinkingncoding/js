let date = new Date();
let yyyy = date.getFullYear();
let mm = date.getMonth() + 1;
let dd = date.getDay();
let hh = date.getHours();
let m = date.getSeconds();
let s = date.getSeconds();
//console.log(date.getFullYear());
//console.log(date.getMonth());

console.log(
  `현재 시각은  ${yyyy}년 ${mm}월 ${dd}일 ${hh}시 ${m}분 ${s}초 입니다. `
);
