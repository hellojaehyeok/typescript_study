import { atom } from "recoil";
import { IScheduleData } from "../type/schedule";


export default atom<IScheduleData[]>({
    key: "scheduleDataState",
    default:[]
})