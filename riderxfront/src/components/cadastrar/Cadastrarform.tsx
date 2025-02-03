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
    <div className=" flex items-center justify-center bg-columbiablue pt-32 pb-32">
      <form onSubmit={handleSubmit} className="animate-background-pulse p-8 rounded-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4">Junte-se a nós!</h1>
        <label className="block mb-4">
          Nome:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-4">
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-4">
          Telefone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-4">
          Foto:
          <input type="file" name="photo" className="w-full p-2 border rounded mt-1" />
        </label>
        <div className="mb-4">
          <span className="block mb-2">Role:</span>
          <label className="mr-4">
            <input
              type="radio"
              name="role"
              value="passenger"
              checked={formData.role === 'passenger'}
              onChange={handleChange}
              className="mr-2"
            />
            Passageiro
          </label>
          <label>
            <input
              type="radio"
              name="role"
              value="driver"
              checked={formData.role === 'driver'}
              onChange={handleChange}
              className="mr-2"
            />
            Motorista
          </label>
        </div>
        <label className="block mb-4">
          Senha:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <label className="block mb-4">
          Confirmação de Senha:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </label>
        <button type="submit" className="w-full bg-davysgray text-white p-2 rounded text-center hover:bg-gray-600 transform hover:scale-105 transition-transform">
          Cadastre-se
        </button>
        <p className="mt-4 text-center">
          Já é membro? <Link to= '/login' className="text-blue-500">Entre</Link>.
        </p>
      </form>
    </div>
  );
};

export default Cadastrarform;
