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
        <div className='bg-antiflashwhite shadow-md rounded-lg overflow-hidden'>
            <div className="flex w-full bg-antiflashwhite py-4 px-6 items-center gap-4">
                <img
                    src={corrida.motorista?.foto}
                    className='h-16 w-16 rounded-full'
                    alt={corrida.motorista?.nome}
                />
                <h3 className='text-xl font-bold text-center uppercase text-white'>
                    {corrida.motorista?.nome}
                </h3>
            </div>
            <div className='p-6 bg-columbiablue-100'>
                <h4 className='text-lg font-semibold uppercase text-teal-700'>{corrida.destino}</h4>
                <p className='mt-2'><strong>Origem:</strong> {corrida.origem}</p>
                <p className='mt-2'><strong>Vagas:</strong> {corrida.vagas}</p>
                <p className='mt-2'><strong>Data:</strong> {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                }).format(corrida.data)}</p>
            </div>
            <div className="flex border-t">
                <Link to={`/editarcorrida/${corrida.id}`} 
                    className='w-full text-white bg-teal-500 hover:bg-teal-700 flex items-center justify-center py-3 border-r'>
                    Reservar
                </Link>
                
            </div>
        </div>
    );
}

export default CardCorrida;
