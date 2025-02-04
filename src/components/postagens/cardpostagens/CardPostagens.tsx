import { Link } from 'react-router-dom'
import Postagem from '../../../models/Carona'
import fotoPadrao from '../../../assets/svgs/profile.svg';

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {

    const fotoUsuario = postagem.usuario?.foto || fotoPadrao;

    return (
        <div className='border flex flex-col rounded-lg overflow-hidden justify-between'>

            <div>
                <div className="flex w-full items-center gap-4 py-2 px-6 bg-zeus text-white">
                    <img
                        src={fotoUsuario}
                        className='h-12 rounded-full'
                        alt={postagem.usuario?.nome} />
                    <h3 className='py-2 px-6 bg-zeus text-white'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase pt-2 pb-8'>{postagem.titulo}</h4>
                    <p className='pb-8'>{postagem.texto}</p>
                    <div className='text-xs '>
                        <p>Tema: {postagem.tema?.descricao}</p>
                        <p>Data: {new Intl.DateTimeFormat(undefined, {
                            dateStyle: 'full',
                            timeStyle: 'medium',
                        }).format(new Date(postagem.data))}</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-2">
                <Link to={`/editarpostagem/${postagem.id}`}
                    className='rounded bg-indigo-400 flex justify-center hover:bg-gray-400 text-white w-1/2 p-2 my-5 rounded-xl'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarpostagem/${postagem.id}`}
                    className='rounded bg-red-400 flex justify-center hover:bg-gray-400 text-white w-1/2 p-2 my-5 rounded-xl'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem