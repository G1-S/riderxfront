import React from 'react';
import CardCorrida from "../cardcorrida/CardCorrida";
import { Link } from 'react-router-dom';
import index from '../../../index.css';
import Vector from '../../../assets/img/Vector.svg';

function ListaCorridas() {
    return (
        <>
            <div className="w-full bg-columbiablue min-h-screen mt-14">
                <h3 className="text-center font-bold text-2xl mb-4 text-black pt-20 pb-10">Caronas Disponíveis</h3>
                <div className="flex">
                    <div className="w-1/4 p-4 min-h-screen bg-columbiablue text-white flex flex-col items-center">
                        <div>
                           <button className='flex items-center space-x-2 bg-lightblue p-2 rounded-lg hover:bg-antiflashwhite transition duration-300'>
                            <img src={Vector} alt="Icone de casa" className="w-6 h-6" /> 
                            <h3 className="font-bold text-2xl text-weldonblue">Caronas</h3>
                            </button>
                        </div>
                        <div className="flex flex-col items-center space-y-6 mt-6">
                            
                            <Link to="/minhascaronas" className="block py-2 px-4 text-black bg-columbiablue rounded-lg hover:bg-antiflashwhite transition duration-300">
                                Minhas caronas
                            </Link>
                            
                        </div>
                    </div>
                    <div className="container w-3/4 p-4 flex flex-col space-y-4">
                        <CardCorrida />
                        <CardCorrida />
                        <CardCorrida />
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCorridas;
