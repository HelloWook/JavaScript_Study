// console.log("hello world"); /* 콘솔창 출력시켜는주는 파일 */
// /* 변수선언 방법 */
// let name = "google"; /* 변수선언 방법 변수값을 변경할수 있음  */
// const NAME = "google"; /* 변수선언 방법 변수값을 변경할수 없음.대문자를 사용해야함  */
// console.log(name);

// /* 자료형  
//    1. 문자형 */
// /* 문자열 선언 가능방법*/
// const name1 ="mike";
// const name2 ='mike';
// const name3 =`mike`;
// const message = "I`am a boy."; /*or*/const message2 = `I\`am a boy.`;/*로 사용가능 */
// const superem = `i\`am a ${3+1}`;/*변수를 사용하기 위해선 ${}를 사용 */
// console.log(superem);
// /* 2. 숫자형 */
// /* 기본적인 슛자 */
// const num = 1;
// console.log(1+1);console.log(1*1); /*이런식 사용가능*/
// /* 3.부울형 */
// const bool = true;/* 트르오얼 펄스 */
// /* 4.null / undefine */
// const user = null;
// /* 변수명을 알아보는 */
// typeof(name1);

/* 대화상자 
alert("Error");
prompt(); 값을 전달 받기위한 함수 ->무조건 문자형으로 받아버림 
confirm(); 확인 취소 버튼을 클릭하는 대화창 
스크립트 일시정지의 문제 / 스타일링 불가능 
 */

/* 형변환  
자동형변환 -> 원인모를 에러발생이 가능하니 명시적 형변환을 해주는 습관이 필요 
String() -> 문자열로 변환 
Number() -> 숫자형으로 변환 
Bolleam() -> 불린형으로 변환 
 */

/* 연산자 
연산자는 우선순위가 있음 그렇기에 괄호를 사용해야함 

+ * - 등등

증감 및 감소 연산자
++ . --

비교연산자 -> true or false를 사용 
< > <= >= == != ===(일치연산자 //자료형까지 비교해버림)
 */

// 함수 
/* 
function show()
{
    console.log("에러가 발생했습니다.");
    호이스팅으로 함수를 어디서든 호출가능 
    let 
}
show();
 */

// 객체
const superman ={
    name : 'clark',
    age : 33,
    gender : 'male',
    showname : function()
    {
        console.log(this.name); // this로 선언하는게 좋음 
    }
    
}
//객체 추가 
superman.haircolor = 'black';  //
superman['hobby']="football";
console.log(superman);
