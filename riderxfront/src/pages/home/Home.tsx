import homeimg from "../src/assets/image/homeimg.png";

function Home() {
  return (
      <>

          <div className="bg-[#C2D3DA] flex justify-center items-center h-screen p-10">
              <div className='container grid grid-cols-2 items-center'>
                  {/* Texto */}
                  <div className="flex flex-col gap-4">
                      <h2 className='text-5xl font-nunito font-bold text-gray-900'>
                          Transforme sua Jornada, compartilhe o caminho
                      </h2>
                      <p className='text-lg font-merriweather text-gray-700'>
                      Cada viagem é uma oportunidade de economizar e colaborar.
                       Compartilhe o trajeto, 
                      divida o custo e faça parte de uma mobilidade mais inteligente e sustentável
                      </p>
                      <button
            
            className="font-nunito mt-6 px-4 py-1 bg-[#585A56] hover:bg-[#272424]
             text-white rounded-lg shadow-lg transition mx-auto opacity-70"
          >
          Entre para a RiderX
          </button>
                  </div>

                  {/* Imagem */}
                  <div className="flex justify-center relative">
                      <img src = "..\src\assets\image\homeimg.png" alt="Passageira entrando no carro" className='w-3/4' />
                  </div>
              </div>
          </div>
      </>
  )
}

export default Home;
