import { Link } from 'react-router-dom';

function CardCorrida() {
    // Dados fictícios para visualização
    const corrida = {
        id: 1,
        destino: "Centro",
        origem: "Bairro A",
        vagas: 3,
        motorista: {
            nome: "João",
            foto: "https://via.placeholder.com/150" // URL de exemplo para a foto
        },
        data: new Date()
    };

    return (
        <div className='bg-white shadow-md rounded-lg p-4 flex flex-col justify-between'>
            <div>
                <div className="flex w-full bg-teal-500 py-2 px-4 items-center gap-4">
                    <img
                        src={corrida.motorista?.foto}
                        className='h-12 rounded-full'
                        alt={corrida.motorista?.nome}
                    />
                    <h3 className='text-lg font-bold text-center uppercase text-white'>
                        {corrida.motorista?.nome}
                    </h3>
                </div>
                <div className='p-4 bg-gray-100'>
                    <h4 className='text-lg font-semibold uppercase text-teal-700'>{corrida.destino}</h4>
                    <p><strong>Origem:</strong> {corrida.origem}</p>
                    <p><strong>Vagas:</strong> {corrida.vagas}</p>
                    <p><strong>Data:</strong> {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(corrida.data)}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarcorrida/${corrida.id}`} 
                    className='w-full text-white bg-teal-500 hover:bg-teal-700 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarcorrida/${corrida.id}`} 
                    className='w-full text-white bg-red-500 hover:bg-red-700 flex items-center justify-center py-2'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    );
}

export default CardCorrida;
