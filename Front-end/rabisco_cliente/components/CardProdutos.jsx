// Importa o componente Link do Next.js para navegação entre páginas
import Link from "next/link"

export default function CardProdutos(props) {
    // Converte a prop preco para um número
    const preco = +props.preco
    
    return (
        // Link para a página do produto com base no ID do produto
        <Link href={`/produtos/${props.id}`}>
            <div className="card">
                {/* Imagem do produto */}
                <img src={`produtos/${props.nome}.png`} className="card-img-top p-2" alt="..."/>
                
                <div className="card-body">
                    {/* Nome do produto */}
                    <h6 className="card-title">{props.nome}</h6>
                    {/* Descrição do produto */}
                    <p className="card-text">{props.descricao}</p>
                    {/* Botão com o preço do produto */}
                    <a href="#" className="btn btn-primary">R$ {preco.toFixed(2)}</a>
                </div>
                
                <div className="card-footer">
                    {/* Quantidade de unidades em estoque */}
                    <h5 className="card-text text-success text-center">
                        {props.quantidade} unidade (s) em estoque
                    </h5>
                </div>
            </div>
        </Link>
    )
}

// Define os valores padrão para as props do componente
CardProdutos.defaultProps = {
    nome: 'Produto',
    descricao: 'Descrição do produto',
    quantidade: 0,
    preco: 0.00
}
