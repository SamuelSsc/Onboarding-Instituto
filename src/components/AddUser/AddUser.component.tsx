import React from "react";
import { Align, Button, ContainerInput, Forms, Input, Inputdata, Label, List } from "./AddUser.component.styled";


export const AddUser = () =>{

    let today
    let gettoday = new Date()
    let day = String(gettoday.getDate()).padStart(2,"0")
    let month = String(gettoday.getMonth()+1).padStart(2,"0")
    let year = gettoday.getFullYear();
    
   
    today = year + "-" + month + "-" + day;


    return  (
        
        <Forms >          
            <h3>Crie Uma Conta</h3>


            <Label >Name:</Label>
            <Input
                placeholder="Digite seu nome completo" 
                type="username"
                required
                title="Seu nome deve Possuir ao menos 3 caracteres"
                > 
            </Input>

            <Label >Telefone:</Label>
            <Input
                placeholder="Ex: (DDD)94002-8922" 
                type="tel"
                required
                pattern="^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$"
                title="Digite um Numero de telefone válido com no minimo 9 caracteres e o DDD."
                > 
            </Input>

            <Label >E-mail:</Label>
            <Input
                name= "email"
                placeholder="email@example.com.br" 
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
                placeholder="Digite a Senha novamente" 
                type="password"
                required
                pattern= "(^(?=.*\d)(?=.*[a-zA-Z]).{7,}$)"
                title="Sua Senha deve possuir no minimo 7 caracteres, com pelo menos 1 letra e 1 numero">
            </Input>

            <Align>
                <ContainerInput>
                    <Label>Data de Nascimento</Label>
                    <Inputdata 
                        type="date"
                        required
                        max={today}
                        title="Somente datas anteriores"
                        >
                    </Inputdata>
                </ContainerInput>

                <ContainerInput>
                    <Label>Role</Label>
                    <List name="Role">
                        <option value="valor1">ADMIN</option>
                        <option value="valor2" >USER</option>
                    </List>
                </ContainerInput>
            </Align>
        
            <Button type="submit">Cadastrar</Button>
    
    
        </Forms>
    )
   
    
}