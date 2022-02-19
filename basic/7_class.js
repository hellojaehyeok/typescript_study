

/**
 * class - 인스턴스를 만들어준다.
 * 기존의 생성자 함수를 기반으로 만들어진 es6 문법이다.
 * 
 * 
 */
class Person{
    // constructor - 초기화 메소드
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const hellojh = new Person("재혁", 0);





/**
 * object 프로토타입 정의
 * 아래와 코드와 같이 프로토타입을 정의한다.
 */
const user = {name:"sjh", age:0};
let sjh = {};
sjh.__proto__ = user;
console.log(sjh) // {} [[Prototype]]:{name:"sjh", age:0};
console.log(sjh.age) // 0
console.log(sjh.name) // sjh
sjh.name = "재혁";
console.log(sjh); // {name:"재혁"} [[Prototype]]:{name:"sjh", age:0};

/**
 * 단순히 객체 정보를 확장하는것 뿐만 아리나
 * 오브젝트를 만들거나 배열을 만들면
 * 자동적으로 해당 포로토타입에 따라 메서드들이 정의된다.
 * ex) 배열이면 map, filter등의 함수를 사용한다.
 * 
 * */