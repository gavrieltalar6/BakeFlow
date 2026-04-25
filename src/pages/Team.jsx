import React from "react";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Alvaro",
      role: "Frontend Dev",
      desc: "Menyusun tampilan antarmuka yang renyah dan responsif untuk pengguna.",
      git: "alvarorahardjo-axr"
    },
    {
      id: 2,
      name: "Gavriel",
      role: "Project Leader",
      desc: "Dirigen utama yang memastikan seluruh resep proyek matang tepat waktu.",
      git: "gavrieltalar6"
    },
    {
      id: 3,
      name: "Gilbert",
      role: "UI/UX Designer",
      desc: "Meracik pengalaman visual yang manis, bulat, dan nyaman di mata.",
      git: "gibekss23-sketch"
    },
    {
      id: 4,
      name: "Gyan",
      role: "Frontend Dev",
      desc: "Mengolah kode visual menjadi elemen interaktif yang selembut adonan roti.",
      git: "Ryllex23"
    },
    {
      id: 5,
      name: "Jason",
      role: "UI/UX Designer",
      desc: "Arsitek estetika yang memastikan setiap sudut desain tampil pulen dan cantik.",
      git: "Jsnnfbb"
    },
    {
      id: 6,
      name: "Willy",
      role: "Quality Assurance",
      desc: "Pencicip kualitas yang memastikan sistem bebas bug dan matang sempurna.",
      git: "WilllTzy"
    },
  ];

  return (
    <section style={styles.container}>
      {/* Dekorasi Latar Belakang (Soft & Round) */}
      <div style={styles.decorativeCircle1}></div>
      <div style={styles.decorativeCircle2}></div>
      <div style={styles.decorativeCircle3}></div>

      <div style={styles.content}>
        <h1 style={styles.title}>Meet Our Team</h1>
        <p style={styles.subtitle}>
          Wajah-wajah kreatif di balik sistem BakeFlow yang manis.
        </p>

        <div style={styles.grid}>
          {teamMembers.map((member) => (
            <div key={member.id} style={styles.card}>
    
              <h2 style={styles.memberName}>{member.name}</h2>
              <span style={styles.roleTag}>{member.role}</span>
              <p style={styles.memberDesc}>{member.desc}</p>
              <p style={styles.memberGit}>@{member.git}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: "120px 20px 80px",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    fontFamily: "'Delius Swash Caps', cursive",
  },
  content: {
    width: "100%",
    maxWidth: "1200px", // Sedikit diperlebar untuk 6 orang
    margin: "0 auto",
    position: "relative",
    zIndex: 2,
    textAlign: "center",
  },
  title: {
    fontFamily: "'Delius Unicase', cursive",
    color: "#FF77A5",
    fontSize: "42px",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#666",
    marginBottom: "60px",
    fontSize: "18px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", // Otomatis menyesuaikan 3 atau 2 kolom
    gap: "40px 30px",
    justifyItems: "center",
  },
  card: {
    background: "#FFF8FB",
    border: "3px solid #FFD5E3",
    borderRadius: "40px",
    padding: "40px 30px",
    width: "100%",
    maxWidth: "320px",
    transition: "all 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "0 10px 25px rgba(255, 119, 165, 0.12)",
    cursor: "default",
  },
  imagePlaceholder: {
    width: "130px",
    height: "130px",
    backgroundColor: "#FFD5E3",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "25px",
    border: "5px solid white",
    boxShadow: "0 6px 15px rgba(255, 119, 165, 0.2)",
  },
  memberName: {
    fontFamily: "'Delius Unicase', cursive",
    fontSize: "24px",
    color: "#FF77A5",
    marginBottom: "8px",
  },
  roleTag: {
    backgroundColor: "#FF77A5",
    color: "white",
    padding: "6px 18px",
    borderRadius: "25px",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    marginBottom: "20px",
    fontWeight: "bold",
  },
  memberDesc: {
    fontSize: "15px",
    color: "#555",
    lineHeight: "1.6",
    margin: 0,
  },
  memberGit: {
    fontSize: "15px",
    color: "#FF77A5",
    lineHeight: "1.6",
    margin: "10px",
  },
  // Efek Dekorasi Lingkaran
  decorativeCircle1: {
    position: "absolute",
    top: "-80px",
    right: "-80px",
    width: "350px",
    height: "350px",
    borderRadius: "50%",
    background: "#FFD5E3",
    opacity: 0.4,
    zIndex: 1,
  },
  decorativeCircle2: {
    position: "absolute",
    bottom: "5%",
    left: "-100px",
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    background: "#FFD5E3",
    opacity: 0.3,
    zIndex: 1,
  },
  decorativeCircle3: {
    position: "absolute",
    top: "40%",
    right: "5%",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    background: "#FFF0F5",
    opacity: 0.6,
    zIndex: 1,
  },
};

export default OurTeam;