import Usuario from "./Usuario";

export default interface Corrida {
    id: number;
    origem: string;
    destino: string;
   vagas: string;
    status: string;
    distancia: string;
   tipoPagamento: string;
    motorista_Id: Usuario;
}
    