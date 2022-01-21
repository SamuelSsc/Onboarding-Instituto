import React from "react";



export function ValidarLogin(){
    
    var input = document.querySelector ("#email");
    let email = input.value;
  
    var input = document.querySelector ("#senha");
    let senha = input.value;
    

    const validSenha = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,}$/);
    console.log(validSenha.test(senha))

    console.log(email);
    console.log(senha); 

    if (senha == "" || email == ""){
        alert( "Todos os campos devem estar preenchidos")
    }else{
        /*Ve se a senha possui ao menos 7 caracteres*/
        if (senha.length < 7) {
            alert("A senha precisa ter pelo menos 7 caracteres.");
        }else{
            if(validSenha.test(senha) != true ){
                alert("A senha deve possuir pelo menos uma letra e um numero")
            }else{          
                alert("Logado!")
            }
        }
    }




}

