import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components'
import { DARKGRAY } from '../../styles/color';
import { ICalendarDate } from '../../type/calendar';
import { getCurrentDate } from '../../utils/parseDate';


const today = new Date();

const Calendar = ({}) => {
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
    useEffect((): void => {
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

        setCalendarDate([...newCalendarData]);
        console.log(newCalendarData);
    }, [currentDate])



    return(
        <Container>
            <DateTitle>
                <DateArrow onClick={() => onClickDateArrow(false)}>&#60;</DateArrow>
                {getCurrentDate(currentDate)}
                <DateArrow onClick={() => onClickDateArrow(true)}>&#62;</DateArrow>
            </DateTitle>

            <CalendarUI>
                {
                    calendarDate.map((item, index) => {

                        return(
                            <DateEl>
                                <DateNum isCurrent={item.isCurrentMonth}>{item.date}</DateNum>
                            </DateEl>
                        )
                    })
                }
            </CalendarUI>

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
    font-size: 20px;
    font-weight: 400;
    margin: 30px 0 40px;
    display: flex;
    align-items: center;
    color: ${DARKGRAY};
`
const DateArrow = styled.span`
    margin: 0 10px;
    font-size: 25px;
    cursor: pointer;
`
const CalendarUI = styled.div`
    display:flex;
    width: 80vw;
    flex-wrap: wrap;
    border: 1px solid ${DARKGRAY}80;
`
const DateEl =styled.div`
    border: 1px solid ${DARKGRAY}80;
    width: calc(100% / 7);
    height: 130px;
`
const DateNum = styled.div<{isCurrent:boolean}>`
    margin: 10px;
    font-size: 20px;
    ${({isCurrent}) => {
        return isCurrent?`color: ${DARKGRAY};`:`color:${DARKGRAY}80;`
    }}
`

