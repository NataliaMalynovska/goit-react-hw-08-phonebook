import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeText = styled.p`
  font-weight: 700;
  font-size: 28px;
  text-align: center;
  text-decoration: none;
  margin-bottom: 16px;
`;
export const HomeLink = styled(Link)`
  font-weight: 400;
  font-size: 28px;
  text-align: center;
  text-decoration: none;
  color: MidnightBlue;
  margin-bottom: 8px;
  &:hover {
    text-decoration: underline;
  }
`;
