import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import DesignSys from "./pages/DesignSys.jsx";
import ScrollToTop from './components/ScrollToTop.jsx';
import Article1 from "./pages/Article1";
import Article2 from "./pages/Article2";
import Article3 from "./pages/Article3";
import Team from "./pages/Team";
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
          <Route path="/article/1" element={<Article1 />} />
          <Route path="/article/2" element={<Article2 />} />
          <Route path="/article/3" element={<Article3 />} />
          <Route path="/our-team" element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );  
}

export default App;