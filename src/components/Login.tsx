import React from "react";
import { Button, Forms, Input, Label } from "./style";

export function Login(): JSX.Element{
  return(
    <Forms method="post">          
              
      <h1>Bem Vindo(a) à Taqtile!!</h1>    
      <Label >E-mail:</Label>
      <Input placeholder="Email@example.com.br" type="email"></Input>

      <Label>Senha:</Label>
      <Input placeholder="Digite sua Senha" type="password"></Input>

      <Button className="buttonLogin" type="submit">Entrar</Button>
  </Forms>

  );
}

export default Login;
