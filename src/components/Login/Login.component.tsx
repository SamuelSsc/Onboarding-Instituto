import React from "react";
import { Button, Forms, Input, Label } from "./login.component.style.ts";
import logRequest from "../../hooks/loginUser";

function Login(): JSX.Element{

  return(
    /* Manipulador onSubmit do formulario chama a function Mutate (arrayLog) que é retornada pelo Hook*/
    <Forms id="Forms"  
    onSubmit={e => {
      e.preventDefault();
      arrayLog({ variables: { email: email, password: password } });
      (e.target.value);
    }}>          
                
      <h1>Bem Vindo(a) à Taqtile!!</h1>    
      <Label >E-mail:</Label>
      <Input 
        name= "email"
        placeholder="Email@example.com.br" 
        type="email"
        required
        /*Pattern é usado para validar os dados do input com o Regex*/
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        /*title Mensagem que aparece no erro*/
        title="Digite um endereço de email valido. (NOTA:com letras minusculas)"> 
      </Input>

      <Label>Senha:</Label>
      <Input  
        name= "Password"
        placeholder="Digite sua Senha" 
        type="password"
        required
        pattern="/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/"
        title="Sua Senha deve possuir no minimo 7 caracteres, com pelo menos 1 letra e 1 numero">
      </Input>

      <Button id="btnEntrar" onClick={logRequest} type="submit" >Entrar</Button>

    </Forms>
    
  
    );
}


export default Login;
