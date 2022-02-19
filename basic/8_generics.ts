/**
 * 
 * 유니온타입으로 타입을 여러개 선택 가능하지만
 * 타입의 추론이 어렵다.
 * 아래 코드에서 _text는 string|number타입이기 때문에 
 * 문자열의 내장함수를 쓸 수 없게된다.
 * 
 * 그렇다고 똑같은 로직의 타입만 다르게 두 번 선언하는건은 불필요하다.
 * 
 */
function numberString(item: string | number){
    return item;
}
const _text = numberString("hello");


/**
 * 
 * 아래와 같이 generic 타입을 이용하면 함수 호출 시점에서 타입을 정의한다.(확장성이 좋아진다.)
 * 
 */
function logText<Type>(item: Type): Type {
    return item;
}
const text = logText<string>("hello");
const one = logText<number>(1);
