import React from 'react';
import index from '../../index.css'
import IconeRiderX from '../../assets/img/IconeRiderX.svg';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 animate-background-pulse">
      <div className="container mx-auto flex justify-between items-center py-1 px-6"> {/* Alteração de py-2 para py-1 */}
        <div className="flex items-center space-x-4"> {/* Flex container para alinhar o ícone e o texto */}
          <img src={IconeRiderX} alt="Icone RiderX" style={{ width: '50px', height: '51.22px' }} /> {/* Dimensões ajustadas */}
          <span className="font-bold text-gray-800 text-xl" style={{ fontWeight: 900 }}>RiderX</span> {/* Texto mais grosso e alto */}
        </div>
        <div className="flex space-x-10">
          <Link
          to="/home" 
          className="text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition duration-500 link-underline ">Home</Link>
          <a href="#pesquisar" className="text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition duration-500 link-underline">Pesquise sua viagem</a>
          <a href="#sobre" className="text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition duration-500 link-underline">Sobre nós</a>
        </div>
        <Link to='/Login'>
          <button className="bg-davysgray text-white rounded-lg text-center hover:bg-gray-600 transform" style={{ width: '195px', height: '35px' }}>Login</button> {/* Estilos embutidos */}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
