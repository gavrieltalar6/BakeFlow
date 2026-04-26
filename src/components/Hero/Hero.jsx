import "./Hero.css";
import cakeLeft from "../../assets/images/cake1.png";
import cakeRight from "../../assets/images/cake2.png";
import { useState, useEffect, useMemo, useRef } from "react";
import { FiBox, FiMousePointer, FiCloud, FiPieChart } from "react-icons/fi";

function TypingText({ text, speed = 50, className }) {
  const [displayed, setDisplayed] = useState("P");

  useEffect(() => {
    setDisplayed("P");
    let i = 1;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className} style={{ minHeight: "1em", display: "inline-block" }}>
      {displayed}
    </span>
  );
}

function Hero() {
  const stars = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 12 + 6}px`,
      delay: `${Math.random() * 3}s`,
      duration: `${Math.random() * 2 + 1.5}s`,
    }))
  , []);

  const featuresRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!featuresRef.current) return;

      const rect = featuresRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = 1 - rect.bottom / (windowHeight + rect.height);
      const clamped = Math.min(Math.max(progress, 0), 1);
      const count = Math.floor((clamped * 4) / 0.7);
      setVisibleCount(Math.min(count, 4));
    };

    document.body.addEventListener("scroll", handleScroll);
    return () => document.body.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      {stars.map((star) => (
        <div
          key={star.id}
          className="sparkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      <img src={cakeLeft} alt="cake" className="hero-cake left" />
      <img src={cakeRight} alt="cake" className="hero-cake right" />

      <div className="hero-content">
        <h1>
          RUN YOUR BAKERY WITH
          <br />
          <TypingText className="precision" text="PRECISION." speed={100} />
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

      <div className="hero-features" ref={featuresRef}>
        {[
          { icon: <FiBox />, label: "Live Inventory Tracking" },
          { icon: <FiMousePointer />, label: "Online Ordering Systems" },
          { icon: <FiCloud />, label: "Centralized Online Orders" },
          { icon: <FiPieChart />, label: "Real Time Sales Report" },
        ].map((item, index) => (
          <div
            key={index}
            className={`feature-item ${index < visibleCount ? "feature-visible" : "feature-hidden"}`}
          >
            {item.icon}
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero; 