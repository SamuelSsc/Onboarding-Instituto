import { useQuery } from '@apollo/client';
import React from 'react';
import { getUserByidQuery } from '../../services/getUserByid';

export const UserDetail = () => {
  const token = localStorage.getItem('token');
  const id = 5;

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
  console.log(data);

  return <h1>HELLO WORD</h1>;
};
