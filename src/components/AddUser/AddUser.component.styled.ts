import styled from 'styled-components';

export const Forms = styled.form `
    display: flex;
    flex-direction: column;
    text-align: center;  
    margin: auto;
    width: 60vw;
    align-items: center;  
`;

export const Input = styled.input `
justify-content: center;
text-align: center;
border-radius: 10px;
width: 85%; 
height: 40px;

`;

export const Label = styled.label `
align-self: flex-start;
margin-top: 30px;
margin-left: 20px;
`;

export const Button = styled.button `
justify-content: center;
border-radius: 10px;
margin-top: 50px;
background: #ad4dfc;
color: white;
border-style: none ;
height: 50px;
width: 100px;
font: bold 15px arial, sans-serif;   
`;

export const Align = styled.div`
display:flex;
`

export const ContainerInput = styled.div`
display:flex;
margin-top:10px;
flex-direction:column;
margin:10px;
`

export const List = styled.select`
width: 150px; 
height: 25px;
`

export const Inputdata = styled.input`
border-radius: 10px;
width: 150px; 
height: 25px;
`

