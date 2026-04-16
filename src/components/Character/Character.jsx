import { useState, useEffect } from "react";
import { data } from "../../data/Data";
import "./Character.css";
import bg from "../../assets/images/cashier-background.png";
import front from "../../assets/images/cashier-foreground.png";
import charLeft from "../../assets/images/cat-left.png";
import charFront from "../../assets/images/cat-front.png";
import charRight from "../../assets/images/cat-right.png";

function Character() {
  const [offsetX, setOffsetX] = useState(0);
  const [direction, setDirection] = useState("center");

  useEffect(() => {
    let lastX = window.innerWidth / 2;
    let timeout;

    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const delta = currentX - lastX;

      // 👉 arah gerakan
      if (delta > 2) {
        setDirection("right");
      } else if (delta < -2) {
        setDirection("left");
      }

      // 👉 gerakan karakter (ngejar cursor)
      setOffsetX((prev) => {
        let next = prev + delta * 0.3;

        // batasi biar gak kabur
        const limit = 150;
        if (next > limit) next = limit;
        if (next < -limit) next = -limit;

        return next;
      });

      lastX = currentX;

      // 👉 kalau mouse berhenti → balik ke depan
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setDirection("center");
      }, 120);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getCharacter = () => {
    if (direction === "left") return charLeft;
    if (direction === "right") return charRight;
    return charFront;
  };

  return (
    <section className="interactive">
      {/* background */}
      <img src={bg} className="layer bg" />

      {/* foreground */}
      <img src={front} className="layer front" />

      {/* character */}
      <img
        src={getCharacter()}
        className="character"
        style={{
          transform: `translateX(calc(-50% + ${offsetX}px))`,
        }}
      />
    </section>
  );
}
export default Character;
