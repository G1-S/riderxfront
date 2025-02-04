import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import IconeRiderX from "../../assets/img/IconeRiderX.svg";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {

        handleLogout()
        ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
        navigate('/')
    }

    let component: ReactNode

    if (usuario?.token) {

        component = (
            <div className="fixed top-0 left-0 right-0 z-20 animate-background-pulse">
                <div className="container mx-auto flex justify-between items-center py-1 px-6">
                    <div className="flex items-center space-x-4">
                        <img src={IconeRiderX} alt="Icone RiderX" style={{ width: '50px', height: '51.22px' }} />
                        <span className="font-bold text-gray-800 text-xl" style={{ fontWeight: 900 }}>RiderX</span>
                    </div>
                    <div className="flex space-x-10">
                        <Link
                            to="/corridas"
                            className="text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition duration-500 link-underline"
                        >
                            Corridas disponíveis
                        </Link>
                        {location.pathname === '/home' && (
                            <button
                                className="text-gray-800 hover:text-gray-600 transform hover:-translate-y-1 transition duration-500 link-underline"
                            >
                                Minhas corridas
                            </button>
                        )}
                    </div>
                    <button onClick={logout} className="bg-davysgray text-white rounded-lg text-center hover:bg-gray-600 transform" style={{ width: '195px', height: '35px' }}>
                        Sair
                    </button>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar