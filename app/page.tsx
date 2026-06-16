"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const NAV_LINKS = ["About", "Portfolio", "Contact"];

const PORTFOLIO_ITEMS = [
  {
    title: "As We Breathe",
    type: "Film",
    description: '"As We Breathe" is a feature film for which Artem Litovchenko composed the original score, shaping emotion through sound and building a complete musical world that supports the film\'s story and atmosphere. He handled the entire audio process — from editing and comping to dynamic shaping, premixing, and final stem delivery.',
    poster: "/works/as_we_breathe_poster.webp",
    video: "/works/as_we_breathe.mp4",
  },
  {
    title: "Gentle as Moss on Stone",
    type: "Film",
    description: 'For "Gentle as Moss on Stone", directed by boredomresearch, Artem Litovchenko composed and recorded a 10-minute original soundtrack from scratch. His work covered the full audio production process — from editing and comping to dynamic shaping, premixing, and final stem delivery.',
    poster: "/works/gentle_as_moss_poster.webp",
    video: "/works/gentle_as_moss.mp4",
  },
  {
    title: "Call of the Silent Cell",
    type: "Film",
    description: 'For "Call of the Silent Cell", directed by boredomresearch, Artem Litovchenko composed and recorded an original 10-minute soundtrack. The project was a deep exploration of sound, silence, and tension, where music becomes part of the narrative itself.',
    poster: "/works/call_of_silent_cell_poster.png",
    video: "/works/call_of_silent_cell.mp4",
  },
  {
    title: "Pra Onde Levam as Ondas",
    type: "Film",
    description: 'For "Pra Onde Levam as Ondas", directed by Dan Albuk, Artem Litovchenko composed and recorded an original 30-minute soundtrack. A deeply immersive project in which he shaped the film\'s musical world from the ground up, translating emotion, silence, and movement into sound.',
    poster: "/works/pra_onde_poster.jpg",
    video: "/works/pra_onde.mp4",
  },
  {
    title: "All the Light We Cannot See",
    type: "Film",
    description: 'For "All the Light We Cannot See", directed by Seyhmus Altun, Artem Litovchenko composed and recorded an original 5-minute soundtrack. Translating emotion into music, he shaped the atmosphere and brought the story to life through sound.',
    poster: "/works/all_the_light_poster.jpg",
    video: "/works/all_the_light.mp4",
  },
];

const CELLO_ITEMS = [
  { title: "Stories from the Sky", artist: "Sid Acharya", youtubeId: "FWTGijqVwiA" },
  { title: "Ether", artist: "Jakob Ahlbom", youtubeId: "w5jkFJndLWY" },
  { title: "Painter", artist: "Aimee Carty", youtubeId: "3WleQRVGgCk" },
  { title: "Зима", artist: "анастимоза, Третя Штурмова", youtubeId: "Y8QMk62WuK0" },
  { title: "Oh Willow Waly", artist: "Karliene", youtubeId: "SmL8BfSwL3A" },
];

const SOCIAL_LINKS = [
  { label: "YouTube", href: "https://www.youtube.com/@artemlitovchenkomusic" },
  { label: "Spotify", href: "https://open.spotify.com/artist/3yLFpeZK8Q9BgJc2N1rW1q" },
  { label: "Instagram", href: "https://www.instagram.com/lit_art/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/artemlitovchenko/" },
  { label: "IMDb", href: "https://www.imdb.com/name/nm11579996/" },
];

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main style={{ background: "var(--bg)", color: "var(--text)" }}>

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "1.2rem 2.5rem",
        display: "flex", justifyContent: "flex-end", alignItems: "center",
        transition: "background 0.4s",
        background: scrolled ? "rgba(8,10,15,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,169,110,0.1)" : "none",
      }}>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {NAV_LINKS.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} style={{
              fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase",
              color: "var(--muted)", textDecoration: "none", transition: "color 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {link}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", inset: "-5%", width: "110%", height: "110%" }}>
            <iframe
              src="https://www.youtube.com/embed/LHPRABbBlu4?autoplay=1&mute=1&loop=1&playlist=LHPRABbBlu4&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=143"
              style={{ width: "100%", height: "100%", border: "none" }}
              allow="autoplay; encrypted-media"
              title="background"
            />
          </div>
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(8,10,15,0.55) 0%, rgba(8,10,15,0.35) 50%, rgba(8,10,15,0.85) 100%)" }} />
        </div>
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "0 1.5rem" }}>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.25em" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{ fontSize: "0.72rem", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem", letterSpacing: "0.25em" }}
          >
            Film & Game Composer · Remote Cello Recording
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(3rem, 8vw, 7rem)", fontWeight: 300, lineHeight: 1.05, marginBottom: "2.5rem" }}
          >
            Artem<br />Litovchenko
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <a href="#portfolio" style={{
              padding: "0.75rem 2rem", border: "1px solid var(--gold)", color: "var(--gold)",
              textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase",
              transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#000"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
            >Listen</a>
            <a href="#contact" style={{
              padding: "0.75rem 2rem", border: "1px solid rgba(232,228,220,0.3)",
              color: "var(--text)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase",
              transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--text)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(232,228,220,0.3)"; }}
            >Hire Me</a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            style={{ width: "1px", height: "50px", background: "linear-gradient(to bottom, var(--gold), transparent)", margin: "0 auto" }}
          />
        </motion.div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "8rem 2rem 4rem", maxWidth: "1000px", margin: "0 auto" }}>
        <FadeIn>
          <div className="about-top-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start", marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, lineHeight: 1.2 }}>
              Music that tells<br />stories
            </h2>
            <div style={{ paddingTop: "1.8rem" }}>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.8rem" }}>Specialties</p>
              {["Film Scoring", "Game Soundtracks", "Remote Cello Recording"].map((skill, i) => (
                <div key={i} style={{ padding: "0.4rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: "0.85rem", color: "var(--text)", letterSpacing: "0.05em" }}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="about-bottom-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem" }}>
            <img
              src="/artem.jpg"
              alt="Artem Litovchenko"
              style={{ width: "100%", objectFit: "cover", objectPosition: "center top", filter: "grayscale(15%)", display: "block", maxHeight: "600px" }}
            />
            <div>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.5rem" }}>About</p>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.2rem" }}>
                Artem Litovchenko is a Ukrainian cellist and composer. He graduated from Kharkiv National University of Arts with a degree in cello performance and performed with the Kharkiv Philharmonic Orchestra from 2016 to 2021.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.2rem" }}>
                An active voice in the independent Ukrainian music scene, Artem is a member of the art-rock band Sheetel. Today, he works from his own studio as a composer and remote session cellist, contributing to album releases and soundtracks that have reached millions of streams worldwide.
              </p>
              <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.95rem" }}>
                His music has found its way into films, video games, and recording sessions for artists across the globe — always with the same intention: to serve the story.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding: "6rem 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <FadeIn>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Portfolio</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, marginBottom: "3.5rem", lineHeight: 1.2 }}>
              Selected Works
            </h2>
          </FadeIn>
        </div>
        <div style={{ display: "flex", gap: "1.5rem", overflowX: "auto", padding: "0 2rem 2rem", scrollbarWidth: "none", cursor: "grab" }}
          onMouseDown={e => {
            const el = e.currentTarget;
            el.style.cursor = "grabbing";
            const startX = e.pageX - el.offsetLeft;
            const scrollLeft = el.scrollLeft;
            const onMove = (e: MouseEvent) => { el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX); };
            const onUp = () => { el.style.cursor = "grab"; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          }}
        >
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div key={i} onClick={() => setActiveVideo(item.video + "|" + item.title + "|" + item.description)}
              style={{ flexShrink: 0, width: "280px", cursor: "pointer", position: "relative", overflow: "hidden", border: "1px solid rgba(201,169,110,0.15)", transition: "border-color 0.3s, transform 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.5)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; const o = (e.currentTarget as HTMLDivElement).querySelector(".overlay") as HTMLDivElement; if (o) o.style.opacity = "1"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.15)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; const o = (e.currentTarget as HTMLDivElement).querySelector(".overlay") as HTMLDivElement; if (o) o.style.opacity = "0"; }}
            >
              <img src={item.poster} alt={item.title} style={{ width: "100%", aspectRatio: "2/3", objectFit: "cover", display: "block" }} />
              <div className="overlay" style={{ position: "absolute", inset: 0, background: "rgba(8,10,15,0.75)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <div style={{ width: 0, height: 0, borderTop: "9px solid transparent", borderBottom: "9px solid transparent", borderLeft: "16px solid var(--gold)", marginLeft: "4px" }} />
                </div>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>Watch Trailer</p>
              </div>
              <div style={{ padding: "1rem 1.2rem", background: "var(--surface)" }}>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.3rem" }}>{item.type}</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 400, color: "var(--text)" }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CELLO RECORDINGS */}
      <section style={{ padding: "6rem 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <FadeIn>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Remote Cello</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, marginBottom: "3.5rem", lineHeight: 1.2 }}>
              Cello Recordings
            </h2>
          </FadeIn>
        </div>
        <div style={{ display: "flex", gap: "1.5rem", overflowX: "auto", padding: "0 2rem 2rem", scrollbarWidth: "none", cursor: "grab" }}
          onMouseDown={e => {
            const el = e.currentTarget;
            el.style.cursor = "grabbing";
            const startX = e.pageX - el.offsetLeft;
            const scrollLeft = el.scrollLeft;
            const onMove = (e: MouseEvent) => { el.scrollLeft = scrollLeft - (e.pageX - el.offsetLeft - startX); };
            const onUp = () => { el.style.cursor = "grab"; window.removeEventListener("mousemove", onMove); window.removeEventListener("mouseup", onUp); };
            window.addEventListener("mousemove", onMove);
            window.addEventListener("mouseup", onUp);
          }}
        >
          {CELLO_ITEMS.map((item, i) => (
            <div key={i} onClick={() => setActiveVideo(`yt|${item.youtubeId}|${item.title}|${item.artist}`)}
              style={{ flexShrink: 0, width: "320px", cursor: "pointer", position: "relative", overflow: "hidden", border: "1px solid rgba(201,169,110,0.15)", transition: "border-color 0.3s, transform 0.3s", background: "var(--surface)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.5)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; const o = (e.currentTarget as HTMLDivElement).querySelector(".cello-overlay") as HTMLDivElement; if (o) o.style.opacity = "1"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.15)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; const o = (e.currentTarget as HTMLDivElement).querySelector(".cello-overlay") as HTMLDivElement; if (o) o.style.opacity = "0"; }}
            >
              <div style={{ position: "relative" }}>
                <img src={`https://img.youtube.com/vi/${item.youtubeId}/hqdefault.jpg`} alt={item.title} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block" }} />
                <div className="cello-overlay" style={{ position: "absolute", inset: 0, background: "rgba(8,10,15,0.7)", display: "flex", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }}>
                  <div style={{ width: "52px", height: "52px", borderRadius: "50%", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 0, height: 0, borderTop: "8px solid transparent", borderBottom: "8px solid transparent", borderLeft: "15px solid var(--gold)", marginLeft: "4px" }} />
                  </div>
                </div>
              </div>
              <div style={{ padding: "1rem 1.2rem" }}>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.3rem" }}>Cello Recording</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 400, color: "var(--text)", marginBottom: "0.2rem" }}>{item.title}</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>{item.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "8rem 2rem", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
        <FadeIn>
          <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Contact</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, marginBottom: "1.5rem" }}>
            Let's create<br />something together
          </h2>
          <p style={{ color: "var(--muted)", marginBottom: "2.5rem", lineHeight: 1.8 }}>
            Available for film projects, game soundtracks, and remote cello recording sessions worldwide.
          </p>
          <div style={{ marginBottom: "3rem" }}>
            <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1rem", letterSpacing: "0.05em" }}>
              artemlitovchenkomusic@gmail.com
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="mailto:artemlitovchenkomusic@gmail.com" style={{
                display: "inline-block", padding: "0.75rem 1.5rem",
                border: "1px solid var(--gold)", color: "var(--gold)",
                textDecoration: "none", fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase",
                transition: "all 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.color = "#000"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
              >
                Send Email
              </a>

            </div>
          </div>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
            {SOCIAL_LINKS.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                fontSize: "0.75rem", letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--muted)", textDecoration: "none", transition: "color 0.3s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "2rem", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <p style={{ fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.1em" }}>
          © {new Date().getFullYear()} Artem Litovchenko. All rights reserved.
        </p>
      </footer>

      {/* VIDEO POPUP */}
      {activeVideo && (() => {
        const parts = activeVideo.split("|");
        const isYoutube = parts[0] === "yt";
        const videoSrc = isYoutube ? parts[1] : parts[0];
        const videoTitle = isYoutube ? parts[2] : parts[1];
        const videoDesc = isYoutube ? parts[3] : parts[2];
        return (
          <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
            onClick={() => setActiveVideo(null)}
          >
            <div style={{ width: "100%", maxWidth: "900px", background: "var(--surface)", border: "1px solid rgba(201,169,110,0.2)" }}
              onClick={e => e.stopPropagation()}
            >
              {isYoutube ? (
                <div style={{ position: "relative", paddingBottom: "56.25%" }}>
                  <iframe style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                    src={`https://www.youtube.com/embed/${videoSrc}?autoplay=1`}
                    allow="autoplay; encrypted-media" title={videoTitle} />
                </div>
              ) : (
                <video src={videoSrc} controls autoPlay style={{ width: "100%", display: "block", maxHeight: "60vh", background: "#000" }} />
              )}
              <div style={{ padding: "1.5rem 2rem 2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300 }}>{videoTitle}</h3>
                  <button onClick={() => setActiveVideo(null)} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: "1.5rem", lineHeight: 1, padding: "0 0.5rem" }}>×</button>
                </div>
                {videoDesc && <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.9rem" }}>{videoDesc}</p>}
              </div>
            </div>
          </div>
        );
      })()}

    </main>
  );
}