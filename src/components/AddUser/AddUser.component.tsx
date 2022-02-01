import React from "react";
import { Button, Forms, Input, Inputdata, Label } from "./AddUser.component.styled";


export const AddUser = () =>{
    return  (

        <Forms >          
            <h3>Crie Uma Conta</h3>


            <Label >Name:</Label>
            <Input
                placeholder="Digite seu nome" 
                type="email"
                required> 
            </Input>

            <Label >Telefone:</Label>
            <Input
                placeholder="Ex: (DDD)94002-8922" 
                type="phone"
                required> 
            </Input>

            <Label >E-mail:</Label>
            <Input
                name= "email"
                placeholder="Email@example.com.br" 
                type="email"
                required     
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Digite um endereço de email valido. (NOTA:com letras minusculas)"> 
            </Input>
        
            <Label>Senha:</Label>
            <Input 
                name= "Password"
                placeholder="Digite sua Senha" 
                type="password"
                required
                pattern= "(^(?=.*\d)(?=.*[a-zA-Z]).{7,}$)"
                title="Sua Senha deve possuir no minimo 7 caracteres, com pelo menos 1 letra e 1 numero">
            </Input>

            <Label>Confirme sua Senha:</Label>
            <Input 
                name= "Password"
                placeholder="Digite sua Senha" 
                type="password"
                required
                pattern= "(^(?=.*\d)(?=.*[a-zA-Z]).{7,}$)"
                title="Sua Senha deve possuir no minimo 7 caracteres, com pelo menos 1 letra e 1 numero">
            </Input>

        
            <Label>Data de Nascimento</Label>
            <Inputdata 
                type="date"
                required>
            </Inputdata>
        
            <Button type="submit">Cadastrar</Button>
    
    
        </Forms>
    )
    
}