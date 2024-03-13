// messages.js
"use strict";

// @TODO: 3개의 문자열 messages 배열 만들어 주세요.
let messages=[
    "I'm sleepy",
    "I'm hungry",
    ""

];

// @TODO: messages 배열에서 각 메시지를 인쇄하는 함수를 만들어 주세요.
let printMsgs=()=>{
for(let i=0; i< messages.length; i++){
    console.log(messages[i]);
}
};

printMsgs();








// 숙제 체크 테스트에 필요함
module.exports = printMsgs;
