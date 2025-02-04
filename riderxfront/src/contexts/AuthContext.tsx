import React, { createContext, useState, ReactNode } from 'react';
import { login } from '../services/Service';
import { ToastAlerta } from '../utils/ToastAlerta';
import UsuarioLogin from '../models/UsuarioLogin';


interface AuthContext {
  usuario: {
    id?: number;
    nome?: string;
    usuario: string;
    senha: string;
    foto?: string;
    token?: string;
  };
  handleLogin: (usuarioLogin: UsuarioLogin) => Promise<void>;
  handleLogout: () => void;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContext | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [usuario, setUsuario] = useState({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (usuarioLogin: UsuarioLogin) => {
    setIsLoading(true);
    try {
      await login('/usuarios/logar', usuarioLogin, setUsuario);
      ToastAlerta('O Usuário foi autenticado com sucesso!', 'sucesso');
    } catch (error) {
      ToastAlerta('Os dados do Usuário estão inconsistentes!', 'erro');
    }
    setIsLoading(false);
  };

  const handleLogout = () => {
    setUsuario({
      id: 0,
      nome: '',
      usuario: '',
      senha: '',
      foto: '',
      token: ''
    });
  };

  return (
    <AuthContext.Provider value={{ usuario, handleLogin, handleLogout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
