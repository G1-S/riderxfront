import React, { useContext } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import IconeRiderX from '../../assets/img/IconeRiderX.svg';
import '../../index.css';
import { AuthContext } from '../../contexts/AuthContext';
import { ToastAlerta } from '../../utils/ToastAlerta';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info');
    navigate('/home');
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-20 animate-background-pulse">
      <div className="container mx-auto flex justify-between items-center py-1 px-6"> 
        <div className="flex items-center space-x-4"> 
          <img src={IconeRiderX} alt="Icone RiderX" style={{ width: '50px', height: '51.22px' }} /> 
          <span className="font-bold text-gray-800 text-xl" style={{ fontWeight: 900 }}>RiderX</span>
        </div>
        <div className="flex space-x-10">
        {location.pathname === '/cadastro'&& (
            <Link
              to="/home" 
              className="text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition duration-500 link-underline"
            >
              Home
            </Link>
          )}
        {location.pathname === '/Login'&& (
            <Link
              to="/home" 
              className="text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition duration-500 link-underline"
            >
              Home
            </Link>
          )}
          {location.pathname === '/home'&& (
            <Link
              to="/home" 
              className="text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition duration-500 link-underline"
            >
              Home
            </Link>
          )}
          {location.pathname === '/home' && (
            
            <button 
              onClick={() => document.getElementById('sobrenos').scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition duration-500 link-underline"
            >
              Sobre Nós
            </button>
          )}
        </div>
        {location.pathname === '/cadastro'&& (
            <Link to='/Login'>
            <button className="bg-davysgray text-white rounded-lg text-center hover:bg-gray-600 transform" style={{ width: '195px', height: '35px' }}>
              Login
            </button>
          </Link>
          )}
          {location.pathname === '/home'&& (
            <Link to='/Login'>
            <button className="bg-davysgray text-white rounded-lg text-center hover:bg-gray-600 transform" style={{ width: '195px', height: '35px' }}>
              Login
            </button>
          </Link>
          )}
          {location.pathname === '/Login'&& (
            <Link to='/Login'>
            <button className="bg-davysgray text-white rounded-lg text-center hover:bg-gray-600 transform" style={{ width: '195px', height: '35px' }}>
              Login
            </button>
          </Link>
          )}
          {location.pathname === '/viagem'&& (
            <button
            onClick={logout}
            className="bg-davysgray text-white rounded-lg text-center hover:bg-gray-600 transform"
            style={{ width: '195px', height: '35px' }}
          >
            Logoff
          </button>
          )}
        
          
        
      </div>
    </div>
  );
};

export default Navbar;
