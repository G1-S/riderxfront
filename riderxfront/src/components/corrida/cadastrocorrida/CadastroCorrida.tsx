import React, { useState, ChangeEvent, FormEvent } from "react";
import { cadastrar } from "../../../services/Service";

const CadastrarCorrida: React.FC = () => {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [vagas, setVagas] = useState<number | "">("");
  const [distancia, setDistancia] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aqui você pode adicionar a lógica de submissão, como fazer uma chamada à API ou atualizar o estado global
    console.log("Formulário enviado com sucesso!");
    console.log({ origem, destino, vagas, distancia });

    // Exemplo de redirecionamento após submissão bem-sucedida
    // navigate('/nova-rota');
  };

  return (
    <div className="bg-columbiablue min-h-screen flex">

      {/* Sidebar */}
      <div className="w-64 h-[80vh] p-6 flex flex-col gap-4">
        <nav className="space-y-2">
          <a href="#" className="text-davysgray block py-2 px-4 rounded-md hover:bg-weldonblue">Minhas caronas</a>
          <a href="#" className="text-raisinblack font-bold block py-2 px-4 rounded-md bg-antiflashwhite">Cadastro de caronas</a>
        </nav>
      </div>

      {/* Conteúdo Principal */}
      <div className="flex-1 flex items-center justify-start p-8">
        <div className="bg-antiflashwhite w-full max-w-2xl p-8 rounded-lg shadow-md">

          {/* Título */}
          <h2 className="text-raisinblack text-2xl font-bold mb-6">Cadastro de corrida</h2>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Origem"
              className="w-full p-3 border border-davysgray rounded-md"
              value={origem}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setOrigem(e.target.value)}
            />
            <input
              type="text"
              placeholder="Destino"
              className="w-full p-3 border border-davysgray rounded-md"
              value={destino}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setDestino(e.target.value)}
            />
            <input
              type="number"
              placeholder="Vagas"
              className="w-full p-3 border border-davysgray rounded-md"
              value={vagas}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setVagas(e.target.valueAsNumber || "")}
            />
            <input
              type="text"
              placeholder="Distância"
              className="w-full p-3 border border-davysgray rounded-md"
              value={distancia}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setDistancia(e.target.value)}
            />

            {/* Botões de pagamento */}
            <div className="flex justify-center gap-4 mt-4">
              <button type="button" className="bg-antiflashwhite border border-davysgray px-4 py-2 rounded-md">Crédito</button>
              <button type="button" className="bg-antiflashwhite border border-davysgray px-4 py-2 rounded-md">Débito</button>
            </div>

            {/* Botão Confirmar */}
            <div className="mt-6">
              <button type="submit" className="bg-green-500 text-white w-full py-3 rounded-md hover:bg-green-600">
                Confirmar
              </button>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default CadastrarCorrida;
