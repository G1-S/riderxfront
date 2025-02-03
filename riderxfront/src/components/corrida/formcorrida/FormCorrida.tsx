import React from "react";

const CadastrarCorrida = () => {
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
          <div className="space-y-4">
            <input type="text" placeholder="Origem" className="w-full p-3 border border-davysgray rounded-md" />
            <input type="text" placeholder="Destino" className="w-full p-3 border border-davysgray rounded-md" />
            <input type="number" placeholder="Vagas" className="w-full p-3 border border-davysgray rounded-md" />
            <input type="text" placeholder="Distância" className="w-full p-3 border border-davysgray rounded-md" />
          </div>

          {/* Botões de pagamento */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="bg-antiflashwhite border border-davysgray px-4 py-2 rounded-md">Crédito</button>
            <button className="bg-antiflashwhite border border-davysgray px-4 py-2 rounded-md">Débito</button>
          </div>

          {/* Botão Confirmar */}
          <div className="mt-6">
            <button className="bg-green-500 text-white w-full py-3 rounded-md hover:bg-green-600">
              Confirmar
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CadastrarCorrida;
