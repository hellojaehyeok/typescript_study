import { ICalendarDate } from "../../type/calendar";
import { IScheduleData } from "../../type/schedule";
import { setTimeZero } from "../../utils/parseDate";

// id값으로 스케줄 계산
export const setSchedule = (scheduleData:IScheduleData[], calendarData:ICalendarDate[] ) => {

    const calcSchedule = (currentDate:Date, i: number) => { 
        let currentSchedule:number[] = [];
        let result:any[] = [];

        // 스케줄이 해달 날짜에 존재하면 넣기
        scheduleData.map((item) => {
            if(currentDate >= setTimeZero(new Date(item.startDate)) && currentDate <= setTimeZero(new Date(item.endDate)) ){
                currentSchedule.push(item.id);
            }
        })
    
        if(currentSchedule.length){
            currentSchedule.map(item => result.push(""));
            
            // 이전 스케줄 체크
            let prevArr = calendarData[i-1]?calendarData[i-1].schedule:[];

            // 동일한 스케줄 체크 후 해당 인덱스 넣기
            prevArr.map((item: number) => {
                if(currentSchedule.some(item2=>item2===item)){
                    result[prevArr.indexOf(item)] = item; 
                    currentSchedule.splice(currentSchedule.indexOf(item), 1);
                }
            })
    
            // 빈배열에 스케줄 채우기
            result.map((item, index) => {
                if(item === ""){
                    result[index] = currentSchedule[0]
                    currentSchedule.splice(0, 1);
                }
            })
            
            // empty 감지
            for(let i = 0 ; i < result.length ; i++){
                if(result[i]==undefined){result[i] = undefined}
            }
        }   
        
        return result;
    }

    for(let i = 0 ; i < calendarData.length ; i++){
        const el = calendarData[i];
        calendarData[i].schedule = calcSchedule(new Date(`${el.year}-${el.month}-${el.date}`), i);
    }
    return calendarData;
}