import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
import { login } from "../services/Service";
import { ToastAlerta } from "../utils/ToastAlerta";
export const AuthContext = createContext({});
export function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState({
        id: 0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    async function handleLogin(usuarioLogin) {
        setIsLoading(true);
        try {
            await login(`/usuarios/logar`, usuarioLogin, setUsuario);
            ToastAlerta("O Usuário foi autenticado com sucesso!", "sucesso");
        }
        catch (error) {
            ToastAlerta("Os dados do Usuário estão inconsistentes!", "erro");
        }
        setIsLoading(false);
    }
    function handleLogout() {
        setUsuario({
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: '',
            token: ''
        });
    }
    return (_jsx(AuthContext.Provider, { value: { usuario, handleLogin, handleLogout, isLoading }, children: children }));
}
