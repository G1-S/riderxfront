import axios from "axios";
const api = axios.create({
    baseURL: 'baseURL: import.meta.env.VITE_API_URL'
});
export const cadastrarUsuario = async (url, dados, setDados) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};
export const login = async (url, dados, setDados) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
};
export const buscar = async (url, setDados, header) => {
    const resposta = await api.get(url, header);
    setDados(resposta.data);
};
export const cadastrar = async (url, dados, setDados, header) => {
    const resposta = await api.post(url, dados, header);
    setDados(resposta.data);
};
export const atualizar = async (url, dados, setDados, header) => {
    const resposta = await api.put(url, dados, header);
    setDados(resposta.data);
};
export const deletar = async (url, header) => {
    await api.delete(url, header);
};
