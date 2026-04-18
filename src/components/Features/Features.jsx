import { data } from '../../data/Data';
import "./Features.css";

import catLeft from "../../assets/images/cat-leftfitures.png";
import catMid from "../../assets/images/cat.midfitures.png";
import catRight from "../../assets/images/cat.rightfitures.png";
import sticker from "../../assets/images/stiker.fitures.png";

function Features() {
  const images = {
    "cat-leftfitures.png": catLeft,
    "cat.midfitures.png": catMid,
    "cat.rightfitures.png": catRight
  };

  return (
    <section className="features-section">
      <div className="features-header">
        <h2>TRACK STOCK IN REAL TIME</h2>
        <p>Know what you have before you run out. Track ingredients, finished goods, and expiration dates. The system alerts you when supplies get low.</p>
      </div>

      <div className="features-container">
        {data.map((item) => (
          <div key={item.id} className="feature-card">
            <img src={images[item.img]} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
      
      {/* Background Stickers */}
      <img src={sticker} className="bg-sticker s1" alt="" />
      <img src={sticker} className="bg-sticker s2" alt="" />
      <img src={sticker} className="bg-sticker s3" alt="" />
      <img src={sticker} className="bg-sticker s4" alt="" />
    </section>
  );
}

export default Features;