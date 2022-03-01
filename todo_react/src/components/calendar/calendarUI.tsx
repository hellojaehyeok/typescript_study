import React from 'react';
import styled from 'styled-components';
import { DARKGRAY } from '../../styles/color';
import { ICalendarDate } from '../../type/calendar';

interface ICalendarUI{
    calendarDate:ICalendarDate[];
}

const CalendarUI = ({calendarDate}: ICalendarUI) => {

    return(
        <Container>
            {
                calendarDate.map((item, index) => {
                    return(
                        <DateEl>
                            <DateNum isCurrent={item.isCurrentMonth}>{item.date}</DateNum>
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
