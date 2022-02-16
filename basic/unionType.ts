

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

