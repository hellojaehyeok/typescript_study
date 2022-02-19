

// Union Type -> | 를 넣으면 or 효과가 있다.
function logMesage(value:string | number){
    // 아래와 같이 조건문을 활용하면 자동으로 value를 type을 인식한다
    if(typeof value == "number"){
        console.log( value.toLocaleString() )
    }
    // 아래와 같이 조건문을 활용하면 자동으로 value를 type을 인식한다
    if(typeof value == "string"){
        console.log( value.toLocaleLowerCase() )
    }

    throw new TypeError("value must be string or number");
}
logMesage("hello");
logMesage(10);



interface Developer {
    name:string;
    skill:string;
}
interface Person{
    name:string;
    age:number;
}

// 두개의 인터페이스를 유니온타입으로 정의하면 공통적인 타입만 사용가능하다.
function askSomeone(someone:Developer | Person){
    console.log(someone.name)
}
askSomeone({name:"song", skill:"react", age:3});
askSomeone({name:"song", age:0});


// &는 인터섹션타입으로 Developer도 가능하고 Person도 가능한 상태이다.
function askSomeone2(someone:Developer & Person){
    console.log(someone.name)
    console.log(someone.skill)
    console.log(someone.age)
}
askSomeone2({name:"song", skill:"react", age:0});
