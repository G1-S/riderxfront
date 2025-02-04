
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Cadastrarform from './components/cadastrar/Cadastrarform';
import LoginForm from './components/login/Loginform';
import SobreNos from "./components/sobrenos/SobreNos";
import ListaCorridas from './components/corrida/listarcorridas/ListarCorridas';
import { AuthProvider } from './contexts/AuthContext';
import DeletarCorrida from "../src/components/corrida/deletarcorrida/DeletarCorrida"

const App: React.FC = () => {
  return (
    <>
    
      <AuthProvider>
        <BrowserRouter>
          <Navbar/>
          <main className='min-h-screen'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/cadastro" element={<Cadastrarform />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/sobrenos" element={<SobreNos/>} />
            <Route path="/viagem" element={<ListaCorridas/>}/>
            <Route path="/deletarcorrida/:id" element={<DeletarCorrida />} />
          </Routes>
          </main>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};


export default App;

