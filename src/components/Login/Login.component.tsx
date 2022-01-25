import React, { useState } from "react";
import { Button, Forms, Input, Label } from "./login.component.style.ts";
import { useEffect } from "react";
import { ApolloError, useMutation } from "@apollo/client";
import { queryLogar } from "../../services/loginRequest";


function Login(): JSX.Element{
  
  const [email, setEmail] = useState("") /*email inicia como uma String vazia*/
  const [password, setPassword] = useState("")


  const  [ login, { data, loading, error } ]= useMutation(queryLogar,{
    onError: (error: ApolloError) => {
      alert("Login ou Senha invalido.")
      console.log(error)
    },
    onCompleted: (e:any) => {
      alert("Bem Vindo Usuario")
      console.log(e)
    }

  });

  function enviarForm(e:{preventDefault:()=>void}){ 
    e.preventDefault();
    console.log(email);
    console.log(password)
    login({variables:{
     data:{email, password}
    } })
  }

  return(

    /* Manipulador onSubmit do formulario chama o evento enviarForm*/ 
    <Forms
    onSubmit= {enviarForm} >          

      <h1>Bem Vindo(a) à Taqtile!!</h1>    
      <Label >E-mail:</Label>
      <Input

        /*onChange(evento) pega o valor que foi digitado no Input, quando o valor é alterado chamando a função de manipulação de State.*/
        onChange={(e)=> setEmail(e.target.value)}
        value={email} /*Esta linha Serve para associar o valor do input ao State de email.*/
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
        onChange={(e)=> setPassword(e.target.value)}
        value={password}
        name= "Password"
        placeholder="Digite sua Senha" 
        type="password"
        required
        pattern= "(^(?=.*\d)(?=.*[a-zA-Z]).{7,}$)"
        title="Sua Senha deve possuir no minimo 7 caracteres, com pelo menos 1 letra e 1 numero">
      </Input>

      <Button type="submit" >Entrar</Button>

    </Forms>
    
  
    );
}


export default Login;
