const styles = `
  .article3-page {
    min-height: 100vh;
    background-color: #ffffff;
    padding-top: 80px;
    font-family: 'Delius Swash Caps', cursive;
    color: #333333;
  }

  /* Hero Banner */
  .article3-hero {
    background: linear-gradient(135deg, #ffb3c6 0%, #ffd5e3 50%, #fff5f8 100%);
    padding: 80px 5% 60px;
    position: relative;
    overflow: hidden;
  }

  .article3-hero::before {
    content: '';
    position: absolute;
    top: -60px;
    left: -40px;
    width: 260px;
    height: 260px;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 50%;
  }

  .article3-hero::after {
    content: '';
    position: absolute;
    bottom: -70px;
    right: 15%;
    width: 220px;
    height: 220px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
  }

  .article3-category {
    display: inline-block;
    background: rgba(255, 255, 255, 0.4);
    color: #ffffff;
    font-size: 13px;
    font-family: 'Delius Unicase', cursive;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 6px 18px;
    border-radius: 20px;
    margin-bottom: 24px;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  .article3-title {
    font-family: 'Delius Unicase', cursive;
    font-size: clamp(28px, 5vw, 52px);
    color: #ffffff;
    line-height: 1.2;
    max-width: 700px;
    margin-bottom: 20px;
    text-shadow: 0 2px 20px rgba(255, 119, 165, 0.3);
  }

  .article3-meta {
    display: flex;
    align-items: center;
    gap: 20px;
    color: rgba(255, 255, 255, 0.85);
    font-size: 14px;
    flex-wrap: wrap;
  }

  /* Content Area */
  .article3-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 5%;
  }

  .article3-intro {
    font-size: 18px;
    line-height: 1.9;
    color: #555;
    margin-bottom: 50px;
    padding: 28px 32px;
    background: #fff8fb;
    border-left: 4px solid #ff77a5;
    border-radius: 0 16px 16px 0;
  }

  /* Section */
  .article3-section {
    margin-bottom: 56px;
  }

  .article3-section-title {
    font-family: 'Delius Unicase', cursive;
    font-size: 22px;
    color: #ff77a5;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .article3-section-title::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #ff77a5;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .article3-section p {
    font-size: 16px;
    line-height: 1.9;
    color: #555;
    margin-bottom: 16px;
  }

  /* Highlight Box */
  .article3-highlight {
    background: linear-gradient(135deg, #ffd5e3 0%, #fff0f5 100%);
    border-radius: 20px;
    padding: 32px;
    margin: 32px 0;
  }

  .article3-highlight h4 {
    font-family: 'Delius Unicase', cursive;
    font-size: 16px;
    color: #ff77a5;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .article3-highlight ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .article3-highlight ul li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 15px;
    color: #555;
    line-height: 1.7;
  }

  .article3-highlight ul li::before {
    content: '🎂';
    flex-shrink: 0;
    font-size: 16px;
    margin-top: 2px;
  }

  /* Steps / Timeline */
  .article3-steps {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 40px 0;
    position: relative;
  }

  .article3-steps::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #ff77a5, #ffd5e3);
  }

  .article3-step {
    display: flex;
    gap: 24px;
    padding: 0 0 32px 0;
    position: relative;
  }

  .article3-step:last-child {
    padding-bottom: 0;
  }

  .article3-step-dot {
    width: 42px;
    height: 42px;
    background: #ff77a5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    box-shadow: 0 0 0 4px #fff, 0 0 0 6px #ffd5e3;
  }

  .article3-step-body {
    padding-top: 8px;
    flex: 1;
  }

  .article3-step-body h4 {
    font-family: 'Delius Unicase', cursive;
    font-size: 16px;
    color: #ff77a5;
    margin-bottom: 8px;
  }

  .article3-step-body p {
    font-size: 15px;
    color: #666;
    line-height: 1.7;
    margin: 0;
  }

  /* Stats Row */
  .article3-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 40px 0;
  }

  .article3-stat-card {
    background: #fff8fb;
    border: 2px solid #ffd5e3;
    border-radius: 16px;
    padding: 24px 16px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .article3-stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(255, 119, 165, 0.15);
  }

  .article3-stat-number {
    font-family: 'Delius Unicase', cursive;
    font-size: 32px;
    color: #ff77a5;
    display: block;
    margin-bottom: 8px;
  }

  .article3-stat-label {
    font-size: 13px;
    color: #888;
    line-height: 1.5;
  }

  /* Divider */
  .article3-divider {
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, #ff77a5, #ffd5e3);
    border-radius: 2px;
    margin: 48px auto;
  }

  /* Quote */
  .article3-quote {
    border-left: 4px solid #ff77a5;
    padding: 20px 28px;
    margin: 32px 0;
    background: #fff8fb;
    border-radius: 0 16px 16px 0;
  }

  .article3-quote p {
    font-size: 17px;
    font-style: italic;
    color: #666;
    line-height: 1.8;
    margin: 0;
  }

  /* Conclusion */
  .article3-conclusion {
    background: linear-gradient(135deg, #ff77a5 0%, #ff99bb 100%);
    border-radius: 24px;
    padding: 40px;
    text-align: center;
    color: white;
    margin-top: 60px;
  }

  .article3-conclusion h3 {
    font-family: 'Delius Unicase', cursive;
    font-size: 22px;
    color: white;
    margin-bottom: 16px;
  }

  .article3-conclusion p {
    font-size: 16px;
    line-height: 1.8;
    opacity: 0.9;
    max-width: 500px;
    margin: 0 auto 28px;
  }

  .article3-cta-btn {
    display: inline-block;
    background: white;
    color: #ff77a5;
    font-family: 'Delius Unicase', cursive;
    font-size: 15px;
    padding: 14px 36px;
    border-radius: 30px;
    border: none;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    text-decoration: none;
  }

  .article3-cta-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  /* Back Button */
  .article3-back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #ff77a5;
    font-size: 14px;
    cursor: pointer;
    margin-bottom: 32px;
    transition: gap 0.2s ease;
    background: none;
    border: none;
    font-family: 'Delius Swash Caps', cursive;
    padding: 0;
  }

  .article3-back:hover {
    gap: 12px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .article3-stats {
      grid-template-columns: 1fr;
    }

    .article3-hero {
      padding: 60px 5% 40px;
    }

    .article3-conclusion {
      padding: 28px 20px;
    }
  }
`;

function Article3() {
  return (
    <>
      <style>{styles}</style>
      <div className="article3-page">
        {/* Hero */}
        <div className="article3-hero">
          <div className="article3-category">🏪 Business Growth</div>
          <h1 className="article3-title">Scaling Your Bakery Business</h1>
          <div className="article3-meta">
            <span>🗓 April 2025</span>
            <span>⏱ 7 min read</span>
            <span>🍰 BakeFlow Team</span>
          </div>
        </div>

        {/* Content */}
        <div className="article3-content">
          <button
            className="article3-back"
            onClick={() => window.history.back()}
          >
            ← Kembali
          </button>

          {/* Intro */}
          <p className="article3-intro">
            Dari satu toko kecil yang penuh cinta hingga jaringan bakery dengan
            banyak cabang — perjalanan itu nyata dan bisa dicapai. BakeFlow
            hadir untuk memastikan setiap langkah ekspansi Anda berjalan lancar,
            efisien, dan berbasis data yang solid.
          </p>

          {/* Section 1 */}
          <div className="article3-section">
            <h2 className="article3-section-title">
              Tantangan Mengelola Banyak Cabang
            </h2>
            <p>
              Ketika bisnis berkembang dari satu outlet menjadi beberapa cabang,
              kompleksitas operasional meningkat drastis. Stok di satu cabang
              bisa habis sementara cabang lain kelebihan. Performa penjualan
              tiap outlet sulit dipantau secara bersamaan tanpa sistem yang
              tepat.
            </p>
            <p>
              Inilah mengapa banyak bakery yang sukses di satu cabang kesulitan
              ketika mencoba ekspansi — mereka tidak punya sistem yang bisa
              tumbuh bersama bisnis mereka.
            </p>

            <div className="article3-highlight">
              <h4>Masalah umum tanpa sistem terpusat</h4>
              <ul>
                <li>
                  Stok tidak sinkron antar cabang sehingga sering terjadi
                  kekurangan atau kelebihan
                </li>
                <li>
                  Laporan penjualan tiap outlet harus dikompilasi manual setiap
                  hari
                </li>
                <li>
                  Sulit membandingkan performa antar cabang secara real-time
                </li>
                <li>
                  Keputusan bisnis diambil berdasarkan intuisi bukan data aktual
                </li>
              </ul>
            </div>
          </div>

          <div className="article3-divider" />

          {/* Section 2 — Steps */}
          <div className="article3-section">
            <h2 className="article3-section-title">
              Bagaimana BakeFlow Membantu Scaling
            </h2>
            <p>
              BakeFlow dirancang untuk tumbuh bersama bisnis Anda. Mulai dari
              satu outlet hingga puluhan cabang, semua bisa dikelola dari satu
              dashboard terpusat.
            </p>

            <div className="article3-steps">
              <div className="article3-step">
                <div className="article3-step-dot">🏪</div>
                <div className="article3-step-body">
                  <h4>Satu Dashboard, Semua Cabang</h4>
                  <p>
                    Pantau penjualan, stok, dan performa semua outlet secara
                    real-time dari satu tampilan yang bersih dan intuitif.
                  </p>
                </div>
              </div>
              <div className="article3-step">
                <div className="article3-step-dot">📦</div>
                <div className="article3-step-body">
                  <h4>Manajemen Stok Terpusat</h4>
                  <p>
                    Stok setiap cabang dikelola secara otomatis. Transfer stok
                    antar outlet bisa dilakukan dengan mudah ketika ada
                    ketidakseimbangan.
                  </p>
                </div>
              </div>
              <div className="article3-step">
                <div className="article3-step-dot">📊</div>
                <div className="article3-step-body">
                  <h4>Laporan Performa Per Outlet</h4>
                  <p>
                    Bandingkan revenue, efisiensi, dan tren penjualan antar
                    cabang untuk mengetahui mana yang perlu perhatian lebih.
                  </p>
                </div>
              </div>
              <div className="article3-step">
                <div className="article3-step-dot">🎯</div>
                <div className="article3-step-body">
                  <h4>Keputusan Berbasis Data</h4>
                  <p>
                    Setiap keputusan ekspansi — dari lokasi cabang baru hingga
                    menu yang akan diluncurkan — didukung oleh data nyata dari
                    lapangan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="article3-stats">
            <div className="article3-stat-card">
              <span className="article3-stat-number">10x</span>
              <span className="article3-stat-label">
                Lebih mudah kelola banyak cabang sekaligus
              </span>
            </div>
            <div className="article3-stat-card">
              <span className="article3-stat-number">60%</span>
              <span className="article3-stat-label">
                Pengurangan waktu pelaporan manual harian
              </span>
            </div>
            <div className="article3-stat-card">
              <span className="article3-stat-number">∞</span>
              <span className="article3-stat-label">
                Jumlah outlet yang bisa dikelola dalam satu akun
              </span>
            </div>
          </div>

          <div className="article3-divider" />

          {/* Section 3 */}
          <div className="article3-section">
            <h2 className="article3-section-title">
              Mengambil Keputusan Berbasis Data
            </h2>
            <p>
              BakeFlow mengubah data operasional sehari-hari menjadi insight
              yang bisa langsung ditindaklanjuti. Anda tidak perlu menjadi ahli
              data untuk memahami laporan BakeFlow — semuanya disajikan dengan
              visual yang jelas dan rekomendasi yang actionable.
            </p>

            <div className="article3-quote">
              <p>
                "Ekspansi bukan soal keberanian semata — tapi soal kesiapan
                sistem. Dengan data yang tepat, setiap keputusan menjadi lebih
                terukur dan risiko menjadi lebih terkendali."
              </p>
            </div>

            <div className="article3-highlight">
              <h4>Insight yang tersedia di BakeFlow</h4>
              <ul>
                <li>Cabang mana yang paling menguntungkan dan mengapa</li>
                <li>
                  Produk terlaris di tiap area yang berbeda secara demografis
                </li>
                <li>
                  Waktu terbaik untuk membuka cabang baru berdasarkan tren pasar
                </li>
                <li>
                  Efisiensi operasional tiap outlet dibandingkan benchmark
                  industri
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="article3-conclusion">
            <h3>Siap Bawa Bakery Anda ke Level Berikutnya?</h3>
            <p>
              Mulai dengan satu outlet, scale ke puluhan cabang. BakeFlow tumbuh
              bersama bisnis Anda setiap langkahnya.
            </p>
            <a href="#pricing" className="article3-cta-btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article3;
