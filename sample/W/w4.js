//사용자로부터 신장과 체중을 입력받아서 BMI 값을 출력하는 프로그램을 작성하여 보자.
// BMI = weight in kilograms / height in meters **2
// 몸무게를 KG단위로 입력하시오 :
//키를 미터 단위로 입력하시오:
//당신의 BMI= 25.381468541909282

let weight = 85.0;
let height = 1.83;
let bmi = 0.0;

bmi = weight / height ** 2;
console.log(`당신의 BMI=${bmi}`);
