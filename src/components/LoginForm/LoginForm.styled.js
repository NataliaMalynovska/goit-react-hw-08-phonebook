import styled from 'styled-components';

export const LogForm = styled.form`
  width: 320px;
  margin: 0 auto;
`;
export const LogInput = styled.input`
  dislay: block;
  margin-top: 8px;
  padding: 8px;
  width: 240px;
  height: 40px;
  font-size: 18px;
  background: Lavender;
  border: 1px solid Lavender;
  border-radius: 10px;
  transition: border 50ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 15px 16px 16px -5px rgba(0, 0, 0, 0.6);

  &:hover {
    transform: scale(1.05);
  }
`;
export const LogLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 20px;
`;
export const LogButton = styled.button`
  padding: 8px;
  align-self: end;
  width: 240px;
  height: 40px;
  margin-top: 16px;
  font-weight: 400;
  font-size: 20px;
  color: white;
  background-color: MidnightBlue;
  border: 1px solid MidnightBlue;
  border-radius: 10px;
  box-shadow: 15px 16px 16px -5px rgba(0, 0, 0, 0.6);

  &:hover {
    transform: scale(1.05);
    transition: 0.6s;
    cursor: pointer;
    // background-color: MediumSeaGreen;
  }
`;
