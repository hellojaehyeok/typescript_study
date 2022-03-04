import React from 'react';
import styled from 'styled-components';
import { DARKGRAY } from '../../styles/color';

interface IAddInput{
    title:string;
    type:string;
    value:string;
    setValue:React.Dispatch<React.SetStateAction<string>>;
}

const AddInput = ({title, type, value, setValue}: IAddInput) => {
    
    return(
        <InputWrap>
            <InputTitle>{title}</InputTitle>
            {
                type==="select" ? 
                <select name="타입" onChange={e => setValue(e.target.value)}>
                    <option value="study">공부</option>    
                    <option value="work">작업</option>    
                    <option value="game">게임</option>    
                    <option value="etc">기타</option>    
                </select>
                :
                <Input type={type} value={value} onChange={e=>setValue(e.target.value)}/>
            }
        </InputWrap>
    )
};

export default AddInput;

const InputWrap = styled.div`
    margin: 15px;
`
const InputTitle = styled.h3`
    margin-bottom: 5px;
    font-weight: 500;
    color: ${DARKGRAY};
` 
const Input = styled.input`
    border: 0;
    border-bottom: 1px solid #000;
    padding: 3px;
` 