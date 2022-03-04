import React, { useEffect } from 'react';
import styled from 'styled-components';

interface IPopup {
    content: JSX.Element;
}

const Popup = ({content}: IPopup) => {
    
    useEffect((): ()=>void => {
        document.body.style.overflow = "hidden";
        return () => document.body.style.overflow = "unset";
    }, [])

    return(
        <Container>
            {content}
        </Container>
    )
};

export default Popup;

const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #00000042;
    display: flex;
    align-items: center;
    justify-content: center;
`