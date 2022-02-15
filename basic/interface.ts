/**
 * 
 * interface & type alias
 * 참고 : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 * 두개 모두 타입을 선언할때 사용한다.
 * 차이점은 선언 병합의 가능 유무이다.
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
