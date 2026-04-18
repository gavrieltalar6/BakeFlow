import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Character from "./components/Character/Character";
import Workflow from "./components/Workflow/Workflow";
import Reviews from "./components/Reviews/Reviews";
import Pricing from "./components/Pricing/Pricing";
import Articles from "./components/Articles/Articles";
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
        <Features />
        <Character />
        <Workflow />
        <Reviews />
        <Pricing />
        <Articles />
        <Contact />
      </main>
        <Footer />
    </div>
  );  
}
export default App;
