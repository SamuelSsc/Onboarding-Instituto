import React, { useState } from "react";
import { Button, Forms, Input, Label } from "./login.component.style.ts";
import { useEffect } from "react";
import { ApolloError, useMutation } from "@apollo/client";
import { queryLogar } from "../../services/loginRequest";
import { Token } from "graphql";
import { Navigate, useNavigate } from "react-router-dom";


function Login(): JSX.Element{
  
  const [email, setEmail] = useState("") /*email inicia como uma String vazia*/
  const [password, setPassword] = useState("")
  const navigate = useNavigate();

  /*Array (login) recebe a tupla de resposta da query ou o erro ao consultar o playground*/
  const  [ login, { loading:LoadingButton } ]= useMutation(queryLogar,{

    onError: (error: ApolloError) => {
      alert("Login ou Senha invalido, Por gentileza inserir novamente...")
      console.log(error.message)
    },

    /*se o login completar ele exibe as informações que serão trazidas no console.log seja ela qual for com o(e:any) */
    onCompleted: (e:any) => { 
      let tokenvalue =  e.login.token;
      localStorage.setItem("token", tokenvalue  );
      alert("Bem Vindo Usuario!!")
      console.log(e)
      navigate("/Userspage")
    }

  });

  /*(e:{preventDefault:()=>void}) ==> indica que a função prevent default abaixo não retorna nenhum valor*/
  function enviarForm(e:{preventDefault:()=>void}){ 
    e.preventDefault(); 

 
    /*passando as variaveis que vão para query exatamente como foi declarada nela no arquivo de request*/
    login({variables:{
     data:{email, password}
    } })
  }

  return(

    /* Manipulador onSubmit do formulario chama o evento enviarForm*/ 
    <Forms
    onSubmit= {enviarForm} >          
   
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

      <Button type="submit" disabled={LoadingButton}>
        {LoadingButton? "Loading..." : "Entrar"}
      </Button>


    </Forms>
    
  
    );
}


export default Login;
