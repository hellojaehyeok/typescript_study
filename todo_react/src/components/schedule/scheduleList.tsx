import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import scheduleDataState from '../../store/scheduleDataState';
import { ScheduleColor } from '../../styles/color';



const ScheduleList = ({}) => {
    const [modifyIndex, setModifyIndex] = useState<number|null>(null);
    const [modifyDesc, setModifyDesc] = useState("");
    const [scheduleData, setScheduleData] = useRecoilState(scheduleDataState);

    // 스케줄 삭제
    const onClickDelete = (id:number): void => {
        setScheduleData(data => [...data.filter(el=>el.id!==id)] );
    };

    // 수정 버튼 클릭
    const onClickModify = (index:number): void => {
        setModifyDesc(scheduleData[index].desc);
        setModifyIndex(index);
    }

    // 취소 버튼 클릭
    const onClickCancel = (): void => {
        setModifyIndex(null);
    }

    // 완료 버튼 클릭
    const onClickSubmit = (index:number): void => {
        let newData = JSON.parse(JSON.stringify(scheduleData));
        newData[index].desc = modifyDesc;
        setScheduleData([...newData]);
        setModifyIndex(null);
    }


    return(
        <Container>
            {
                scheduleData.map((item, index) => {
                    return (
                        <ScheduleEl key={item.id} bgColor={ScheduleColor(item.type)}>
                            <ScheduleContent>
                                <ScheduleHead>
                                    <ScheduleTitle>{item.title}</ScheduleTitle>
                                    <ScheduleDate>{item.startDate} ~ {item.endDate}</ScheduleDate>
                                </ScheduleHead>
                                {
                                    modifyIndex == index ?
                                    <ModifyInput type="text" value={modifyDesc} onChange={e=>setModifyDesc(e.target.value)}/>
                                    :
                                    <ScheduleDesc>{item.desc}</ScheduleDesc>    

                                }
                            </ScheduleContent>
                            {
                                modifyIndex == index ?
                                <>
                                    <ScheduleControlBtn onClick={onClickCancel}>취소</ScheduleControlBtn>
                                    <ScheduleControlBtn onClick={() => onClickSubmit(index)}>완료</ScheduleControlBtn>
                                </>
                                :
                                <ScheduleControlBtn onClick={() => onClickModify(index)}>수정</ScheduleControlBtn>
                            }
                            <ScheduleControlBtn onClick={() => onClickDelete(item.id)}>X</ScheduleControlBtn>
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
const ModifyInput = styled.input`
    width: 80%;
    padding: 10px;
`
const ScheduleControlBtn = styled.button`
    cursor: pointer;
    width: 40px;
    margin: 0 15px;
`