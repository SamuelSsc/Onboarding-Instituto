import { ApolloError, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserMutation } from '../../services/createUsersRequest';
import { Align, Button, ContainerInput, Forms, Input, Inputdata, Label, List } from './AddUser.component.styled';

export const AddUser = () => {
  const today = new Date().toISOString().split('T')[0];
  const navegation = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');

  const token = localStorage.getItem('token');

  const [newUser, { loading: LoadingBtn }] = useMutation(createUserMutation, {
    context: {
      headers: {
        Authorization: token,
      },
    },

    onError: (error: ApolloError) => {
      console.log(error);
    },

    onCompleted: (e: any) => {
      alert('Usuario Cadastrado com Sucesso');
      navegation('/userspage');
    },
  });

  function enviarCadastro(e: { preventDefault: () => void }) {
    e.preventDefault();

    newUser({
      variables: {
        data: { name, phone, birthDate, email, role, password },
      },
    });
  }

  return (
    <Forms onSubmit={enviarCadastro}>
      <h3>Crie Uma Conta</h3>

      <Label>Name:</Label>
      <Input
        onChange={(e) => setName(e.target.value)}
        value={name}
        placeholder='Digite seu nome completo'
        type='username'
        required
        title='Seu nome deve Possuir ao menos 3 caracteres'
      ></Input>

      <Label>Telefone:</Label>
      <Input
        onChange={(e) => setPhone(e.target.value)}
        value={phone}
        placeholder='Ex: (DDD)94002-8922'
        type='tel'
        required
        pattern='^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$'
        title='Digite um Numero de telefone válido com no minimo 9 caracteres e o DDD.'
      ></Input>

      <Label>E-mail:</Label>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        name='email'
        placeholder='email@example.com.br'
        type='email'
        required
        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
        title='Digite um endereço de email valido. (NOTA:com letras minusculas)'
      ></Input>

      <Label>Senha:</Label>
      <Input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        name='Password'
        placeholder='Digite sua Senha'
        type='password'
        required
        pattern='(^(?=.*\d)(?=.*[a-zA-Z]).{7,}$)'
        title='Sua Senha deve possuir no minimo 7 caracteres, com pelo menos 1 letra e 1 numero'
      ></Input>

      <Align>
        <ContainerInput>
          <Label>Data de Nascimento</Label>
          <Inputdata
            onChange={(e) => setBirthDate(e.target.value)}
            value={birthDate}
            type='date'
            required
            max={today}
            title='Somente datas anteriores'
          ></Inputdata>
        </ContainerInput>

        <List onChange={(e) => setRole(e.target.value)} value={role} name='Role' placeholder='Admin ou User' required>
          <option></option>
          <option value='user'>User</option>
          <option value='admin'>Admin</option>
        </List>
      </Align>

      <Button type='submit' disabled={LoadingBtn}>
        {LoadingBtn ? 'Loading...' : 'Cadastrar'}
      </Button>
    </Forms>
  );
};
