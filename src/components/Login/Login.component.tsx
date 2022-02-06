import { ApolloError, useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { queryLogar } from '../../services/loginRequest';
import { Button } from '../../styles/btnLogar_Cadastar.styled';
import { Input, Label } from '../../styles/label.Input.styled';
import { Forms } from '../../styles/Form.styled';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [login, { loading: LoadingButton }] = useMutation(queryLogar, {
    onError: (error: ApolloError) => {
      alert('Login ou Senha invalido, Por gentileza inserir novamente...');
      console.log(error.message);
    },

    onCompleted: (e: any) => {
      const tokenvalue = e.login.token;
      localStorage.setItem('token', tokenvalue);
      alert('Bem Vindo Usuario!!');
      navigate('/userspage');
    },
  });

  function enviarForm(e: { preventDefault: () => void }) {
    e.preventDefault();

    login({
      variables: {
        data: { email, password },
      },
    });
  }

  return (
    <Forms onSubmit={enviarForm}>
      <Label>E-mail:</Label>
      <Input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        name='email'
        placeholder='Email@example.com.br'
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

      <Button type='submit' disabled={LoadingButton}>
        {LoadingButton ? 'Loading...' : 'Entrar'}
      </Button>
    </Forms>
  );
}

export default Login;
