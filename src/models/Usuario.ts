export default interface Usuario {
    id: number;
    nome: string;
    usuario: string;
    telefone: string;
    foto: string;
    senha: string;
    carroModelo?: string | null;
    carroCor?: string | null;
    carroAno?: string | null;
    carroPlaca?: string | null
}