import React from 'react';
import styled from 'styled-components'
import Calendar from '../components/calendar/calendar';
import { DARKGRAY } from '../styles/color';

const Main = ({}) => {
    
    return(
        <Container>
            <Title>To do list</Title>
            <Calendar /> 

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