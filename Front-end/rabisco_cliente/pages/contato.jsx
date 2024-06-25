// Importamos os componentes Titulo, Headerb e CardListFunc, além dos hooks useEffect e useState do React.
import Titulo from '@/components/Titulo'
import Headerb from '../components/Headerb'
import CardListFunc from '@/components/CardListFunc'
import { useEffect, useState } from 'react'
// Importamos a função getFuncionarios do serviço apiReqRes.
import { getFuncionarios } from '@/services/apiReqRes'

// Função principal do componente de contato.
export default function contato() {
  // Declaramos o estado 'funcionarios' para armazenar a lista de funcionários, inicialmente um array vazio.
  const [funcionarios, setFuncionarios] = useState([])

  // Função assíncrona para buscar os funcionários.
  async function buscaFuncionarios() {
    try {
      // Tentamos buscar os dados dos funcionários e atualizar o estado.
      const data = await getFuncionarios()
      setFuncionarios(data)
    } catch (error) {
      // Se houver um erro na busca, registramos no console.
      console.error('Erro ao buscar funcionarios:', error)
    }
  }

  // Usamos o hook useEffect para chamar a função buscaFuncionarios quando o componente é montado.
  useEffect(() => {
    buscaFuncionarios()
  }, [])

  // Renderizamos os componentes na tela.
  return (
    <>
      <Headerb />
      <Titulo texto="Conheça nossa equipe de vendedores." />
      <CardListFunc funcionarios={funcionarios} />
    </>
  )
}
