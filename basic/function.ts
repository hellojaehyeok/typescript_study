
/*
    function 함수명 (인자:인자타입) :리턴타입{
        return
    }
    1. 인자를 넣지 않거나 정의되지 않은 인자를 더 넣으면 오류가 난다. 
    2. ?: 처럼 ?를 넣으면 인자를 생략가능하다. (옵셔널 파라미터)
    3. return값이 없을 경우 :void를 사용한다.
*/
function sum(a:number, b:number, c?:number, d?:number): number{
    return a + b + c + d;
}

function noReturn(a:string, b:string): void{
    console.log(a, b);
}