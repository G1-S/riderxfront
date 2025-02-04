import { Link } from 'react-router-dom'
import Tema from '../../../models/Corrida'

interface CardTemasProps {
    tema: Tema
}

function CardTemas({ tema }: CardTemasProps) {
    return (
        <div className='border flex flex-col rounded-lg overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-zeus text-white font-bold '>
                Tema
            </header>
            <p className='p-8 bg-slate-200 h-full'>{tema.descricao}</p>

            <div className="flex gap-2">
                <Link to={`/editartema/${tema.id}`}
                    className='w-full text-slate-100 rounded bg-indigo-400 flex justify-center hover:bg-indigo-700 text-white w-1/2 p-2 my-5 rounded-xl'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletartema/${tema.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full rounded flex justify-center text-white w-1/2 p-2 my-5 rounded-xl'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTemas