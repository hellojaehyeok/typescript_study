import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components'
import scheduleDataState from '../../store/scheduleDataState';
import { DARKGRAY } from '../../styles/color';
import { ICalendarDate } from '../../type/calendar';
import { IScheduleData } from '../../type/schedule';
import { getCurrentDate, setTimeZero } from '../../utils/parseDate';
import CalendarUI from './calendarUI';
import { MakeCalendar } from './makeCalendar';
import { setSchedule } from './setSchedule';



const today = new Date();

const Calendar = ({}) => {
    const [calendarDate, setCalendarDate] = useState<ICalendarDate[]>([]);
    const [currentDate, setCurrentDate] = useState(today);
    const scheduleData = useRecoilValue(scheduleDataState)

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
        newCalendarData = setSchedule(scheduleData, newCalendarData);
        setCalendarDate([...newCalendarData]);
    }, [currentDate, scheduleData])


    return(
        <Container>
            <DateTitle>
                <DateArrow onClick={() => onClickDateArrow(false)}>&#60;</DateArrow>
                {getCurrentDate(currentDate)}
                <DateArrow onClick={() => onClickDateArrow(true)}>&#62;</DateArrow>
            </DateTitle>

            <CalendarUI calendarDate={calendarDate}/>
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
    cursor: pointer;
`
