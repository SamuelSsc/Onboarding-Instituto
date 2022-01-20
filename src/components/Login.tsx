import React from "react";
import { Button, Forms, Input, Label } from "./style";
import { ValidarLogin } from "./valida_login";

export function Login(): JSX.Element{
  return(
    <Forms method="POST">          
              
      <h1>Bem Vindo(a) à Taqtile!!</h1>    
      <Label >E-mail:</Label>
      <Input id="email" placeholder="Email@example.com.br" type="email"></Input>

      <Label>Senha:</Label>
      <Input id="senha" placeholder="Digite sua Senha" type="password"></Input>

      <Button onClick={ValidarLogin} type="submit" >Entrar</Button>
  </Forms>
  
  );
}



export default Login;
