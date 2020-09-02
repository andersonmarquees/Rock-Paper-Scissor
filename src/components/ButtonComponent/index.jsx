import styled from 'styled-components';

export const Button = styled.button`
    width: 8rem;
    height: 5rem;
    border: 5px solid black;
    border-radius: 16px;
    cursor: pointer;
    background-color: #1F7A8C;
    color: #fff;
    

    &:hover {
        transform: scale(1.2)
    }

    transition: transform 300ms linear;

`
export const WrapperButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`