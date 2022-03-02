import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'
import { DARKGRAY } from '../../styles/color';
import { ICalendarDate } from '../../type/calendar';
import { IScheduleData } from '../../type/schedule';
import { getCurrentDate, setTimeZero } from '../../utils/parseDate';
import CalendarUI from './calendarUI';
import { MakeCalendar } from './makeCalendar';


interface ICalendar{
    scheduleData:IScheduleData[];
}

const today = new Date();

const Calendar = ({scheduleData}: ICalendar) => {
    const [calendarDate, setCalendarDate] = useState<ICalendarDate[]>([]);
    const [currentDate, setCurrentDate] = useState(today);

    // 달력 방향키 클릭
    const onClickDateArrow = (isNext:boolean) :void => {
        const count: number = isNext?1:-1;
        let newDate = currentDate;
        newDate.setMonth(currentDate.getMonth()+count);
        setCurrentDate(new Date(newDate));
    }

    // 달력 세팅
    useEffect(() => {
        let newCalendarData: ICalendarDate[] = MakeCalendar(currentDate);
        for(let i = 0 ; i < newCalendarData.length ; i++){
            const el = newCalendarData[i];
            newCalendarData[i].schedule = calcDate(new Date(`${el.year}-${el.month}-${el.date}`), newCalendarData, i);
        }
        setCalendarDate([...newCalendarData]);
    }, [currentDate, scheduleData])

    // 스케줄 계산 (아이디로 계산)
    const calcDate = (currentDate:Date, calenderArr:any, i:number):Array<number> => {
        let resultArr:number[] = [];
        // 스케줄이 해달 날짜에 존하면 넣기
        scheduleData.map((item, index) => {
            let startDate:Date = setTimeZero(new Date(item.startDate));
            let endDate:Date = setTimeZero(new Date(item.endDate));

            if(currentDate >= startDate && currentDate <= endDate){
                resultArr.push(item.id);
            }
        })

        // id를 담을 배열
        let result:number[] = [];

        // 스케줄이 하나라도 있으면 실행
        if(resultArr.length!==0){
            let cpResultArr: any[]= [];
            resultArr.map(item => cpResultArr.push(""));
            // 이전 스케줄 체크
            let prevArr = calenderArr[i-1]?calenderArr[i-1].schedule:[];
            // 동일한 스케줄 체크 후 해당 인덱스 넣기
            prevArr.map((item: number) => {
                if(resultArr.some(item2=>item2===item)){
                    cpResultArr[prevArr.indexOf(item)] = item; 
                    resultArr.splice(resultArr.indexOf(item), 1);
                }
            })

            // 빈배열에 스케줄 채우기
            cpResultArr.map((item, index) => {
                if(item === ""){
                    cpResultArr[index] = resultArr[0]
                    resultArr.splice(0, 1);
                }
            })
            
            // empty 감지
            for(let i = 0 ; i < cpResultArr.length ; i++){
                if(cpResultArr[i]==undefined){cpResultArr[i] = undefined}
            }
            result=cpResultArr;
        }   
    
        return result;
    }

    return(
        <Container>
            <DateTitle>
                <DateArrow onClick={() => onClickDateArrow(false)}>&#60;</DateArrow>
                {getCurrentDate(currentDate)}
                <DateArrow onClick={() => onClickDateArrow(true)}>&#62;</DateArrow>
            </DateTitle>

            <CalendarUI scheduleData={scheduleData} calendarDate={calendarDate}/>
        </Container>
    )

};

export default Calendar;


const Container = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
`
const DateTitle = styled.h2`
    font-size: 25px;
    font-weight: 400;
    margin: 30px 0 40px;
    display: flex;
    align-items: center;
    color: ${DARKGRAY};
`
const DateArrow = styled.span`
    margin: 0 10px;
    font-size: 25px;
`
