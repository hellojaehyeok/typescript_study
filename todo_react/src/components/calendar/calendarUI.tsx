import React from 'react';
import styled from 'styled-components';
import { DARKGRAY, GREEN, PINK, SKYBLUE } from '../../styles/color';
import { ICalendarDate } from '../../type/calendar';
import { IScheduleData } from '../../type/schedule';

interface ICalendarUI{
    calendarDate:ICalendarDate[];
    scheduleData:IScheduleData[];
}

const returnBgColor = (type:string): string => {
    if(type==="work"){
        return PINK;
    }else if(type==="study"){
        return SKYBLUE;
    }else if(type==="Game"){
        return GREEN;
    }else{
        return DARKGRAY;
    }
}

const CalendarUI = ({calendarDate, scheduleData}: ICalendarUI) => {

    return(
        <Container>
            {
                calendarDate.map((item, index) => {
                    return(
                        <DateEl>
                            <DateNum isCurrent={item.isCurrentMonth}>{item.date}</DateNum>
                            {
                                item.schedule.length ? item.schedule.map((item2, index) => {
                                    const schedule = scheduleData.filter(e=>e.id===item2)[0];
                                    if(!schedule){return <ScheduleBar style={{opacity:item2!==undefined?1:0}}></ScheduleBar>}
                                    return(
                                        <ScheduleBar bgColor={returnBgColor(schedule.type)}></ScheduleBar>
                                    )
                                }):null
                            }
                        </DateEl>
                    )
                })
            }
        </Container>
    )
};

export default CalendarUI;

const Container = styled.div`
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
const ScheduleBar = styled.div<{bgColor?:string, style?:any}>`
    width: 100%;
    height: 20px;
    background-color: salmon;
    margin-bottom: 10px;
    ${({bgColor}) => {
        return `background-color:${bgColor};`
    }}
`