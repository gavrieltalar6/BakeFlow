import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import DesignSys from "./pages/DesignSys.jsx";
import ScrollToTop from './components/ScrollToTop.jsx';
import "./App.css";

function App() {
  return (
    <div className="app">
      <ScrollToTop/>
      <Navbar /> 
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* Jalur ke halaman baru kamu */}
          <Route path="/design-system" element={<DesignSys />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );  
}

export default App;