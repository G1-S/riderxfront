import React, { useState } from 'react';
import '../../index.css'; 
import { Link } from 'react-router-dom';

const Cadastrarform: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    role: 'passenger',
    photoUrl: '', // Adicione um novo campo de estado para o URL da foto
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center bg-columbiablue pt-32 pb-8">{/* # POG */}
      <form onSubmit={handleSubmit} className="animate-background-pulse p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Junte-se a nós!</h1>
        <label className="block mb-4">
          <input
            type="text"
            name="name"
            value={formData.name}
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
            name="photoUrl"
            value={formData.photoUrl}
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
            name="password"
            value={formData.password}
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
          Cadastre-se
        </button>
        <p className="mt-4 text-center">
          Já é membro? <Link to='/Login' className="text-blue-500">Entre</Link>.
        </p>
      </form>
    </div>
  );
};

export default Cadastrarform;
