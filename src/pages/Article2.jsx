const styles = `
  .article2-page {
    min-height: 100vh;
    background-color: #ffffff;
    padding-top: 80px;
    font-family: 'Delius Swash Caps', cursive;
    color: #333333;
  }

  /* Hero Banner */
  .article2-hero {
    background: linear-gradient(135deg, #ff99bb 0%, #ffc2d4 50%, #fff0f5 100%);
    padding: 80px 5% 60px;
    position: relative;
    overflow: hidden;
  }

  .article2-hero::before {
    content: '';
    position: absolute;
    top: -80px;
    right: 5%;
    width: 280px;
    height: 280px;
    background: rgba(255, 255, 255, 0.12);
    border-radius: 50%;
  }

  .article2-hero::after {
    content: '';
    position: absolute;
    bottom: -60px;
    left: 20%;
    width: 180px;
    height: 180px;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 50%;
  }

  .article2-category {
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

  .article2-title {
    font-family: 'Delius Unicase', cursive;
    font-size: clamp(28px, 5vw, 52px);
    color: #ffffff;
    line-height: 1.2;
    max-width: 700px;
    margin-bottom: 20px;
    text-shadow: 0 2px 20px rgba(255, 119, 165, 0.3);
  }

  .article2-meta {
    display: flex;
    align-items: center;
    gap: 20px;
    color: rgba(255, 255, 255, 0.85);
    font-size: 14px;
    flex-wrap: wrap;
  }

  /* Content Area */
  .article2-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 5%;
  }

  .article2-intro {
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
  .article2-section {
    margin-bottom: 56px;
  }

  .article2-section-title {
    font-family: 'Delius Unicase', cursive;
    font-size: 22px;
    color: #ff77a5;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .article2-section-title::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #ff77a5;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .article2-section p {
    font-size: 16px;
    line-height: 1.9;
    color: #555;
    margin-bottom: 16px;
  }

  /* Highlight Box */
  .article2-highlight {
    background: linear-gradient(135deg, #ffd5e3 0%, #fff0f5 100%);
    border-radius: 20px;
    padding: 32px;
    margin: 32px 0;
  }

  .article2-highlight h4 {
    font-family: 'Delius Unicase', cursive;
    font-size: 16px;
    color: #ff77a5;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .article2-highlight ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .article2-highlight ul li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 15px;
    color: #555;
    line-height: 1.7;
  }

  .article2-highlight ul li::before {
    content: '🌸';
    flex-shrink: 0;
    font-size: 16px;
    margin-top: 2px;
  }

  /* Trend Cards */
  .article2-trend-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 40px 0;
  }

  .article2-trend-card {
    background: #fff8fb;
    border: 2px solid #ffd5e3;
    border-radius: 16px;
    padding: 24px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .article2-trend-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(255, 119, 165, 0.15);
  }

  .article2-trend-icon {
    font-size: 28px;
    margin-bottom: 12px;
    display: block;
  }

  .article2-trend-card h4 {
    font-family: 'Delius Unicase', cursive;
    font-size: 15px;
    color: #ff77a5;
    margin-bottom: 8px;
  }

  .article2-trend-card p {
    font-size: 14px;
    color: #777;
    line-height: 1.7;
    margin: 0;
  }

  /* Stats Row */
  .article2-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 40px 0;
  }

  .article2-stat-card {
    background: #fff8fb;
    border: 2px solid #ffd5e3;
    border-radius: 16px;
    padding: 24px 16px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .article2-stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(255, 119, 165, 0.15);
  }

  .article2-stat-number {
    font-family: 'Delius Unicase', cursive;
    font-size: 32px;
    color: #ff77a5;
    display: block;
    margin-bottom: 8px;
  }

  .article2-stat-label {
    font-size: 13px;
    color: #888;
    line-height: 1.5;
  }

  /* Divider */
  .article2-divider {
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, #ff77a5, #ffd5e3);
    border-radius: 2px;
    margin: 48px auto;
  }

  /* Quote */
  .article2-quote {
    border-left: 4px solid #ff77a5;
    padding: 20px 28px;
    margin: 32px 0;
    background: #fff8fb;
    border-radius: 0 16px 16px 0;
  }

  .article2-quote p {
    font-size: 17px;
    font-style: italic;
    color: #666;
    line-height: 1.8;
    margin: 0;
  }

  /* Conclusion */
  .article2-conclusion {
    background: linear-gradient(135deg, #ff77a5 0%, #ff99bb 100%);
    border-radius: 24px;
    padding: 40px;
    text-align: center;
    color: white;
    margin-top: 60px;
  }

  .article2-conclusion h3 {
    font-family: 'Delius Unicase', cursive;
    font-size: 22px;
    color: white;
    margin-bottom: 16px;
  }

  .article2-conclusion p {
    font-size: 16px;
    line-height: 1.8;
    opacity: 0.9;
    max-width: 500px;
    margin: 0 auto 28px;
  }

  .article2-cta-btn {
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

  .article2-cta-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  /* Back Button */
  .article2-back {
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

  .article2-back:hover {
    gap: 12px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .article2-stats {
      grid-template-columns: 1fr;
    }

    .article2-trend-grid {
      grid-template-columns: 1fr;
    }

    .article2-hero {
      padding: 60px 5% 40px;
    }

    .article2-conclusion {
      padding: 28px 20px;
    }
  }
`;

function Article2() {
  return (
    <>
      <style>{styles}</style>
      <div className="article2-page">
        {/* Hero */}
        <div className="article2-hero">
          <div className="article2-category">📈 Trend & Forecasting</div>
          <h1 className="article2-title">Predicting the Big Trends</h1>
          <div className="article2-meta">
            <span>🗓 April 2025</span>
            <span>⏱ 6 min read</span>
            <span>🍰 BakeFlow Team</span>
          </div>
        </div>

        {/* Content */}
        <div className="article2-content">
          <button
            className="article2-back"
            onClick={() => window.history.back()}
          >
            ← Kembali
          </button>

          {/* Intro */}
          <p className="article2-intro">
            Di industri bakery yang kompetitif, selangkah lebih maju bisa
            berarti perbedaan antara produk yang habis terjual dan produk yang
            terbuang. BakeFlow menganalisis data penjualan harian Anda untuk
            membantu memprediksi tren pasar sebelum tren itu benar-benar
            terjadi.
          </p>

          {/* Section 1 */}
          <div className="article2-section">
            <h2 className="article2-section-title">
              Bagaimana BakeFlow Membaca Tren
            </h2>
            <p>
              BakeFlow mengumpulkan dan menganalisis data penjualan setiap hari
              — dari jam berapa produk paling banyak dibeli, hingga produk mana
              yang permintaannya meningkat menjelang akhir pekan atau hari
              libur.
            </p>
            <p>
              Dengan pola yang terbentuk dari data historis ini, sistem dapat
              memberikan prediksi yang akurat tentang apa yang akan laris dijual
              dalam beberapa hari atau minggu ke depan.
            </p>

            <div className="article2-highlight">
              <h4>Data yang dianalisis BakeFlow</h4>
              <ul>
                <li>
                  Volume penjualan harian per produk selama 30, 60, dan 90 hari
                  terakhir
                </li>
                <li>
                  Pola penjualan berdasarkan hari dalam seminggu dan musim
                </li>
                <li>
                  Korelasi antara promosi yang dijalankan dengan lonjakan
                  penjualan
                </li>
                <li>
                  Produk yang sering dibeli bersamaan oleh pelanggan yang sama
                </li>
              </ul>
            </div>
          </div>

          {/* Trend Cards */}
          <div className="article2-trend-grid">
            <div className="article2-trend-card">
              <span className="article2-trend-icon">📅</span>
              <h4>Tren Musiman</h4>
              <p>
                Deteksi lonjakan permintaan menjelang hari raya, Valentine, atau
                musim hujan secara otomatis.
              </p>
            </div>
            <div className="article2-trend-card">
              <span className="article2-trend-icon">🔥</span>
              <h4>Produk Viral</h4>
              <p>
                Identifikasi produk yang tiba-tiba naik daun sebelum stok habis
                dan permintaan tak terpenuhi.
              </p>
            </div>
            <div className="article2-trend-card">
              <span className="article2-trend-icon">📉</span>
              <h4>Penurunan Permintaan</h4>
              <p>
                Deteksi dini produk yang mulai kehilangan peminat agar bisa
                segera dievaluasi atau diganti.
              </p>
            </div>
            <div className="article2-trend-card">
              <span className="article2-trend-icon">💡</span>
              <h4>Peluang Baru</h4>
              <p>
                Temukan celah pasar berdasarkan permintaan pelanggan yang belum
                terpenuhi oleh menu saat ini.
              </p>
            </div>
          </div>

          <div className="article2-divider" />

          {/* Section 2 */}
          <div className="article2-section">
            <h2 className="article2-section-title">
              Selalu Selangkah Lebih Maju
            </h2>
            <p>
              Bayangkan Anda tahu seminggu sebelumnya bahwa croissant matcha
              akan sangat diminati menjelang long weekend. Anda bisa
              mempersiapkan bahan baku lebih awal, melatih staf, dan bahkan
              menjalankan promosi yang tepat sasaran.
            </p>

            <div className="article2-quote">
              <p>
                "Bisnis yang bertahan bukan yang paling kuat, melainkan yang
                paling cepat beradaptasi dengan perubahan — dan data adalah
                kunci adaptasi itu."
              </p>
            </div>

            <p>
              BakeFlow memungkinkan Anda bertindak berdasarkan data, bukan
              intuisi semata. Hasilnya adalah operasional yang lebih efisien,
              pelanggan yang lebih puas, dan keuntungan yang lebih konsisten.
            </p>
          </div>

          {/* Stats */}
          <div className="article2-stats">
            <div className="article2-stat-card">
              <span className="article2-stat-number">85%</span>
              <span className="article2-stat-label">
                Akurasi prediksi tren mingguan
              </span>
            </div>
            <div className="article2-stat-card">
              <span className="article2-stat-number">2x</span>
              <span className="article2-stat-label">
                Lebih cepat respons terhadap perubahan pasar
              </span>
            </div>
            <div className="article2-stat-card">
              <span className="article2-stat-number">30%</span>
              <span className="article2-stat-label">
                Peningkatan revenue dari produk unggulan
              </span>
            </div>
          </div>

          <div className="article2-divider" />

          {/* Section 3 */}
          <div className="article2-section">
            <h2 className="article2-section-title">
              Dari Data ke Keputusan Nyata
            </h2>
            <p>
              BakeFlow tidak hanya menampilkan grafik dan angka — sistem
              memberikan rekomendasi yang bisa langsung ditindaklanjuti. Mulai
              dari saran penambahan stok bahan tertentu, hingga rekomendasi
              produk yang perlu dipromosikan minggu depan.
            </p>
            <p>
              Semua ini tersedia dalam satu dashboard yang bersih dan mudah
              dipahami, bahkan bagi pemilik bakery yang tidak memiliki latar
              belakang analisis data.
            </p>

            <div className="article2-highlight">
              <h4>Rekomendasi otomatis dari BakeFlow</h4>
              <ul>
                <li>
                  Saran produk yang perlu diproduksi lebih banyak minggu depan
                </li>
                <li>
                  Bahan baku yang perlu dipesan lebih awal berdasarkan prediksi
                </li>
                <li>
                  Waktu terbaik untuk menjalankan promosi berdasarkan pola
                  trafik
                </li>
                <li>
                  Produk komplementer yang bisa di-bundle untuk meningkatkan
                  penjualan
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className="article2-conclusion">
            <h3>Mulai Prediksi Tren Bisnis Anda</h3>
            <p>
              Jangan tunggu tren berlalu. Gunakan BakeFlow dan jadilah bakery
              yang selalu siap menyambut setiap peluang pasar.
            </p>
            <a href="#pricing" className="article2-cta-btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article2;
