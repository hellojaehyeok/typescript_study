import React from 'react';
import styled from 'styled-components';
import { GREEN, PINK, SKYBLUE } from '../../styles/color';
import { IScheduleData } from '../../type/schedule';

interface ISchduleData{
    schduleData:IScheduleData[];
    onClickDelete:(id:number) => void; 
}


const returnBgColor = (type:string): string => {
    if(type==="work"){
        return PINK;
    }else if(type==="study"){
        return SKYBLUE;
    }else if(type==="Game"){
        return GREEN;
    }else{
        return GREEN;
    }
}

const ScheduleList = ({schduleData, onClickDelete}: ISchduleData) => {
    

    return(
        <Container>
            {
                schduleData.map((item, index) => {
                    return (
                        <ScheduleEl key={item.id} bgColor={returnBgColor(item.type)}>
                            <ScheduleContent>
                                <ScheduleHead>
                                    <ScheduleTitle>{item.title}</ScheduleTitle>
                                    <ScheduleDate>{item.startDate} ~ {item.endDate}</ScheduleDate>
                                </ScheduleHead>
                                <ScheduleDesc>{item.desc}</ScheduleDesc>    
                            </ScheduleContent>

                            <ScheduleDeleteBtn onClick={() => onClickDelete(item.id)}>X</ScheduleDeleteBtn>
                        </ScheduleEl>
                    )
                })
            }
        </Container>
    )

};

export default ScheduleList;

const Container = styled.div`
    width: 80vw;
    margin: 0 auto;
`
const ScheduleEl = styled.div<{bgColor:string}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    margin: 15px 0;
    border-radius: 10px;
    ${({bgColor}) => {
        return `background-color: ${bgColor};`
    }}
    
`
const ScheduleContent = styled.div`
    width: 100%;
`
const ScheduleHead = styled.div`
    display: flex;
    margin-bottom: 10px;
`
const ScheduleTitle = styled.div`
    font-size: 20px;
    margin-right: 40px;
`
const ScheduleDate = styled.div`
    font-size: 16px;
    `
const ScheduleDesc = styled.div`
    font-size: 16px;
    line-height: 25px;
    width: 80%;
    word-break: break-all;
`

const ScheduleDeleteBtn = styled.button`
    cursor: pointer;
    padding: 20px;
`