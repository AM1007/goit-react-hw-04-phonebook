import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  border: 1px solid black;
  width: 320px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  font-size: 20px;
  font-weight: 600;
`;
export const Input = styled.input`
  width: 300px;
  height: 24px;
  outline: transparent;
  padding: 0 8px;
  border: 1px solid #000;
  &:hover,
  &:focus {
    border: 2px solid #92a8d1;
  }
`;
export const ButtonForm = styled.button`
  padding: 6px;
  font-size: 18px;
  cursor: pointer;
  border: transparent;
  border-radius: 4px;
  box-shadow: 0px 4px 6px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  &:hover,
  &:focus {
    background: #92a8d1;
  }
`;
