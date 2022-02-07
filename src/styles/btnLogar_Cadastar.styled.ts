import styled from 'styled-components';

export const Button = styled.button`
  justify-content: center;
  border-radius: 10px;
  margin-top: 50px;
  background: #ad4dfc;
  color: white;
  border-style: none;
  height: 44px;
  width: 100px;
  font: bold 15px arial, sans-serif;

  :disabled {
    opacity: 0.4;
  }
`;
