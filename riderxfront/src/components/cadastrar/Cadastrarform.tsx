import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import '../../index.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import { ToastAlerta } from '../../utils/ToastAlerta';

const Cadastrarform: React.FC = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    id: 0,
    nome: '',
    email: '',
    phone: '',
    senha: '',
    confirmPassword: '',
    role: 'passenger',
    foto: '',
  });

  useEffect(() => {
    if (formData.id !== 0) {
      navigate('/login');
    }
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.confirmPassword === formData.senha && formData.senha.length >= 8) {
      setIsLoading(true);
      try {
        await cadastrarUsuario('/usuarios/cadastrar', formData, setFormData);
        ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso');
      } catch (error) {
        ToastAlerta('Erro ao cadastrar o usuário!', 'erro');
      }
    } else {
      ToastAlerta('Dados estão inconsistentes. Verifique as informações do cadastro', 'erro');
      setFormData({ ...formData, senha: '', confirmPassword: '' });
    }

    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center bg-columbiablue pt-32 pb-8">
      <form onSubmit={handleSubmit} className="animate-background-pulse p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Junte-se a nós!</h1>
        <label className="block mb-4">
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Digite seu nome"
          />
        </label>
        <label className="block mb-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Digite seu e-mail"
          />
        </label>
        <label className="block mb-4">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Digite seu telefone"
          />
        </label>
        <label className="block mb-4">
          <input
            type="url"
            name="foto"
            value={formData.foto}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Digite o URL da sua foto"
          />
        </label>
        <div className="mb-4">
          <span className="block mb-2"></span>
          <div className="flex space-x-4">
            <button
              type="button"
              className={`p-2 rounded-lg w-full ${formData.role === 'passenger' ? 'bg-davysgray text-white' : 'bg-white border border-gray-300'}`}
              onClick={() => setFormData({ ...formData, role: 'passenger' })}
            >
              Passageiro
            </button>
            <button
              type="button"
              className={`p-2 rounded-lg w-full ${formData.role === 'driver' ? 'bg-davysgray text-white' : 'bg-white border border-gray-300'}`}
              onClick={() => setFormData({ ...formData, role: 'driver' })}
            >
              Motorista
            </button>
          </div>
        </div>
        <label className="block mb-4">
          <input
            type="password"
            name="senha"
            value={formData.senha}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Digite sua senha"
          />
        </label>
        <label className="block mb-4">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg mt-1"
            placeholder="Confirme sua senha"
          />
        </label>
        <button type="submit" className="w-full bg-davysgray text-white p-2 rounded-lg text-center hover:bg-gray-600 transform hover:scale-105 transition-transform">
          {isLoading ? (
            <ThreeDots
              visible={true}
              height="25"
              width="60"
              color="#1E3A8A"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            <span>Cadastre-se</span>
          )}
        </button>
        <p className="mt-4 text-center">
          Já é membro? <Link to='/Login' className="text-blue-500">Entre</Link>.
        </p>
      </form>
    </div>
  );
};

export default Cadastrarform;
