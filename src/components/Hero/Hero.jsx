import "./Hero.css";
import cakeLeft from "../../assets/images/cake1.png";
import cakeRight from "../../assets/images/cake2.png";

import { FiBox, FiMousePointer, FiCloud, FiPieChart } from "react-icons/fi";

function Hero() {
  return (
    <section className="hero" id="hero">
      <img src={cakeLeft} alt="cake" className="hero-cake left" />
      <img src={cakeRight} alt="cake" className="hero-cake right" />

      <div className="hero-content">
        <h1>
          RUN YOUR BAKERY WITH
          <br />
          <span className="precision">PRECISION.</span>
        </h1>

        <p>
          The system that turns chaos into order. Manage inventory, orders, and
          sales from one clean interface. Built for bakers who want to focus on
          what matters.
        </p>

        <button
          className="hero-btn"
          onClick={() => {
            const el = document.getElementById("pricing");
            if (el) {
              const offset = 80;
              const top =
                el.getBoundingClientRect().top +
                document.body.scrollTop -
                offset;
              document.body.scrollTo({ top, behavior: "smooth" });
            }
          }}
        >
          Get Started
        </button>
      </div>

      {/* Feature icons */}
      <div className="hero-features">
        <div className="feature-item">
          <FiBox />
          <p>Live Inventory Tracking</p>
        </div>

        <div className="feature-item">
          <FiMousePointer />
          <p>Online Ordering Systems</p>
        </div>

        <div className="feature-item">
          <FiCloud />
          <p>Centralized Online Orders</p>
        </div>

        <div className="feature-item">
          <FiPieChart />
          <p>Real Time Sales Report</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
