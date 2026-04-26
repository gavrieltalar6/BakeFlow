const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Delius+Swash+Caps&family=Delius+Unicase:wght@400;700&display=swap');

  .article1-page {
    min-height: 100vh;
    background-color: #ffffff;
    padding-top: 80px;
    font-family: 'Delius Swash Caps', cursive;
    color: #333333;
  }

  /* Hero Banner */
  .article1-hero {
    background: linear-gradient(135deg, #ff77a5 0%, #ffd5e3 60%, #ffffff 100%);
    padding: 80px 5% 60px;
    position: relative;
    overflow: hidden;
  }

  .article1-hero::before {
    content: '';
    position: absolute;
    top: -60px;
    right: -60px;
    width: 300px;
    height: 300px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 50%;
  }

  .article1-hero::after {
    content: '';
    position: absolute;
    bottom: -80px;
    left: 10%;
    width: 200px;
    height: 200px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
  }

  .article1-category {
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

  .article1-title {
    font-family: 'Delius Unicase', cursive;
    font-size: clamp(28px, 5vw, 52px);
    color: #ffffff;
    line-height: 1.2;
    max-width: 700px;
    margin-bottom: 20px;
    text-shadow: 0 2px 20px rgba(255, 119, 165, 0.3);
  }

  .article1-meta {
    display: flex;
    align-items: center;
    gap: 20px;
    color: rgba(255, 255, 255, 0.85);
    font-size: 14px;
    flex-wrap: wrap;
  }

  .article1-meta span {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* Content Area */
  .article1-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 60px 5%;
  }

  .article1-intro {
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
  .article1-section {
    margin-bottom: 56px;
  }

  .article1-section-title {
    font-family: 'Delius Unicase', cursive;
    font-size: 22px;
    color: #ff77a5;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .article1-section-title::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #ff77a5;
    border-radius: 50%;
    flex-shrink: 0;
  }

  .article1-section p {
    font-size: 16px;
    line-height: 1.9;
    color: #555;
    margin-bottom: 16px;
  }

  /* Highlight Box */
  .article1-highlight {
    background: linear-gradient(135deg, #ffd5e3 0%, #fff0f5 100%);
    border-radius: 20px;
    padding: 32px;
    margin: 32px 0;
  }

  .article1-highlight h4 {
    font-family: 'Delius Unicase', cursive;
    font-size: 16px;
    color: #ff77a5;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .article1-highlight ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .article1-highlight ul li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 15px;
    color: #555;
    line-height: 1.7;
  }

  .article1-highlight ul li::before {
    content: '🍓';
    flex-shrink: 0;
    font-size: 16px;
    margin-top: 2px;
  }

  /* Stats Row */
  .article1-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 40px 0;
  }

  .article1-stat-card {
    background: #fff8fb;
    border: 2px solid #ffd5e3;
    border-radius: 16px;
    padding: 24px 16px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .article1-stat-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(255, 119, 165, 0.15);
  }

  .article1-stat-number {
    font-family: 'Delius Unicase', cursive;
    font-size: 32px;
    color: #ff77a5;
    display: block;
    margin-bottom: 8px;
  }

  .article1-stat-label {
    font-size: 13px;
    color: #888;
    line-height: 1.5;
  }

  /* Divider */
  .article1-divider {
    width: 60px;
    height: 4px;
    background: linear-gradient(to right, #ff77a5, #ffd5e3);
    border-radius: 2px;
    margin: 48px auto;
  }

  /* Conclusion */
  .article1-conclusion {
    background: linear-gradient(135deg, #ff77a5 0%, #ff99bb 100%);
    border-radius: 24px;
    padding: 40px;
    text-align: center;
    color: white;
    margin-top: 60px;
  }

  .article1-conclusion h3 {
    font-family: 'Delius Unicase', cursive;
    font-size: 22px;
    color: white;
    margin-bottom: 16px;
  }

  .article1-conclusion p {
    font-size: 16px;
    line-height: 1.8;
    opacity: 0.9;
    max-width: 500px;
    margin: 0 auto 28px;
  }

  .article1-cta-btn {
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

  .article1-cta-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  /* Back Button */
  .article1-back {
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

  .article1-back:hover {
    gap: 12px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .article1-stats {
      grid-template-columns: 1fr;
    }

    .article1-hero {
      padding: 60px 5% 40px;
    }

    .article1-conclusion {
      padding: 28px 20px;
    }
  }
`;

function Article1() {
  return (
    <>
      <style>{styles}</style>
      <div className="article1-page">
        {/* Hero */}
        <div className="article1-hero">
          <div className="article1-category">📊 Analytics & Insights</div>
          <h1 className="article1-title">Measuring of Baker Whiskers</h1>
          <div className="article1-meta">
            <span>🗓 April 2025</span>
            <span>⏱ 5 min read</span>
            <span>🍰 BakeFlow Team</span>
          </div>
        </div>

        {/* Content */}
        <div className="article1-content">
          <button
            className="article1-back"
            onClick={() => window.history.back()}
          >
            ← Kembali
          </button>

          {/* Intro */}
          <p className="article1-intro">
            Setiap bakery yang sukses bukan hanya pandai membuat kue — mereka
            tahu persis apa yang dijual, kapan menjualnya, dan berapa banyak
            yang dibutuhkan. BakeFlow hadir untuk mengubah data mentah menjadi
            keputusan cerdas yang menguntungkan bisnis Anda.
          </p>

          {/* Section 1 */}
          <div className="article1-section">
            <h2 className="article1-section-title">
              Identifikasi Produk Terlaris
            </h2>
            <p>
              Dengan dashboard penjualan BakeFlow, Anda dapat melihat secara
              real-time produk mana yang paling banyak dipesan. Tidak perlu lagi
              menebak-nebak — data berbicara langsung kepada Anda.
            </p>
            <p>
              Misalnya, jika croissant coklat selalu habis sebelum jam 10 pagi
              setiap Sabtu, BakeFlow akan mendeteksi pola ini dan menampilkannya
              sebagai insight yang bisa langsung ditindaklanjuti.
            </p>

            <div className="article1-highlight">
              <h4>Yang bisa Anda lihat di dashboard</h4>
              <ul>
                <li>
                  Produk dengan penjualan tertinggi per hari, minggu, dan bulan
                </li>
                <li>Perbandingan performa produk antar periode waktu</li>
                <li>
                  Waktu-waktu puncak penjualan untuk setiap kategori produk
                </li>
                <li>Produk yang jarang terjual dan perlu dievaluasi</li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="article1-stats">
            <div className="article1-stat-card">
              <span className="article1-stat-number">3x</span>
              <span className="article1-stat-label">
                Lebih cepat identifikasi produk terlaris
              </span>
            </div>
            <div className="article1-stat-card">
              <span className="article1-stat-number">40%</span>
              <span className="article1-stat-label">
                Pengurangan stok yang terbuang sia-sia
              </span>
            </div>
            <div className="article1-stat-card">
              <span className="article1-stat-number">98%</span>
              <span className="article1-stat-label">
                Akurasi laporan penjualan harian
              </span>
            </div>
          </div>

          <div className="article1-divider" />

          {/* Section 2 */}
          <div className="article1-section">
            <h2 className="article1-section-title">
              Merencanakan Stok Bahan Baku
            </h2>
            <p>
              Salah satu tantangan terbesar bakery adalah memastikan bahan baku
              tersedia tanpa harus memesan berlebihan. Dengan analisis tren
              penjualan BakeFlow, Anda bisa memprediksi kebutuhan bahan baku
              untuk hari-hari ke depan.
            </p>
            <p>
              Sistem akan secara otomatis mengurangi stok bahan baku setiap kali
              ada order masuk — sehingga Anda selalu tahu kapan harus memesan
              ulang sebelum kehabisan.
            </p>

            <div className="article1-highlight">
              <h4>Fitur manajemen stok BakeFlow</h4>
              <ul>
                <li>
                  Pengurangan stok otomatis berdasarkan resep setiap produk
                </li>
                <li>
                  Notifikasi ketika stok bahan baku mendekati batas minimum
                </li>
                <li>
                  Laporan kebutuhan bahan baku berdasarkan prediksi penjualan
                </li>
                <li>Riwayat penggunaan bahan untuk audit dan evaluasi</li>
              </ul>
            </div>
          </div>

          <div className="article1-divider" />

          {/* Section 3 */}
          <div className="article1-section">
            <h2 className="article1-section-title">
              Menyesuaikan Menu Secara Strategis
            </h2>
            <p>
              Data penjualan yang akurat memungkinkan Anda membuat keputusan
              menu yang lebih cerdas. Produk yang konsisten tidak laku bisa
              diganti atau dimodifikasi, sementara produk favorit bisa
              dipromosikan lebih agresif.
            </p>
            <p>
              BakeFlow juga membantu Anda menganalisis margin keuntungan per
              produk, sehingga Anda tidak hanya tahu apa yang laris — tapi juga
              apa yang paling menguntungkan untuk bisnis Anda.
            </p>
          </div>

          {/* Conclusion */}
          <div className="article1-conclusion">
            <h3>Siap Kelola Bakery Lebih Cerdas?</h3>
            <p>
              Mulai gunakan BakeFlow hari ini dan ubah data penjualan Anda
              menjadi keputusan bisnis yang menguntungkan.
            </p>
            <a href="#pricing" className="article1-cta-btn">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Article1;
