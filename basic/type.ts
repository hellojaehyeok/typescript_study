


// <기본형태>
export type TGender = "string"; 

// <확장(상속)>
type Animal2 = {name: string}
type Bear2 = Animal2 & {honey: boolean}

  
// <선언적 확장>은 불가능