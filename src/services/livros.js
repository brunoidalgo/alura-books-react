import axios from "axios";

const livrosAPI =  axios.create({
    baseURL:"http://localhost:8000/livros"
}); 

export async function getLivros() {
    // Pega os dados da API  e retorna os dados
    const response = await livrosAPI.get('/');

    return response.data;
};