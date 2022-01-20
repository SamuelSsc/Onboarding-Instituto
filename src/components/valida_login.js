import React from "react";



export function ValidarLogin(){

    var input = document.querySelector ("#email");
    var email = input.value;
  
    var input = document.querySelector ("#senha");
    var senha = input.value;
    console.log(email)
    console.log(senha)

    if (senha == "" || email == ""){
        alert( "Todos os campos devem estar preenchidos")
    }else{
        /*Ve se a senha possui ao menos 7 caracteres*/
        if (senha.length < 7) {
            alert("A senha precisa ter pelo menos 7 caracteres.");
        }else{
            alert("ENROU")
        }
    }

}

