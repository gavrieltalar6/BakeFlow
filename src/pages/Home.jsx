import Hero from "../components/Hero/Hero";
import Features from "../components/Features/Features";
import Character from "../components/Character/Character";
import Workflow from "../components/Workflow/Workflow";
import Reviews from "../components/Reviews/Reviews";
import Pricing from "../components/Pricing/Pricing";
import Articles from "../components/Articles/Articles";
import Contact from "../components/Contact/Contact";

function Home() {
  return (
    <>
        <Hero />
        <Features />
        <Character />
        <Workflow />
        <Reviews />
        <Pricing />
        <Articles />
        <Contact />
    </>
  );  
}
export default Home;
