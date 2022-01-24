import { useMutation } from '@apollo/client';
import { queryLogar } from '../services/loginRequest';

/*Componente que executa a Consulta com o Hook useMutation*/
function logRequest() {
    /*A const arrayLog é a tupla com o resultado e os dados da query, ao executar a Mutation ela precisa ser chamada para ser reenderizada.,*/
    const [arrayLog, { data, loading, error }] = useMutation(queryLogar);
  
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    else {
        return(
            alert("Até aqui está funfando!")
        );
    }
}

export default logRequest;