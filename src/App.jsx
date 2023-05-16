import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Partidas from './pages/Partidas/Partidas';
import Times from './pages/Times/Times';
import Jogadores from './pages/Jogadores/Jogadores';
import Home from './pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='container'>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/partidas' element={<Partidas />} />
          <Route path='/times' element={<Times />} />
          <Route path='/jogadores' element={<Jogadores />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
