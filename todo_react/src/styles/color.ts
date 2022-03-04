import { EScheduleType } from "../enum/scheduleType";

const DARKGRAY: string = "#454545";
const PINK: string = "#ffd4d0";
const SKYBLUE: string = "#d0ebff";
const GREEN: string = "#d0ffd2";

const ScheduleColor = (type:string): string => {
    if(type===EScheduleType.Work){
        return PINK;
    }else if(type===EScheduleType.Study){
        return SKYBLUE;
    }else if(type===EScheduleType.Game){
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