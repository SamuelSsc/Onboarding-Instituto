import React from "react";
import './index.css';

/*Eslint solicitou que adcionasse o JSX.Element*/
function App(): JSX.Element {
  return (
        <form method="post" className="form">          
            
            <h1>Bem Vindo(a) à Taqtile!!</h1>    
            <label className="Label">E-mail:</label>
            <input className="Input" placeholder="Digite seu E-mail" type="email"></input>

            <label className="Label">Senha:</label>
            <input className="Input" placeholder="Digite sua Senha" type="password"></input>

            <button className="buttonLogin" type="submit">Entrar</button>
        </form>
   

  );
}

export default App;
