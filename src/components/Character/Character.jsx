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
      const deltaPixel = currentX - lastX;

      if (deltaPixel > 2) setDirection("right");
      else if (deltaPixel < -2) setDirection("left");

      setOffsetX((prev) => {
        const containerWidth = window.innerWidth;
        const deltaPercent = (deltaPixel / containerWidth) * 100;
        const limit = 80;

        let next = prev + deltaPercent * 3;
        if (next > limit) next = limit;

        if (next < -limit) next = -limit;
        return next;

      });



      lastX = currentX;
      clearTimeout(timeout);
      timeout = setTimeout(() => setDirection("center"), 120);
    };

    // --- scroll (mobile) ---
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / maxScroll) * 100;
      const target = (scrollPercent / 100) * 160 - 80;
      const deltaScroll = scrollY - lastScrollY;
      if (deltaScroll > 0) setDirection("right");
      else if (deltaScroll < 0) setDirection("left");
      setOffsetX(target);
      lastScrollY = scrollY;
      clearTimeout(timeout);
      timeout = setTimeout(() => setDirection("center"), 120);
    };



    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
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
          transform: `translateX(calc(-50% + ${offsetX}%))`,
        }}

      />

    </section>

  );

}

export default Character;