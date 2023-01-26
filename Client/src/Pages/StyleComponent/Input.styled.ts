import styled from 'styled-components';
export const Input = styled.input`
    border: 1px solid #ddd;
    color: #000000;
    background-color: #F0F1F3;
    width:100%;
    padding: 0 10px;
    font-size: 16px;
    font-weight: 400;
    height: 45px;
    border-radius: 5px;
    transition: .15s ease-in-out;

    & ::placeholder{
    color: #B4B4B4;
    font-weight: 400;
    }
    &:focus{
    border-color: #3d5ee1;
    box-shadow: none;
    outline: 0 none;
    }
`;