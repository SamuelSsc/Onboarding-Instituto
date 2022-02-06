import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getUserByidQuery } from '../../services/getUserByid';

export const UserDetail = () => {
  const token = localStorage.getItem('token');
  const { id } = useParams();

  const { data } = useQuery(getUserByidQuery, {
    context: {
      headers: {
        Authorization: token,
      },
    },
    variables: {
      id,
    },
  });

  return (
    <section>
      <h1>Detalhes do Usuário</h1>
      <div>
        <ul>
          <li>Nome do Usuário: {data?.user?.name}</li>
          <li>E-mail do Usuário: {data?.user?.email}</li>
          <li>Telefone: {data?.user?.phone}</li>
          <li>Aniversario: {data?.user?.birthDate}</li>
          <li>Id: {data?.user?.id}</li>
          <li>Permissão: {data?.user?.role}</li>
        </ul>
      </div>
    </section>
  );
};
