

/**
 * 
 * class안에서만 사용하면 private 아니면 public
 * readonly란 접근만 가능하고 변경은 불가능
 * C#이랑 비슷하다.
 * 
 */
 class PersonTs{
    // 멤버 변수에 대한 타입과 유효범위를 정해준다.
    private name: string;
    public age: number;  
    readonly log: string;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}
// const hellojh = new Person("재혁", 0);

