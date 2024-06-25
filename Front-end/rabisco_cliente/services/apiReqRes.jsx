import axios from 'axios'
const api = axios.create({baseURL: 'https://reqres.in/api/'})
export async function getFuncionarios(){
    try {
        // Dentro do bloco try, fazemos uma requisição GET para o endpoint '/users utilizando um parâmetro per_page=12 para buscar 12 funcionários'.
        const response = await api.get('users?per_page=12')
        // Se a requisição for bem-sucedida, retornamos os dados da resposta, que estão dentro de outro objeto data. 
        return response.data.data
    } catch (error) {
        // Se houver um erro na requisição, capturamos esse erro no bloco catch.
        // Nesse caso, registramos uma mensagem de erro no console.
        console.error(`Erro ao buscar funcionários: ${error.message}`)
    }
} 

