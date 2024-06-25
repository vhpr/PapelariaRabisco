// Importa o componente CardFunc que será utilizado para renderizar os dados de cada funcionário
import CardFunc from "./CardFunc"

export default function CardList(props) {
    // Desestrutura a prop funcionarios
    const { funcionarios } = props
    
    return (
        // Container principal com margens verticais
        <div className="container my-3">
            <div className="row g-3">
                {/* Mapeia a lista de funcionários, renderizando um CardFunc para cada um */}
                {funcionarios.map((funcionario, index) => (
                    // Define a chave única para cada elemento gerado pela iteração
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                        <CardFunc
                            // Passa as propriedades do funcionário individual como props para CardFunc
                            first_name={funcionario.first_name}
                            last_name={funcionario.last_name}
                            email={funcionario.email}
                            avatar={funcionario.avatar}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
