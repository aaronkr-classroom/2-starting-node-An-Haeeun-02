// numbers.js
"use strict";

// @TODO: 10개의 숫자로 배열 만들기
let numbers = [1,2,3,4,5,6,7,8,9];

// @TODO: printNumbers 함수를 만들어 주세요.
let printNumbers = () => {
    for( let i = 0; i< numbers.length; i++){
        console.log(numbers[i]);
    }
};

printNumbers();








// 숙제 체크 테스트에 필요함
module.exports = printNumbers;