import '../../index.css'; 
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../contexts/AuthContext.tsx'
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import UsuarioLogin from '../../models/UsuarioLogin';



const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const { usuario, handleLogin} = useContext(AuthContext)

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>({ usuario: '', senha: '' });
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar senha
  const [rememberMe, setRememberMe] = useState(false); // Estado para "Lembre-se"
  const authContext = useContext(AuthContext);

if (!authContext) {
  throw new Error('AuthContext não encontrado. Verifique se o AuthProvider está corretamente configurado.');
}



  useEffect(() => {
    if (usuario && usuario.token !== "") {
      navigate('/viagem');
    }
  }, [usuario, navigate]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Chegou aqui!!");
    handleLogin(usuarioLogin);
    
  }

  return (
    <div className="bg-columbiablue h-screen flex items-center justify-center"> {/* Classes Tailwind para centralizar */}
      <form onSubmit={login} className="animate-background-pulse p-8 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="text"
              name="usuario"
              value={usuarioLogin.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
              className="w-full p-2 border rounded-lg mt-1"
              placeholder="Digite seu e-mail"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type={showPassword ? 'text' : 'password'}
              name="senha"
              value={usuarioLogin.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              required
              className="w-full p-2 border rounded-lg mt-1"
              placeholder="Digite sua senha"
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-sm text-blue-500 mt-2">
              {showPassword ? 'Esconder senha' : 'Mostrar senha'}
            </button>
          </label>
        </div>
        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            Lembre-se
          </label>
        </div>
        <button type="submit" 
         className="w-full bg-davysgray text-white p-2 rounded-lg text-center hover:bg-gray-600 transform hover:scale-105 transition-transform">
          Entrar
        </button>
        <p className="mt-4 text-center">
          Não tem uma conta? <Link to='/cadastro' className="text-blue-500">Crie a sua.</Link>
        </p>
      </form>
    </div>
  );
}

export default LoginForm;
