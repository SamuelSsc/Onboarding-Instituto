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

  const username = data?.user?.name;
  const useremail = data?.user?.email;
  const userphone = data?.user?.phone;
  const userbirthDate = data?.user?.birthDate;
  const user_id = data?.user?.id;
  const role = data?.user?.role;

  return (
    <section>
      <h1>Detalhes do Usuário</h1>
      <div>
        <ul>
          <li>Nome do Usuário: {username}</li>
          <li>E-mail do Usuário: {useremail}</li>
          <li>Telefone: {userphone}</li>
          <li>Aniversario: {userbirthDate}</li>
          <li>Id: {user_id}</li>
          <li>Permissão: {role}</li>
        </ul>
      </div>
    </section>
  );
};
