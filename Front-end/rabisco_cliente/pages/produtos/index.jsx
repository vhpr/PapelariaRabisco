// Importa o componente de cabeçalho
import Headerb from '@/components/Headerb'
// Importa o componente de título
import Titulo from '@/components/Titulo'
// Importa o componente de lista de cartões de produtos
import CardList from '@/components/CardList'
// Importa os hooks useState e useEffect do React
import { useState, useEffect } from 'react'
// Importa as funções para obter produtos e buscar produtos por nome da API
import { getProdutos, getProdutoNome } from '@/services/apiRabisco'

export default function Produtos() {
    // Estado para armazenar a lista de produtos
    const [produtos, setProdutos] = useState([])
    // Estado para armazenar o resultado da busca por produtos
    const [resultado, setResultado] = useState(null)

    // Função assíncrona para buscar todos os produtos
    async function buscaProdutos() {
        try {
            // Chama a função getProdutos para obter os dados dos produtos
            const data = await getProdutos()
            // Atualiza o estado com os dados dos produtos
            setProdutos(data)
        } catch (error) {
            // Em caso de erro, exibe a mensagem no console
            console.error('Erro ao buscar produtos:', error)
        }
    }

    // useEffect que executa a função buscaProdutos quando o componente é montado
    useEffect(() => {
        buscaProdutos()
    }, [])

    // Função assíncrona para buscar produtos por termo
    async function pegarTermo(termo) {
        // Verifica se o termo de busca é válido
        if (termo && termo.length > 0) {
            try {
                // Chama a função getProdutoNome para obter os dados dos produtos pelo termo
                const data = await getProdutoNome(termo)
                // Atualiza o estado com os dados dos produtos encontrados
                setResultado(data)
            } catch (error) {
                // Em caso de erro, exibe a mensagem no console e define o resultado como null
                console.error('Erro ao fazer a busca por termos:', error)
                setResultado(null)
            }
        } else {
            // Em caso de erro na utilização da busca, exibe a mensagem no console e define o resultado como null
            console.error("Erro ao utilizar a busca.")
            setResultado(null)
        }
    }

    return (
        <>
            {/* Renderiza o componente de cabeçalho com a função de busca por termo */}
            <Headerb funcao={pegarTermo} />
            {/* Renderiza o título da página */}
            <Titulo texto="Conheça nossos produtos!" />
            {/* Renderiza a lista de cartões de produtos, passando o resultado da busca ou todos os produtos */}
            <CardList produtos={resultado || produtos} />
        </>
    )
}
