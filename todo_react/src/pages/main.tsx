import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Calendar from '../components/calendar/calendar';
import ScheduleList from '../components/schedule/scheduleList';
import { DARKGRAY } from '../styles/color';
import {IScheduleData} from '../type/schedule';

const dummyScheduleData:IScheduleData[] = [
    {
        title:"Work",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum odio architecto ipsam quaerat dolorum, numquam tempore laboriosam magni voluptates saepe, dolorem rem eius vitae cumque provident aut distinctio deserunt!",
        startDate:"2022-03-01 09:00:00",
        endDate:"2022-03-05 09:00:00",
        type:"work",
        id:0,
    },
    {
        title:"Study",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, ",
        startDate:"2022-03-02 09:00:00",
        endDate:"2022-03-03 09:00:00",
        type:"study",
        id:1,
    },
    {
        title:"Game",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, ",
        startDate:"2022-03-02 09:00:00",
        endDate:"2022-03-05 09:00:00",
        type:"Game",
        id:2,
    },
    {
        title:"study",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, ",
        startDate:"2022-03-05 09:00:00",
        endDate:"2022-03-13 09:00:00",
        type:"study",
        id:3,
    },
]

const Main = ({}) => {
    const [scheduleData, setScheduleData] = useState<IScheduleData[]>([]);

    // 서버에서 데이터 받기
    useEffect(() => {
        setScheduleData([...dummyScheduleData]);
    }, []);

    // 스케줄 삭제
    const onClickDelete = (id:number): void => {
        let newData = scheduleData.filter(el=>el.id!==id);
        setScheduleData([...newData]);
    };

    return(
        <Container>
            <Title>To do list</Title>
            <Calendar scheduleData={scheduleData}/> 
            <ScheduleList scheduleData={scheduleData} onClickDelete={onClickDelete}/>
        </Container>
    )
};

export default Main;

const Container = styled.div`
    padding: 100px;
`
const Title = styled.h1`
    color: ${DARKGRAY};
    font-size: 30px;
`