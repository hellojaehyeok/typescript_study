import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DARKGRAY } from '../../styles/color';
import { IScheduleData } from '../../type/schedule';
import AddInput from './addInput';

interface IAddSchedulePopup{
    onClickAdd:(el:IScheduleData)=>void;
    closePopup:()=>void;
}

const AddSchedulePopup = ({onClickAdd, closePopup}: IAddSchedulePopup) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endDate, setEndDate] = useState("");
    const [endTime, setEndTime] = useState("");
    const [type, setType] = useState("study");

    return(
        <Container>
            <div>
                <PopupTitle>Add Schedule</PopupTitle>

                <AddInput title="제목" type="text" value={title} setValue={setTitle}/>

                <AddInput title="설명" type="text" value={desc} setValue={setDesc}/>

                <AddInput title="시작날짜" type="date" value={startDate} setValue={setStartDate}/>
                <AddInput title="시작시간" type="time" value={startTime} setValue={setStartTime}/>

                <AddInput title="종료날짜" type="date" value={endDate} setValue={setEndDate}/>
                <AddInput title="종료시간" type="time" value={endTime} setValue={setEndTime}/>

                <AddInput title="타입" type="select" value={type} setValue={setType}/>
            </div>
            <div>
                <Btn onClick={() => onClickAdd({
                    title:title,
                    desc:desc,
                    startDate:`${startDate} ${startTime}`,
                    endDate:`${endDate} ${endTime}`,
                    type:type,
                    id:new Date().getTime(),
                })}>추가하기</Btn>
                <Btn onClick={closePopup}>
                    닫기
                </Btn>
            </div>
        </Container>
    )
};

export default AddSchedulePopup;

const Container = styled.div`
    background-color: #fff;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;

`
const PopupTitle = styled.h2`
    margin-bottom: 20px;
    font-weight: 500;
`
const Btn = styled.button`
    border: 1px solid ${DARKGRAY};
    padding: 20px;
    border-radius: 10px;
    width:46%;
    margin: 30px 2% 0;
    font-size:14px;
`