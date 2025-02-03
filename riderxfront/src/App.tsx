// App.tsx
import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Cadastrarform from './components/cadastrar/Cadastrarform';
import LoginForm from './components/login/Loginform';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <main className='min-h-screen'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastrarform />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
