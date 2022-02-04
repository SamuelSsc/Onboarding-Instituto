import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsersquery } from '../../services/getUsersRequest';
import {
  BTNavegation,
  BTNcreateusers,
  BTNDetails,
  Container,
  Contents,
  Details,
  Header,
  Navegation,
  Subtitle,
  Ul,
} from './UserList.component.styled';
import { useQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

export function UserList(): JSX.Element {
  const navigate = useNavigate();

  const Createuser = () => {
    {
      navigate('/createuser');
    }
  };

  const UserDetails = () => {
    navigate('/userdetail');
  };

  let usersInformation;

  const token = localStorage.token;
  const limit = 10;
  const [offset, setOfsset] = useState(0);
  const { data } = useQuery(getUsersquery, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      offset,
      limit,
    },
  });

  usersInformation = data?.users?.nodes?.map((users: { name: string; email: string }) => users);

  const namesMapped = usersInformation?.map((users: usersType) => (
    <Details>
      <BTNDetails onClick={UserDetails}>Ver</BTNDetails>
      <p key={users.id}>{users.name}</p>
    </Details>
  ));
  const emailMapped = usersInformation?.map((users: usersType) => (
    <Details>
      <p key={users.phone}>{users.email}</p>
    </Details>
  ));

  let nextPageexists = data?.users?.pageInfo?.hasNextPage;
  let previousPageexists = data?.users?.pageInfo?.hasPreviousPage;

  const nextPage = () => {
    setOfsset(offset + 10);
  };

  const previusPage = () => {
    setOfsset(offset - 10);
  };

  return (
    <section>
      <Container>
        <Contents>
          <Header>
            <Subtitle>Lista de Usuarios</Subtitle>
            <BTNcreateusers onClick={Createuser}>Novo usuário</BTNcreateusers>
          </Header>

          <Ul>
            <li>
              <strong>NOME:</strong>
              <br />
              {namesMapped}
            </li>
            <li>
              <strong>E-MAIL:</strong>
              <br />
              {emailMapped}
            </li>
          </Ul>
          <Navegation>
            <BTNavegation onClick={previusPage} disabled={!previousPageexists}>
              Anterior
            </BTNavegation>

            <BTNavegation onClick={nextPage} disabled={!nextPageexists}>
              Proxima
            </BTNavegation>
          </Navegation>
        </Contents>
      </Container>
    </section>
  );
}

interface usersType {
  id: number | string;
  name: string;
  email: string;
  phone: string;
}
