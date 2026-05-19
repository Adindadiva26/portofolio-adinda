import { useState, useEffect, useRef } from "react";
import { useForm } from '@formspree/react';

// ─── TRANSLATIONS ─────────────────────────────────────────────────────────────
const T = {
  en: {
    nav: ["Home", "About", "Projects", "Skills", "Contact"],
    available: "Available for work",
    greeting: "Hi, I'm",
    role: ["Web Developer", "QA Tester", "Problem Solver"],
    heroDesc: "Web developer passionate about building modern, responsive websites and ensuring quality through testing.",
    downloadCV: "Download CV",
    hireMe: "Hire Me",
    aboutLabel: "Who I Am",
    aboutTitle: "About Me",
    aboutHeading: "Web Developer & QA Tester",
    aboutP1: " Information Technology graduated experience in web development, AI system integration , and Quality Assurance. ",
    aboutP2: "I enjoy collaborating in dynamic teams, building clean code, and continuously learning new technologies to deliver better digital experiences.",
    email: "Email", phone: "Phone", location: "Location", status: "Status",
    statusVal: "Open for work",
    letsConnect: "Let's Connect",
    projectsLabel: "What I've Built",
    projectsTitle: "My Projects",
    projectsDesc: "Some of my best projects built with modern technology",
    viewAll: "View All on GitHub",
    skillsLabel: "What I Know",
    skillsTitle: "My Skills",
    skillsDesc: "Technologies and tools I use to build digital solutions",
    technical: "Technical Skills",
    tools: "Tools & Methods",
    qaNote: "QA Testing Focus: Experienced in manual testing including writing test cases, bug reporting, and regression testing for Laravel-based applications.",
    contactLabel: "Get In Touch",
    contactTitle: "Contact Me",
    contactDesc: "Interested in collaborating? Let's discuss your project!",
    availability: "Availability",
    availabilityVal: "Open for Projects & Full-time",
    namePlaceholder: "Your name",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "Project inquiry",
    messagePlaceholder: "Tell me about your project...",
    nameLabel: "Name", emailLabel: "Email", subjectLabel: "Subject", messageLabel: "Message",
    send: "Send Message",
    sentTitle: "Message Sent!",
    sentDesc: "Thanks for reaching out. I'll get back to you soon!",
    footerBuilt: "Built with love using React",
    rights: "All Rights Reserved.",
    
    projects: [
      { 
        image: "/images/ecommerce.jpg",
        link: "https://github.com/Adindadiva26",
        tag: "Laravel · MySQL · Midtrans", 
        title: "E-Commerce Platform", 
        desc: "Full-stack e-commerce with cart, checkout, Midtrans payment gateway, admin dashboard, and WhatsApp notification integration.", 
        tech: ["Laravel", "MySQL", "Midtrans", "WhatsApp API"] 
      },
      { 
        image: "/images/chatbot.jpg",
        link: "https://github.com/Adindadiva26",
        tag: "Node.js · WhatsApp · Webhook", 
        title: "WhatsApp Booking Chatbot", 
        desc: "Chatbot for workshop booking with webhook integration, real-time database, and automatic participant notifications.", 
        tech: ["Node.js", "Webhook", "MySQL", "WhatsApp API"] 
      },
      { 
        image: "/images/qa-testing.jpg",
        link: "https://github.com/Adindadiva26",
        tag: "QA · Testing · Documentation", 
        title: "QA Testing Suite", 
        desc: "Collection of test cases and testing documentation for Laravel apps with comprehensive manual testing coverage.", 
        tech: ["Manual Testing", "Test Case", "Bug Report", "Documentation"] 
      },
    ],
  },
  
  id: {
    nav: ["Beranda", "Tentang", "Proyek", "Keahlian", "Kontak"],
    available: "Tersedia untuk bekerja",
    greeting: "Hai, saya",
    role: ["Web Developer", "QA Tester", "Problem Solver"],
    heroDesc: "Web developer yang bersemangat membangun website modern dan responsif serta memastikan kualitas melalui pengujian.",
    downloadCV: "Unduh CV",
    hireMe: "Rekrut Saya",
    aboutLabel: "Tentang Saya",
    aboutTitle: "Tentang Saya",
    aboutHeading: "Web Developer & QA Tester",
    aboutP1: "Lulusan Teknologi Informasi  dengan pengalaman langsung dalam pengembangan web, integrasi sistem AI, dan QA Testing.",
    aboutP2: "Saya senang berkolaborasi dalam tim yang dinamis, menulis kode yang bersih, dan terus belajar teknologi baru untuk menghadirkan pengalaman digital yang lebih baik.",
    email: "Email", phone: "Telepon", location: "Lokasi", status: "Status",
    statusVal: "Tersedia untuk bekerja",
    letsConnect: "Mari Terhubung",
    projectsLabel: "Yang Sudah Saya Buat",
    projectsTitle: "Proyek Saya",
    projectsDesc: "Beberapa proyek terbaik saya yang dibangun dengan teknologi modern",
    viewAll: "Lihat Semua di GitHub",
    skillsLabel: "Yang Saya Kuasai",
    skillsTitle: "Keahlian Saya",
    skillsDesc: "Teknologi dan alat yang saya gunakan untuk membangun solusi digital",
    technical: "Keahlian Teknis",
    tools: "Alat & Metode",
    qaNote: "Fokus QA Testing: Berpengalaman dalam manual testing termasuk penulisan test case, bug report, dan regression testing untuk aplikasi berbasis Laravel.",
    contactLabel: "Hubungi Saya",
    contactTitle: "Kontak Saya",
    contactDesc: "Tertarik untuk berkolaborasi? Mari diskusikan proyek Anda!",
    availability: "Ketersediaan",
    availabilityVal: "Terbuka untuk Proyek & Full-time",
    namePlaceholder: "Nama Anda",
    emailPlaceholder: "email@anda.com",
    subjectPlaceholder: "Pertanyaan proyek",
    messagePlaceholder: "Ceritakan tentang proyek Anda...",
    nameLabel: "Nama", emailLabel: "Email", subjectLabel: "Subjek", messageLabel: "Pesan",
    send: "Kirim Pesan",
    sentTitle: "Pesan Terkirim!",
    sentDesc: "Terima kasih telah menghubungi saya. Saya akan segera membalas!",
    footerBuilt: "Dibuat dengan penuh cinta menggunakan React",
    rights: "Hak Cipta Dilindungi.",
    
    projects: [
      { 
        image: "image/1.png",
        link: "https://github.com/Adindadiva26/Project-POS",
        title: "Project POS", 
        desc: "The Point of Sale (POS) System is a web-based retail management application designed to digitalize and streamline daily business operations.", 
        tech: ["PHP", "MySQL","Excel"] 
      },
      { 
        image: "/images/chatbot.jpg",
        link: "https://github.com/Adindadiva26",

        title: "Chatbot Booking WhatsApp", 
        desc: "Chatbot WhatsApp untuk sistem booking workshop dengan integrasi webhook, database real-time, dan notifikasi peserta otomatis.", 
        tech: ["Node.js", "Webhook", "MySQL", "WhatsApp API"] 
      },
      { 
        image: "/images/qa-testing.jpg",
        link: "https://github.com/Adindadiva26",
        
        title: "Suite QA Testing", 
        desc: "Kumpulan test case dan dokumentasi pengujian untuk aplikasi Laravel dengan cakupan manual testing yang komprehensif.", 
        tech: ["Manual Testing", "Test Case", "Bug Report", "Dokumentasi"] 
      },
    ],
  },
};

const SKILLS = [
  { name: "HTML5", icon: "🌐" },
  { name: "CSS3", icon: "🎨" },
  { name: "JavaScript", icon: "⚡" },
  { name: "Laravel", icon: "🔴" },
  { name: "Python", icon: "🐍" },
  { name: "React.js", icon: "⚛️" },
  { name: "Figma", icon: "🖼️" },
  { name: "MySQL", icon: "🗄️" },
];

const TOOLS = ["JIRA", "Git & GitHub", "REST API", "Webhook Integration", "Responsive Design", "Postman", "cPanel", "WhatsApp API", "PDF Generation", "Waterfall Method"];



// ─── HOOKS ────────────────────────────────────────────────────────────────────
function useTyping(words, speed = 90, pause = 2000) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const word = words[wi % words.length];
    const t = setTimeout(() => {
      if (!del) {
        setText(word.slice(0, text.length + 1));
        if (text.length + 1 === word.length) setTimeout(() => setDel(true), pause);
      } else {
        setText(word.slice(0, text.length - 1));
        if (text.length - 1 === 0) { setDel(false); setWi(w => w + 1); }
      }
    }, del ? 45 : speed);
    return () => clearTimeout(t);
  }, [text, del, wi, words, speed, pause]);
  return text;
}

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function Reveal({ children, delay = 0, y = 20 }) {
  const [ref, vis] = useInView();
  return (
    <div ref={ref} style={{
      opacity: vis ? 1 : 0,
      transform: vis ? "translateY(0)" : `translateY(${y}px)`,
      transition: `opacity .5s ease ${delay}s, transform .5s ease ${delay}s`,
    }}>{children}</div>
  );
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [lang, setLang] = useState("en");
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [state, handleSubmit] = useForm("xkoewzjl");
  
  const t = T[lang];
  const typed = useTyping(t.role);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const C = dark ? {
    bg: "#151320", bg2: "#1b1926", card: "#211e2e", text: "#e8e6f3",
    muted: "#8a88a8", border: "#2d2a3d", accent: "#818cf8",
    accent2: "#fb7185", accentBg: "rgba(129,140,248,0.12)"
  } : {
    bg: "#fafaf8", bg2: "#f0eff8", card: "#ffffff", text: "#1a1830",
    muted: "#6b6888", border: "#e0ddf0", accent: "#6366f1",
    accent2: "#e11d48", accentBg: "rgba(99,102,241,.08)",
  };

  const css = Object.entries(C).map(([k, v]) => `--${k}: ${v}`).join(";");

  const scrollTo = (i) => {
    const ids = ["home", "about", "projects", "skills", "contact"];
    document.getElementById(ids[i])?.scrollIntoView({ behavior: "smooth" });
    setActive(i); setMenuOpen(false);
  };

  return (
    <div style={{ background: C.bg, color: C.text, minHeight: "100vh", fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Fraunces:ital,wght@0,700;0,900;1,700&display=swap');
        ${Object.entries(C).map(([k,v]) => `--${k}: ${v}`).join(";")}
        :root { ${css} }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${C.bg}; color: ${C.text}; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: ${C.accent}; border-radius: 99px; }
        a { text-decoration: none; color: inherit; }
        section { padding: 64px 0; }
        .wrap { max-width: 1000px; margin: 0 auto; padding: 0 24px; }
        .label-sm { font-size: 10px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: ${C.accent}; margin-bottom: 8px; display: block; }
        .sec-title { font-family: 'Fraunces', serif; font-size: clamp(1.6rem, 4vw, 2.4rem); font-weight: 900; line-height: 1.1; color: ${C.text}; margin-bottom: 12px; }
        .sec-sub { font-size: 13px; color: ${C.muted}; margin-bottom: 36px; line-height: 1.5; }
        .btn-p { display: inline-flex; align-items: center; gap: 6px; padding: 10px 20px; border-radius: 12px; background: ${C.accent}; color: #fff; font-weight: 600; font-size: 13px; border: none; cursor: pointer; transition: transform .2s, box-shadow .2s; font-family: 'Plus Jakarta Sans', sans-serif; }
        .btn-p:hover { transform: translateY(-2px); box-shadow: 0 6px 20px ${C.accent}55; }
        .btn-o { display: inline-flex; align-items: center; gap: 6px; padding: 10px 20px; border-radius: 12px; background: transparent; color: ${C.text}; font-weight: 600; font-size: 13px; border: 1.5px solid ${C.border}; cursor: pointer; transition: all .2s; font-family: 'Plus Jakarta Sans', sans-serif; }
        .btn-o:hover { border-color: ${C.accent}; color: ${C.accent}; transform: translateY(-2px); }
        .card { background: ${C.card}; border: 1px solid ${C.border}; border-radius: 16px; }
        input, textarea { width: 100%; padding: 10px 14px; border-radius: 10px; border: 1px solid ${C.border}; background: ${C.bg2}; color: ${C.text}; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 13px; outline: none; transition: border .2s; }
        input:focus, textarea:focus { border-color: ${C.accent}; }
        textarea { resize: vertical; min-height: 100px; }
        label { display: block; margin-bottom: 4px; font-size: 11px; font-weight: 600; color: ${C.muted}; text-transform: uppercase; letter-spacing: 0.5px; }
        .formspree-error { display: block; font-size: 11px; color: #ef4444; margin-top: 4px; font-weight: 500; }
        @media (max-width: 900px) {
          .hero-flex { flex-direction: column !important; text-align: center; gap: 40px !important; }
          .hero-img { order: -1; margin: 0 auto; }
          .social-row { justify-content: center !important; }
          .cta-row { justify-content: center !important; }
          .about-flex { flex-direction: column !important; gap: 40px !important; }
          .proj-grid { grid-template-columns: 1fr !important; }
          .sk-grid { grid-template-columns: 1fr !important; }
          .ct-grid { grid-template-columns: 1fr !important; }
          .footer-flex { flex-direction: column !important; align-items: center !important; text-align: center; gap: 16px !important; }
          .desktop-nav { display: none !important; }
          .ham-btn { display: flex !important; }
        }
        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr !important; }
          .wrap { padding: 0 20px; }
        }
        @keyframes float { 0%,100% { transform: translateY(0px) } 50% { transform: translateY(-12px) } }
        @keyframes blob { 0%,100% { border-radius: 42% 58% 55% 45%/48% 52% 60% 40% } 50% { border-radius: 58% 42% 45% 55%/60% 40% 48% 52% } }
        @keyframes blink { 50% { opacity: 0 } }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, background: scrolled ? `${C.bg}ee` : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent", transition: "all .3s ease", height: 56 }}>
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%", maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 18, cursor: "pointer" }} onClick={() => scrollTo(0)}>
            <span style={{ color: C.accent }}>A</span><span style={{ color: C.text }}>dinda</span><span style={{ color: C.muted, fontSize: 12, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, marginLeft: 4 }}>.dev</span>
          </div>
          <ul className="desktop-nav" style={{ display: "flex", gap: 4, listStyle: "none", margin: 0, padding: 0 }}>
            {t.nav.map((n, i) => (
              <li key={i}>
                <button onClick={() => scrollTo(i)} style={{ background: active === i ? C.accentBg : "none", border: "none", cursor: "pointer", padding: "6px 14px", borderRadius: 8, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: active === i ? 600 : 400, fontSize: 13, color: active === i ? C.accent : C.muted, transition: "all .2s" }}>{n}</button>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <button onClick={() => setLang(l => l === "en" ? "id" : "en")} style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontSize: 11, fontWeight: 700, color: C.accent, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: 0.5, transition: "all .2s" }}>{lang === "en" ? "INDONESIAN" : "ENGLISH"}</button>
            <button onClick={() => setDark(d => !d)} style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 8, width: 34, height: 34, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>{dark ? "☀️" : "🌙"}</button>
            <button className="ham-btn" onClick={() => setMenuOpen(m => !m)} style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: 8, width: 34, height: 34, cursor: "pointer", display: "none", alignItems: "center", justifyContent: "center", fontSize: 16, color: C.text }}>☰</button>
          </div>
        </div>
        {menuOpen && (
          <div style={{ background: C.card, borderBottom: `1px solid ${C.border}`, padding: "8px 24px" }}>
            {t.nav.map((n, i) => (
              <button key={i} onClick={() => scrollTo(i)} style={{ display: "block", width: "100%", textAlign: "left", background: "none", border: "none", padding: "10px 0", fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: 14, color: active === i ? C.accent : C.text, cursor: "pointer", borderBottom: `1px solid ${C.border}` }}>{n}</button>
            ))}
          </div>
        )}
      </nav>

    {/* ── HERO SECTION (Full Screen + Theme-Aware) ── */}
<section 
  id="home" 
  style={{ 
    minHeight: "100vh",           // ⭐ Full layar vertikal
    display: "flex", 
    alignItems: "center", 
    paddingTop: "66px",           // ⭐ Sesuaikan dengan tinggi navbar
    position: "relative", 
    overflow: "hidden",
    background: C.bg,             // ⭐ Background section ikut tema
    transition: "background 0.3s ease"
  }}
>
  {/* ✨ Decorative Elements (ikut tema) */}
  <div style={{ 
    position: "absolute", 
    top: "15%", 
    right: "8%", 
    width: 240, 
    height: 240, 
    borderRadius: "50%", 
    background: `radial-gradient(circle, ${C.accent}20 0%, transparent 70%)`, 
    pointerEvents: "none", 
    animation: "float 8s ease-in-out infinite",
    transition: "background 0.3s ease"
  }} />
  
  <div style={{ 
    position: "absolute", 
    bottom: "20%", 
    left: "3%", 
    width: 160, 
    height: 160, 
    borderRadius: "50%", 
    background: `radial-gradient(circle, ${C.accent2}15 0%, transparent 70%)`, 
    pointerEvents: "none", 
    animation: "float 10s ease-in-out infinite reverse",
    transition: "background 0.3s ease"
  }} />
  
  <div style={{ 
    position: "absolute", 
    inset: 0, 
    backgroundImage: `radial-gradient(${C.border} 1px, transparent 1px)`, 
    backgroundSize: "32px 32px", 
    opacity: 0.4, 
    pointerEvents: "none",
    transition: "background-image 0.3s ease"
  }} />
  
  <div className="wrap" style={{ position: "relative", zIndex: 1, width: "100%" }}>
    <div className="hero-flex" style={{ display: "flex", alignItems: "center", gap: 48, justifyContent: "space-between" }}>
      
      {/* ── TEXT CONTENT ── */}
      <div style={{ flex: 1 }}>
        <Reveal delay={0}>
          <div style={{ 
            display: "inline-flex", 
            alignItems: "center", 
            gap: 6, 
            background: C.accentBg, 
            border: `1px solid ${C.accent}30`, 
            borderRadius: 99, 
            padding: "5px 14px", 
            marginBottom: 20,
            transition: "all 0.3s ease"
          }}>
            <span style={{ 
              width: 6, 
              height: 6, 
              borderRadius: "50%", 
              background: "#10b981", 
              display: "block", 
              boxShadow: "0 0 6px #10b981" 
            }} />
            <span style={{ fontSize: 11, fontWeight: 600, color: C.accent }}>{t.available}</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p style={{ fontSize: 13, color: C.muted, marginBottom: 6, fontWeight: 500 }}>{t.greeting}</p>
          <h1 style={{ 
            fontFamily: "'Fraunces', serif", 
            fontWeight: 900, 
            fontSize: "clamp(1.8rem, 4.5vw, 2.8rem)", 
            lineHeight: 1.1, 
            marginBottom: 14, 
            color: C.text,
            transition: "color 0.3s ease"
          }}>
            Kadek Adinda<br />
            <span style={{ color: C.accent }}>Diva Krisdella</span>
          </h1>
        </Reveal>
        
        <Reveal delay={0.2}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 18, fontSize: "clamp(.9rem, 2vw, 1.1rem)", fontWeight: 500, color: C.muted }}>
            <span style={{ color: C.accent, fontFamily: "'Fraunces', serif", fontWeight: 700 }}>{typed}</span>
            <span style={{ animation: "blink 1s step-end infinite", color: C.accent2, fontWeight: 300, fontSize: "1em" }}>|</span>
          </div>
        </Reveal>
        
        <Reveal delay={0.25}>
          <p style={{ fontSize: 13, lineHeight: 1.7, color: C.muted, marginBottom: 24, maxWidth: 420 }}>{t.heroDesc}</p>
        </Reveal>
        
        <Reveal delay={0.3}>
          <div className="social-row" style={{ display: "flex", gap: 10, marginBottom: 24, flexWrap: "wrap", padding: "6px 4px" }}>
            {[
              { icon: "https://cdn.simpleicons.org/github/ffffff", label: "GitHub", href: "https://github.com/Adindadiva26", bg: "#333", hoverBg: "#111" }, 
              { icon: "icons8-linkedin-50.png", label: "LinkedIn", href: "https://www.linkedin.com/in/kadek-adinda-diva-krisdella-a5b9102a2/", bg: "#0A66C2", hoverBg: "#004182" }, 
              { icon: "https://cdn.simpleicons.org/instagram/ffffff", label: "Instagram", href: "https://instagram.com/adindadiva17", bg: "#E4405F", hoverBg: "#C13584" }
            ].map((social, index) => (
              <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" style={{ 
                display: "flex", alignItems: "center", gap: 6, textDecoration: "none", 
                padding: "8px 14px", backgroundColor: social.bg, borderRadius: "10px", 
                color: "#fff", fontWeight: 500, fontSize: "12px", 
                transition: "all 0.2s ease", boxShadow: "0 3px 10px rgba(0,0,0,0.15)", 
                transform: "translateY(0)" 
              }} onMouseEnter={(e) => { 
                e.currentTarget.style.backgroundColor = social.hoverBg; 
                e.currentTarget.style.transform = "translateY(-3px)"; 
                e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)"; 
              }} onMouseLeave={(e) => { 
                e.currentTarget.style.backgroundColor = social.bg; 
                e.currentTarget.style.transform = "translateY(0)"; 
                e.currentTarget.style.boxShadow = "0 3px 10px rgba(0,0,0,0.15)"; 
              }}>
                <img src={social.icon} alt={social.label} style={{ width: 16, height: 16, filter: "brightness(0) invert(1)", transition: "transform 0.2s ease" }} />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </Reveal>
        
        <Reveal delay={0.35}>
          <div className="cta-row" style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <a href="CV_KADEK ADINDA DIVA KRISDELLA.pdf" target="_blank" className="btn-p">{t.downloadCV} ↓</a>
            <button onClick={() => scrollTo(4)} className="btn-o">{t.hireMe} →</button>
          </div>
        </Reveal>
      </div>
      
      {/* ── HERO IMAGE (Background Foto Ikut Tema) ── */}
      <Reveal delay={0.2} y={0}>
        <div className="hero-img-wrapper" style={{ 
          position: "relative", 
          width: "clamp(280px, 35vw, 350px)",  // ⭐ Responsive size
          height: "clamp(280px, 35vw, 350px)", 
          flexShrink: 0,
          marginLeft: "auto"
        }}>
          {/* ✨ Blob Gradient (ikut tema via C.accent) */}
          <div className="hero-blob" style={{
            position: "absolute",
            inset: "-4px",
            borderRadius: "42% 58% 55% 45% / 48% 52% 60% 40%",
            background: `linear-gradient(135deg, ${C.accent}, ${C.accent2})`,
            animation: "morph 9s ease-in-out infinite, glow 3s ease-in-out infinite alternate",
            zIndex: 0,
            transition: "background 0.3s ease"  // ⭐ Smooth theme transition
          }} />
          
          {/* ✨ Image Container (background ikut tema) */}
          <div className="hero-img-container" style={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            height: "100%",
            borderRadius: "42% 58% 55% 45% / 48% 52% 60% 40%",
            overflow: "hidden",
            animation: "morph 9s ease-in-out infinite",
            background: C.bg2,        // ⭐ Background container ikut tema
            border: `3px solid ${C.card}`,  // ⭐ Border ikut tema
            transition: "background 0.3s ease, border-color 0.3s ease"
          }}>
            <img 
              className="hero-img" 
              src="Foto .png" 
              alt="Kadek Adinda" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 10%",
                transform: "scale(1.05)",
                transition: "transform 0.5s ease"
              }}
            />
          </div>
          
          {/* ✨ Badge Experience */}
          <div className="hero-badge-card" style={{
            position: "absolute",
            bottom: "-12px",
            right: "-12px",
            background: C.card,       // ⭐ Background badge ikut tema
            border: `1px solid ${C.border}`,  // ⭐ Border ikut tema
            borderRadius: "16px",
            padding: "10px 18px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            zIndex: 2,
            boxShadow: `0 8px 32px rgba(0,0,0,0.4)`,
            backdropFilter: "blur(10px)",
            transition: "background 0.3s ease, border-color 0.3s ease"
          }}>
            <span className="hero-badge-card-icon" style={{ fontSize: "22px", animation: "bounce 2s infinite" }}>🚀</span>
            <div>
              <div className="hero-badge-card-title" style={{ 
                fontFamily: "'Fraunces', serif", 
                fontWeight: 700, 
                fontSize: "15px", 
                color: C.text,        // ⭐ Text judul ikut tema
                transition: "color 0.3s ease"
              }}>3+ Years</div>
              <div className="hero-badge-card-sub" style={{ 
                fontSize: "11px", 
                color: C.muted,       // ⭐ Text subtitle ikut tema
                transition: "color 0.3s ease"
              }}>Experience</div>
            </div>
          </div>
        </div>
      </Reveal>
      
    </div>
  </div>
</section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: C.bg2 }}>
        <div className="wrap">
          <Reveal><span className="label-sm">{t.aboutLabel}</span><h2 className="sec-title">{t.aboutTitle.split(" ").map((w, i) => i === 1 ? (<span key={i} style={{ color: C.accent }}>{w}{" "}</span>) : (w + " "))}</h2></Reveal>
          <div className="about-flex">
            <Reveal delay={0.1}>
              <div className="about-image-wrapper">
                <div className="about-image-border">
                  <div className="about-image-box"><img className="about-image" src="Confident professional headshot portrait.png" alt="About" /></div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2} style={{ flex: 1 }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 18, marginBottom: 14, color: C.text }}>{t.aboutHeading}</h3>
                <p style={{ color: C.muted, lineHeight: 1.7, marginBottom: 12, fontSize: 13 }}>{t.aboutP1}</p>
                <p style={{ color: C.muted, lineHeight: 1.7, marginBottom: 24, fontSize: 13 }}>{t.aboutP2}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 24 }}>
                  {[{ icon: "✉️", label: t.email, value: "dindadiva1702gmail.com"}, { icon: "📍", label: t.location, value: "Bali, Indonesia" }, { icon: "📞", label: t.phone, value: "+62 81907491710"}, { icon: "🟢", label: t.status, value: t.statusVal }].map(info => (
                    <div key={info.label} style={{ display: "flex", gap: 10, alignItems: "center", padding: "12px 14px", background: C.card, border: `1px solid ${C.border}`, borderRadius: 12 }}>
                      <span style={{ fontSize: 16, flexShrink: 0 }}>{info.icon}</span>
                      <div><div style={{ fontSize: 10, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>{info.label}</div><div style={{ fontSize: 12, fontWeight: 600, color: C.text, marginTop: 1 }}>{info.value}</div></div>
                    </div>
                  ))}
                </div>
                <button onClick={() => scrollTo(4)} className="btn-p">{t.letsConnect} →</button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
{/* ── PROJECTS SECTION (3 Cards + Theme Support) ── */}
<section 
  id="projects"
  className="projects"
  style={{ 
    background: C.bg,
    transition: "background 0.3s ease"
  }}
>
  <div className="container">
    <h2 className="section-title" style={{ color: C.text }}>
      My Projects
    </h2>
    
    <div className="projects-grid">
      
      {/* ── CARD 1: Project POS ── */}
      <article 
        className="project-card"
        style={{ 
          background: C.card,
          border: `1px solid ${C.border}`,
          transition: "transform 0.3s ease, box-shadow 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = `0 15px 30px ${C.accent}20`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div className="project-image-wrapper">
          <img 
            src="1.png" 
            alt="Project POS"
            className="project-image"
            onError={(e) => { e.target.src = "/images/placeholder.png"; }}
          />
          <div className="project-overlay">
            <a 
              href="https://github.com/Adindadiva26/Project-POS" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-btn"
              style={{ background: C.accent }}
            >
              View Project →
            </a>
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title" style={{ color: C.text }}>
            Project POS
          </h3>
          <p className="project-desc" style={{ color: C.muted }}>
            The Point of Sale (POS) System is a web-based retail management application designed to digitalize and streamline daily business operations.
          </p>
          <div className="project-tech">
            <span className="tech-tag" style={{ background: C.bg2, color: C.muted, border: `1px solid ${C.border}` }}>PHP</span>
            <span className="tech-tag" style={{ background: C.bg2, color: C.muted, border: `1px solid ${C.border}` }}>MySQL</span>
            <span className="tech-tag" style={{ background: C.bg2, color: C.muted, border: `1px solid ${C.border}` }}>Excel</span>
          </div>
        </div>
      </article>

      {/* ── CARD 2: Chatbot Booking WhatsApp ── */}
      <article 
        className="project-card"
        style={{ 
          background: C.card,
          border: `1px solid ${C.border}`,
          transition: "transform 0.3s ease, box-shadow 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = `0 15px 30px ${C.accent}20`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div className="project-image-wrapper">
          <img 
            src="2.png" 
            alt="Chatbot Booking WhatsApp"
            className="project-image"
            onError={(e) => { e.target.src = "/images/placeholder.png"; }}
          />
          <div className="project-overlay">
            <a 
              href="https://github.com/Adindadiva26/rumah-reina-herbal" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link-btn"
              style={{ background: C.accent }}
            >
              View Project →
            </a>
          </div>
        </div>
        <div className="project-content">
          <h3 className="project-title" style={{ color: C.text }}>
            Chatbot WhatsApp for Workshop Booking
          </h3>
          <p className="project-desc" style={{ color: C.muted }}>
            Developed a WhatsApp chatbot-based workshop booking system connected to an admin dashboard to simplify reservations, online payments, automated reminders, and real-time workshop data management.

          </p>
          <div className="project-tech">
            <span className="tech-tag" style={{ background: C.bg2, color: C.muted, border: `1px solid ${C.border}` }}>Laravel</span>
            <span className="tech-tag" style={{ background: C.bg2, color: C.muted, border: `1px solid ${C.border}` }}>Webhook</span>
            <span className="tech-tag" style={{ background: C.bg2, color: C.muted, border: `1px solid ${C.border}` }}>MySQL</span>
            <span className="tech-tag" style={{ background: C.bg2, color: C.muted, border: `1px solid ${C.border}` }}>WhatsApp API</span>
            <span className="tech-tag" style={{ background: C.bg2, color: C.muted, border: `1px solid ${C.border}` }}>Midtrans</span>
          </div>
        </div>
      </article>

      {/* ── CARD 3: QA Testing ── */}
      <article 
        className="project-card"
        style={{ 
          background: C.card,
          border: `1px solid ${C.border}`,
          transition: "transform 0.3s ease, box-shadow 0.3s ease"
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-8px)";
          e.currentTarget.style.boxShadow = `0 15px 30px ${C.accent}20`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <div className="project-image-wrapper">
          <img 
            src="Photo from Dinda.jpg" 
            alt="Suite QA Testing"
            className="project-image"
            onError={(e) => { e.target.src = "/images/placeholder.png"; }}
          />
          
        </div>
        <div className="project-content">
          <h3 className="project-title" style={{ color: C.text }}>
            Suite QA Testing
          </h3>
          <p className="project-desc" style={{ color: C.muted }}>
          Maintained comprehensive test cases and testing documentation for hospitality applications using Jira to ensure system functionality, quality, and smooth user experience across various features and workflows.
          </p>
          <div className="project-tech">
           
            <span className="tech-tag" style={{ background: C.bg2, color: C.muted, border: `1px solid ${C.border}` }}>Test Case</span>
            <span className="tech-tag" style={{ background: C.bg2, color: C.muted, border: `1px solid ${C.border}` }}>Bug Report</span>
            <span className="tech-tag" style={{ background: C.bg2, color: C.muted, border: `1px solid ${C.border}` }}>Documentation</span>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>
    
      {/* ── SKILLS ── */}
      <section id="skills" style={{ background: C.bg2 }}>
        <div className="wrap">
          <Reveal><span className="label-sm">{t.skillsLabel}</span><h2 className="sec-title">{t.skillsTitle.split(" ").slice(0,1).join(" ")} <span style={{ color: C.accent }}>{t.skillsTitle.split(" ").slice(1).join(" ")}</span></h2><p className="sec-sub">{t.skillsDesc}</p></Reveal>
          <div className="sk-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            <Reveal delay={0.1}>
              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 16, marginBottom: 20, color: C.text }}>⚡ {t.technical}</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
                  {SKILLS.map((s) => (
                    <div key={s.name} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", background: C.bg2, borderRadius: 12, border: `1px solid ${C.border}` }}>
                      <span style={{ fontSize: 20 }}>{s.icon}</span><span style={{ fontSize: 12, fontWeight: 600, color: C.text }}>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="card" style={{ padding: 24 }}>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 16, marginBottom: 20, color: C.text }}>🛠 {t.tools}</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                  {TOOLS.map(tool => (
                    <span key={tool} style={{ padding: "6px 14px", borderRadius: 10, fontSize: 11, fontWeight: 600, background: C.bg2, border: `1px solid ${C.border}`, color: C.muted, cursor: "default", transition: "all .2s" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.color = C.accent; e.currentTarget.style.background = C.accentBg; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.color = C.muted; e.currentTarget.style.background = C.bg2; }}
                    >{tool}</span>
                  ))}
                </div>
                
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="wrap">
          <Reveal><span className="label-sm">{t.contactLabel}</span><h2 className="sec-title">{t.contactTitle.split(" ").slice(0,1).join(" ")} <span style={{ color: C.accent }}>{t.contactTitle.split(" ").slice(1).join(" ")}</span></h2><p className="sec-sub">{t.contactDesc}</p></Reveal>
          <div className="ct-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 24, alignItems: "start" }}>
            <Reveal delay={0.1}>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[{ icon: "✉️", label: t.email, value: "dindadiva1702@gmail.com" }, { icon: "📞", label: t.phone, value: "+62 81907491710", }, { icon: "📍", label: t.location, value: "Bali, Indonesia" }, { icon: "🟢", label: t.availability, value: t.availabilityVal }].map(c => (
                  <a key={c.label} href={c.href || "#"} className="card" style={{ display: "flex", gap: 14, alignItems: "center", padding: "14px 16px", transition: "all .2s" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = C.accent; e.currentTarget.style.transform = "translateX(4px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.transform = "translateX(0)"; }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: C.accentBg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{c.icon}</div>
                    <div><div style={{ fontSize: 10, color: C.muted, fontWeight: 600, textTransform: "uppercase", letterSpacing: 0.5 }}>{c.label}</div><div style={{ fontSize: 13, fontWeight: 600, color: C.text, marginTop: 1 }}>{c.value}</div></div>
                  </a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="card" style={{ padding: 24 }}>
                {state.succeeded ? (
                  <div style={{ textAlign: "center", padding: "32px 0", animation: "fadeIn 0.3s ease" }}>
                    <div style={{ fontSize: 40, marginBottom: 12 }}>✅</div>
                    <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 700, fontSize: 18, marginBottom: 6, color: C.text }}>{t.sentTitle}</h3>
                    <p style={{ color: C.muted, fontSize: 13 }}>{t.sentDesc}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                      <div><label>{t.nameLabel} *</label><input type="text" name="name" placeholder={t.namePlaceholder} required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} disabled={state.submitting} /></div>
                      <div><label>{t.emailLabel} *</label><input type="email" name="email" placeholder={t.emailPlaceholder} required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} disabled={state.submitting} /></div>
                    </div>
                    <div><label>{t.subjectLabel}</label><input type="text" name="subject" placeholder={t.subjectPlaceholder} value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} disabled={state.submitting} /></div>
                    <div><label>{t.messageLabel} *</label><textarea rows={4} name="message" placeholder={t.messagePlaceholder} required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} disabled={state.submitting} /></div>
                    {state.errors && (<div style={{ padding: "10px 14px", borderRadius: 8, background: "#fef2f2", border: "1px solid #fecaca", color: "#991b1b", fontSize: 12 }}>⚠️ {state.errors.general?.message || "Terjadi kesalahan. Silakan coba lagi."}</div>)}
                    <button type="submit" className="btn-p" style={{ justifyContent: "center", opacity: state.submitting ? 0.7 : 1, cursor: state.submitting ? "not-allowed" : "pointer" }} disabled={state.submitting}>{state.submitting ? "Mengirim..." : `${t.send} ✉️`}</button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: C.bg2, borderTop: `1px solid ${C.border}`, padding: "24px 0" }}>
        <div className="wrap footer-flex" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 16 }}><span style={{ color: C.accent }}>A</span><span style={{ color: C.text }}>dinda</span><span style={{ color: C.muted, fontSize: 11, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400, marginLeft: 3 }}>.dev</span></div>
          <p style={{ color: C.muted, fontSize: 11 }}>© 2026 Kadek Adinda Diva Krisdella · {t.rights}</p>
          <p style={{ color: C.muted, fontSize: 10 }}>{t.footerBuilt} ❤️</p>
        </div>
      </footer>
    </div>
  );
}