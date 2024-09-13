import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/simple/MainLayout'; // Layout principal
import About from './components/simple/About';
import Services from './components/simple/Services';
import Contact from './components/simple/Contact';
import MainPage from './components/simple/MainPage';
import DescargaOrgana from './components/simple/Descarga'; // Importa tu nuevo componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><MainPage /></MainLayout>} />
        <Route path="/about" element={<MainLayout><About /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
        <Route path="/download" element={<MainLayout><DescargaOrgana /></MainLayout>} />
        </Routes>
    </Router>
  );
}

export default App;
