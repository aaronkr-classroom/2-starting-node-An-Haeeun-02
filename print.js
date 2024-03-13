// print.js
"use strict";

// @TODO: 변수를 값이 주세요.
let charName= "Wolverine", 
    charAge = 300, 
    charDomain = "Daedpool's house";

// @TODO: 3변수를 보간된 값으로 인쇄하는 함수를 만들어 주세요.
let printChar = () => {
    console.log('My name is %s', charName);
    console.log('I am %d years old', charAge);
    console.log(`I live in ${charDomain}.`);


    // console.log 변수로 만든 메시지.
    // %s (string)
    // %d (digit)
    // `${변수}` (템플릿 문자열)
};

printChar()







// 숙제 체크 테스트에 필요함
module.exports = printChar;
