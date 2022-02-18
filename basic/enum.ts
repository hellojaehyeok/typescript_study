/**
 * 특정 값들의 집합을 의미하는 자료형
 * 타입을 지정해주지 않으면 초기값은 0
 * 지정해주면 해당 숫자부터 1씩 증가한다.
 * 
 */


enum Alphabet{
    A = 1,
    B,
    C = 10,
    D,
    E = 0,
    F
}

const a = Alphabet.A;
const b = Alphabet.B;
const c = Alphabet.C;
const d = Alphabet.D;
const e = Alphabet.E;
const f = Alphabet.F;
console.log(Alphabet[10]) // C
console.log(Alphabet[2]) // B
console.log(a, b, c, d, e, f); // 1, 2, 10, 11, 0, 1

/**
 * 활용
 * 
 * 아래와 같이 판별을 하거나
 * 드롭다운 같이 목록의 형태에서 정의하는게 좋다.
* */
enum Answer {
    Yes = "Y",
    No = "N"
}

function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
        console.log("정답")
    }
    if(answer === Answer.No){
        console.log("오답")
    }
}
askQuestion(Answer.Yes); 
