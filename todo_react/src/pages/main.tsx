import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Calendar from '../components/calendar/calendar';
import Popup from '../components/common/popup';
import AddSchedulePopup from '../components/schedule/AddSchedulePopup';
import ScheduleList from '../components/schedule/scheduleList';
import { DARKGRAY } from '../styles/color';
import {IScheduleData} from '../type/schedule';

const dummyScheduleData:IScheduleData[] = [
    {
        title:"Work",
        desc:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum odio architecto ipsam quaerat dolorum, numquam tempore laboriosam magni voluptates saepe, dolorem rem eius vitae cumque provident aut distinctio deserunt!",
        startDate:"2022-02-26 09:00:00",
        endDate:"2022-03-05 09:00:00",
        type:"work",
        id:new Date().getTime(),
    },
]

const Main = ({}) => {
    const [scheduleData, setScheduleData] = useState<IScheduleData[]>([]);
    const [isAddPopup, setIsAddPopup] = useState(false);

    // 서버에서 데이터 받기
    useEffect(() => {
        setScheduleData([...dummyScheduleData]);
    }, []);

    // 스케줄 삭제
    const onClickDelete = (id:number): void => {
        let newData = scheduleData.filter(el=>el.id!==id);
        setScheduleData([...newData]);
    };

    // 스케줄 추가
    const onClickAdd = (scheduleEl:IScheduleData): void => {
        setScheduleData(arr => [...arr, scheduleEl]);
        setIsAddPopup(false);
    }

    return(
        <Container>
            {
                isAddPopup &&
                <Popup content={<AddSchedulePopup onClickAdd={onClickAdd} closePopup={()=>setIsAddPopup(false)}/>}/>
            }

            <TitleWrap>
                <Title>To do list</Title>
                <PlusBtn onClick={() => setIsAddPopup(true)}>+</PlusBtn>
            </TitleWrap>

            <Calendar scheduleData={scheduleData}/> 
            <ScheduleList scheduleData={scheduleData} onClickDelete={onClickDelete}/>
        </Container>
    )
};

export default Main;

const Container = styled.div`
    padding: 100px;
`
const TitleWrap = styled.div`
    display: flex;
    align-items: center;
`
const Title = styled.h1`
    color: ${DARKGRAY};
    font-size: 30px;
`
const PlusBtn = styled.div`
    color: ${DARKGRAY};
    border: 1px solid ${DARKGRAY};
    display: inline-block;
    font-size: 40px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    margin-left: 10px;
    cursor: pointer;
`