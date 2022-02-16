/**
 * 
 * interface & type alias
 * 참고 : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 * 두개 모두 타입을 선언할때 사용한다.
 * 
 * 차이점은 선언 병합의 가능 유무이다.
 * interface은 타입을 정의한것이지만
 * tpye은 새로운 타입값을 생성하는것이 아닌 정의한 타입에 대해 이름을 부여하는것이다.
 * 
 * 
 */

// <기본형태>
interface IUserData {
    name:string,
    age:number,
    address:string,
}

// <확장(상속)>
interface IAnimal {animal: string}
interface IPerson extends IAnimal {person: string}
// IAnimal -> {animal:string}
// IPerson -> {animal:string, person: string}

// <선언적 확장>
interface IAb {a: string} 
interface IAb {b: string}
// IAb -> {a:string, b:string}


// 함수 구조를 정의
interface SumFuntion {
    (a: number, b: number) : number;
}
let add: SumFuntion;
add = function(a:number, b:number):number{
    return a + b;
}


// 인덱싱
// "해당 index는 string이다" 라고 인식
interface IStringAttay{
    [index:number] : string;
}
const stringArr: IStringAttay = ["a", "b", "c"]; 
stringArr[0] = "A";

// 딕셔너리 패턴
// 인덱싱과 유사하지만 인덱스가 아니라 "key, value" 형태이다.
interface StringRegexDictionary{
    [key:string]: RegExp;
}
const regObj:StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}


