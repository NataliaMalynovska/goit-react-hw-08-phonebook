import styled from 'styled-components';

export const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
export const TitleMenu = styled.p`
color: #16164d
font-weight: 700;
font-size: 20px;
`;

export const ButtonExit = styled.button`
padding: 2px;
align-self: end;
width: 80px;
height: 30px;
font-weight: 400;
font-size: 20px;
color: white;
background-color: MidnightBlue;
border: 1px solid MidnightBlue;
border-radius: 10px;
box-shadow: 15px 16px 16px -5px rgba(0, 0, 0, 0.6);

&:hover {
  transform: scale(1.1);
  transition: 0.6s;
  cursor: pointer;
  `;
