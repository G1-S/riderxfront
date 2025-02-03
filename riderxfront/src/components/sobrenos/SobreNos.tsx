const SobreNos = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-10" style={{ backgroundColor: '#F1F3F2' }}>
   
      <section className="flex flex-col items-center justify-center max-w-5xl w-full mt-10 mb-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sobre nós</h2>
        <p className="text-center text-gray-700 max-w-2xl mb-6">
        <strong>O RiderX nasceu para revolucionar a mobilidade urbana,
          oferecendo um serviço de caronas compartilhadas seguras e confortáveis</strong>.
        </p>
        <div className="relative flex justify-center w-full max-w-4xl">
          <div className="absolute top-[-20px] left-[-20px] w-16 h-16 bg-custom-blue"></div>
          <div className="absolute bottom-[-20px] right-[-20px] w-16 h-16 bg-custom-blue"></div>
          <img
            src="src/assets/img/Imagem.png"
            alt="Sobre Nós"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
        <p className="text-center text-gray-700 max-w-2xl mt-6">
          <strong> Nosso compromisso é conectar pessoas que precisam se locomover de forma prática,
          acessível e sustentável. Com um sistema eficiente e confortável, garantimos uma
          experiência tranquila para motoristas e passageiros.</strong>
        </p>
      </section>

   
      <section className="flex flex-col items-center justify-center max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Impactos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full max-w-4xl">
        
          <div className="relative flex justify-center">
            <div className="absolute top-[-20px] left-[-20px] w-16 h-16 bg-custom-blue"></div>
            <img
              src="src/assets/img/transito.png"
              alt="Trânsito"
              className="rounded-lg shadow-lg w-full object-cover max-w-sm"
            />
          </div>
        
          <p className="text-gray-800 font-semibold text-lg leading-relaxed break-words max-w-xl text-justify">
            bhcshdbvhsdjvhsjvdbfdbfkfmbkdfmbkdsdhsdasdjasdklajskjdsahjdaskhsakdljkajkdhasjhdjakjhdjkadhsajdhsajdhajskdha
            jdhsakjdhajkshdjkajhsjkdjahskjdjakshdkjasd
            <br /><br />
            vnsdvbsvdvsnivnsdbvsdvbsdbvnsdvncjlasbvclsdbvhlsdbvlsdbvlsdbvhlsdbvhl
            sdbvhlsdbvhlsdbvhlsdbvhlsdbvlsdbvhlsdbvhlsdbvhlsdbvhlsdbv
          </p>
        </div>
      </section>
    </div>
  );
};

export default SobreNos;
