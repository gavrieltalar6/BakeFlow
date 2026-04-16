import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Character from "./components/Character/Character";
import Features from "./components/Features/Features";
import Solutions from "./components/Solutions/Solutions";
import Reviews from "./components/Reviews/Reviews";
import Workflow from "./components/Workflow/Workflow";
import Pricing from "./components/Pricing/Pricing";
import Designs from "./components/Designs/Designs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Character />
        <Features />
        <Solutions />
        <Reviews />
        <Workflow />
        <Pricing />
        <Designs />
        <Contact />
      </main>
        <Footer />
    </div>
  );  
}
export default App;
