import styled from 'styled-components';
import { Button } from '../Login/login.component.style.ts';

export const Subtitle = styled.h3`
  text-align: center;
`;

export const Container = styled.div`
  display: flex;
  text-align: center;
  align-itens: baselines;
  justify-content: space-evenly;
`;

export const Contents = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 5px;
  width: 100%;
  justify-content: space-around;
`;

export const Navegation = styled.div``;

export const BTNavegation = styled.button`
  border-radius: 8px;
  background-color: #ad4dfc;
  width: 80px;
  color: white;
  margin: 10px;
  :disabled {
    display: none;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
`;

export const BTNcreateusers = styled.button`
  border-radius: 8px;
  background-color: Black;
  width: 100px;
  height: 25px;
  color: white;
  margin: 10px;
`;

export const Details = styled.section`
  display: flex;
`;

export const BTNDetails = styled.button`
  height: 25px;
  margin: 10px;
`;
