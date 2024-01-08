// 연습문제
// 1. 1에서 1000 사이에 0은 몇 번, 1은 몇 번, ..., 9는 몇 번 사용되었는가 ?
//      12345678901011...9991000

let numStr = '';
for (let i = 1; i <= 1000; i++) {
    numStr += i;
}

// 1) 정규 표현식을 활용하는 방법
// 1이 몇번 사용되었나 ? -> 1을 제외한 나머지를 제거한 후 길이로 판별

comsole.log(numStr.replace(/[^1]/g, '').length); // or ^1 -> 023456789 도 가능

for (let i = 0; i <= 9; i++) {
    let pattern = new RegExp('/[^2]/g');
    count = numStr.replace(pattern, '').length;
    console.log(`${i}: ${count}`);
}

// 2) count 배열을 만들어서 일일이 체크
let countArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < numStr.length; i++ ) {
    let num = Number(numStr[i]);
    countArr[num]++;
}
console.log(countArr);

