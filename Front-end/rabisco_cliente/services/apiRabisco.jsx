// Importamos a biblioteca Axios para realizar requisições HTTP
import axios from 'axios'

// Criamos uma instância do Axios com a configuração da baseURL, que é o endereço principal do nosso servidor.
const api = axios.create({ baseURL: 'http://127.0.0.1:5000' })

// Definimos uma função assíncrona chamada getProdutos, que vai buscar a lista de produtos do servidor.
export async function getProdutos() {
    try {
        // Dentro do bloco try, fazemos uma requisição GET para o endpoint '/produto'.
        const response = await api.get('/produto')
        // Se a requisição for bem-sucedida, retornamos os dados da resposta.
        return response.data
    } catch (error) {
        // Se houver um erro na requisição, capturamos esse erro no bloco catch.
        // Nesse caso, registramos uma mensagem de erro no console.
        console.error(`Erro ao buscar produtos: ${error.message}`)
    }
}

// Definimos uma função assíncrona chamada getProdutoId, que vai buscar um produto específico pelo ID.
export async function getProdutoId(id) {
    try {
        // Fazemos uma requisição GET para o endpoint '/produto/' seguido do ID do produto.
        const response = await api.get('/produto/' + id)
        // Se a requisição for bem-sucedida, retornamos os dados da resposta.
        return response.data
    } catch (error) {
        // Se houver um erro na requisição, capturamos esse erro no bloco catch.
        // Registramos uma mensagem de erro no console.
        console.error(`Erro ao buscar o produto: ${error.message}`)
    }
}

// Definimos uma função assíncrona chamada getProdutoNome, que vai buscar produtos pelo nome ou termo relacionado.
export async function getProdutoNome(termo) {
    try {
        // Fazemos uma requisição GET para o endpoint '/produto/nome/' seguido do termo de busca.
        const response = await api.get(`/produto/nome/${termo}`)
        // Se a requisição for bem-sucedida, retornamos os dados da resposta.
        return response.data
    } catch (error) {
        // Se houver um erro na requisição, capturamos esse erro no bloco catch.
        // Registramos uma mensagem de erro no console e retornamos um array vazio.
        console.error(`Erro ao buscar o termo: ${error.message}`)
        return []
    }
}
