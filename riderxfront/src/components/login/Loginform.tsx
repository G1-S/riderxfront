import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css'; 
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="bg-columbiablue h-screen flex items-center justify-center"> {/* Classes Tailwind para centralizar */}
      <form onSubmit={handleSubmit} className="animate-background-pulse p-8 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>
        <div className="mb-4">
          <label className="block mb-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
        <button type="submit" className="w-full bg-davysgray text-white p-2 rounded-lg text-center hover:bg-gray-600 transform hover:scale-105 transition-transform">
          Entrar
        </button>
        <p className="mt-4 text-center">
          Não tem uma conta? <Link to='/cadastro' className="text-blue-500">Crie a sua.</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
