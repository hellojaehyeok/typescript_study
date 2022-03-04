const DARKGRAY: string = "#454545";
const PINK: string = "#ffd4d0";
const SKYBLUE: string = "#d0ebff";
const GREEN: string = "#d0ffd2";

const ScheduleColor = (type:string): string => {
    if(type==="work"){
        return PINK;
    }else if(type==="study"){
        return SKYBLUE;
    }else if(type==="game"){
        return GREEN;
    }else{
        return DARKGRAY;
    }
}

export {
    DARKGRAY,
    PINK,
    SKYBLUE,
    GREEN,
    ScheduleColor
}