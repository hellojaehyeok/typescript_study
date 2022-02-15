
// 모든타입을 통칭  
const free: any = "song";

// 문자열 
const str: string = "hello";

// 숫자 
const num: number = 10;

// 배열  - Array<배열안에 들어갈 타입>
const arr: Array<number> = [1, 2, 3];
const strArr: Array<string> = ["a", "b", "c"];
const numArr:number[] = [1, 2, 3];

// 날짜 
const today:Date = new Date();

// 튜플
const tuple:[string, number] = ["Hello", 10];

// 객체
// | 를 넣으면 or 효과가 있다.
const obj:object = {};
const person: {name:string, age:number, stringNum: string|number} = {
    name:"song",
    age:00,
    stringNum:"1"
}

// 진위값
const bool:boolean = true;
