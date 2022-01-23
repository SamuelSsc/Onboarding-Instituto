import { queryLogar } from "../services/loginRequest";
import { useMutation } from '@apollo/client';

export function logRequest() {
    const [queryLogar, { data, loading, error }] = useMutation(logar);
  
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
}