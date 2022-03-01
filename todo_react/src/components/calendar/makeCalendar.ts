import { ICalendarDate } from "../../type/calendar";

export function MakeCalendar(currentDate: Date): ICalendarDate[]{
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const prevMonth = new Date(year,month, 0);
    const currentMonthStart = new Date(`${year}-${month+1}-1`);
    const currentMonthEnd = new Date(year,month+1, 0);
    const firstDate = currentMonthStart.getDate();
    const lastDate = currentMonthEnd.getDate();

    let newCalendarData: ICalendarDate[] = [];

    // 이전달
    if(prevMonth.getDay()!==6){
        const lastDate: number= prevMonth.getDate();
        prevMonth.setDate(prevMonth.getDate() - prevMonth.getDay());
        const weekStartDate: number = prevMonth.getDate();

        for(let i = weekStartDate ; i<=lastDate ; i++){
            let _month:number = !month?12:month;
            let _year:number = !month?year-1:year;
            newCalendarData.push( { year:_year, month:_month, date:i, isCurrentMonth:false})
        }
    }

    // 이번달
    for(let i:number = firstDate ; i <= lastDate ; i++){
        newCalendarData.push( { year:year, month:month+1, date:i, isCurrentMonth:true})
    }

    // 다음달
    for(let i:number = 1 ; i <=6-currentMonthEnd.getDay() ; i++){
        let _year:number = month===11?year+1:year;
        let _month:number = month===11?1:month+2;
        newCalendarData.push( { year:_year, month:_month, date:i, isCurrentMonth:false})
    }
    return newCalendarData;
}