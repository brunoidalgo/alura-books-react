import axios from "axios";

const favoritosAPI =  axios.create({
    baseURL:"http://localhost:8000/favoritos"
}); 

export async function getLivrosFavoritos() {
    // Pega os dados da API  e retorna os dados
    const response = await favoritosAPI.get('/');

    return response.data;
};


export async function postFavorito(id) {
    // Pega os dados da API  e retorna os dados
    console.log(favoritosAPI.defaults.baseURL + `${id}`);
    await favoritosAPI.post(`/${id}`);
};


export async function deleteFavorito(id) {
    // Pega os dados da API  e retorna os dados
    await favoritosAPI.delete(`/${id}`);
};