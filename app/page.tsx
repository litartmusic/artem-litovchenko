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
    tracks: [
      { name: "Factory Explosion", duration: "2:20", src: "/works/awb_01_factory_explosion.mp3" },
      { name: "Soldiers", duration: "1:19", src: "/works/awb_02_soldiers.mp3" },
      { name: "Hopeful Moments", duration: "1:30", src: "/works/awb_03_hopeful_moments.mp3" },
      { name: "Fight", duration: "1:54", src: "/works/awb_04_fight.mp3" },
      { name: "Car Ride", duration: "1:19", src: "/works/awb_05_car_ride.mp3" },
      { name: "Order to Evacuate", duration: "1:48", src: "/works/awb_06_order_to_evacuate.mp3" },
      { name: "Getaway", duration: "2:13", src: "/works/awb_07_getaway.mp3" },
      { name: "Market", duration: "1:12", src: "/works/awb_08_market.mp3" },
      { name: "The Family's Situation Is Worsening", duration: "1:11", src: "/works/awb_09_family_situation.mp3" },
      { name: "Toward the Fire", duration: "1:59", src: "/works/awb_10_toward_the_fire.mp3" },
      { name: "Realization", duration: "2:01", src: "/works/awb_11_realization.mp3" },
      { name: "Disappointment", duration: "1:16", src: "/works/awb_12_disappointment.mp3" },
      { name: "Esma Takes Action", duration: "1:15", src: "/works/awb_13_esma_takes_action.mp3" },
      { name: "Sick Animals", duration: "1:05", src: "/works/awb_14_sick_animals.mp3" },
      { name: "Covered in Blood", duration: "2:20", src: "/works/awb_15_covered_in_blood.mp3" },
    ],
  },,
  {
    title: "Gentle as Moss on Stone",
    type: "Film",
    description: 'Film - Original soundtrack',
    poster: "/works/gentle_as_moss_poster.webp",
    video: "/works/gentle_as_moss.mp4",
    tracks: [],
  },
  {
    title: "Call of the Silent Cell",
    type: "Film",
    description: 'Film - Original soundtrack',
    poster: "/works/call_of_silent_cell_poster.png",
    video: "/works/call_of_silent_cell.mp4",
    tracks: [],
  },
  {
    title: "Pra Onde Levam as Ondas",
    type: "Film",
    description: 'Film - Original soundtrack',
    poster: "/works/pra_onde_poster.jpg",
    video: "/works/pra_onde.mp4",
    tracks: [],
  },
  {
    title: "All the Light We Cannot See",
    type: "Film",
    description: 'Film - Original soundtrack',
    poster: "/works/all_the_light_poster.jpg",
    video: "/works/all_the_light.mp4",
    tracks: [],
  },
];
const SOLO_ITEMS = [
  {
    title: "Hope / Despair",
    year: "2026",
    cover: "/works/hope_despair_cover.jpg",
    tracks: [
      { name: "Hope", src: "/works/hope.mp3" },
      { name: "Despair", src: "/works/despair.mp3" },
    ],
  },
  {
    title: "future?",
    year: "2025",
    cover: "/works/future_cover.jpg",
    tracks: [
      { name: "what", src: "/works/what.mp3" },
      { name: "future?", src: "/works/future.mp3" },
    ],
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
const portfolioRef = useRef<HTMLDivElement | null>(null);
  const soloRef = useRef<HTMLDivElement | null>(null);
  const celloRef = useRef<HTMLDivElement | null>(null);

  const scroll = (ref: React.MutableRefObject<HTMLDivElement | null>, dir: "left" | "right") => {
    if (ref.current) ref.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };
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
          <a href="#about" style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none", transition: "color 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >About</a>

          <div style={{ position: "relative" }}
            onMouseEnter={e => { const d = (e.currentTarget as HTMLDivElement).querySelector(".nav-dropdown") as HTMLDivElement; if (d) { d.style.opacity = "1"; d.style.pointerEvents = "all"; }}}
            onMouseLeave={e => { const d = (e.currentTarget as HTMLDivElement).querySelector(".nav-dropdown") as HTMLDivElement; if (d) { d.style.opacity = "0"; d.style.pointerEvents = "none"; }}}
          >
            <a href="#portfolio" style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none", transition: "color 0.3s", display: "block", paddingBottom: "1rem" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >Portfolio</a>
            <div className="nav-dropdown" style={{
              position: "absolute", top: "100%", left: 0,
              background: "rgba(8,10,15,0.96)", border: "1px solid rgba(201,169,110,0.15)",
              backdropFilter: "blur(12px)", padding: "0.5rem 0",
              opacity: 0, pointerEvents: "none", transition: "opacity 0.2s",
              minWidth: "220px",
            }}>
              {[
                { label: "Film & Game Soundtrack", href: "#portfolio" },
                { label: "Solo Work", href: "#cello" },
                { label: "Remote Cello Recording", href: "#solo" },
              ].map(item => (
                <a key={item.label} href={item.href} style={{
                  display: "block", padding: "0.6rem 1.5rem",
                  fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase",
                  color: "var(--muted)", textDecoration: "none", transition: "color 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                >{item.label}</a>
              ))}
            </div>
          </div>

          <a href="#contact" style={{ fontSize: "0.78rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--muted)", textDecoration: "none", transition: "color 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
          >Contact</a>
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
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, lineHeight: 1.2, textAlign: "center", marginBottom: "4rem" }}>
            Music that tells stories
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="about-bottom-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "4rem", alignItems: "start" }}>
            <img
              src="/artem.jpg"
              alt="Artem Litovchenko"
              style={{ width: "100%", objectFit: "cover", objectPosition: "center top", filter: "grayscale(15%)", display: "block" }}
            />
            <div>
              <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.8rem" }}>Specialties</p>
              {["Film Scoring", "Game Soundtracks", "Remote Cello Recording"].map((skill, i) => (
                <div key={i} style={{ padding: "0.4rem 0", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: "0.85rem", color: "var(--text)", letterSpacing: "0.05em", marginBottom: "0.1rem" }}>
                  {skill}
                </div>
              ))}
              <div style={{ marginTop: "2.5rem" }}>
                <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.2rem" }}>About</p>
                <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.95rem", marginBottom: "1.2rem" }}>
                  Artem Litovchenko is a Ukrainian cellist and composer. He graduated from Kharkiv National University of Arts with a degree in cello performance and performed with the Kharkiv Philharmonic Orchestra from 2016 to 2021.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.9, fontSize: "0.95rem" }}>
                  An active voice in the independent Ukrainian music scene, Artem is a member of the art-rock band Sheetel. Today, he works from his own studio as a composer and remote session cellist, contributing to album releases and soundtracks that have reached millions of streams worldwide.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" style={{ padding: "3rem 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <FadeIn>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Portfolio</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, marginBottom: "3.5rem", lineHeight: 1.2 }}>
              Film & Game Soundtrack
            </h2>
          </FadeIn>
        </div>
        <div style={{ position: "relative" }}>
          <button onClick={() => scroll(portfolioRef, "left")} style={{ position: "absolute", left: "0.5rem", top: "45%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(8,10,15,0.8)", border: "1px solid rgba(201,169,110,0.4)", color: "var(--gold)", width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
</button>
<button onClick={() => scroll(portfolioRef, "right")} style={{ position: "absolute", right: "0.5rem", top: "45%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(8,10,15,0.8)", border: "1px solid rgba(201,169,110,0.4)", color: "var(--gold)", width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
</button>
          <div ref={portfolioRef} style={{ display: "flex", gap: "1.5rem", overflowX: "auto", padding: "0 2rem 2rem", scrollbarWidth: "none", cursor: "grab", justifyContent: "center" }}
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
            onClick={() => setActiveVideo((item.video || "") + "|" + item.title + "|" + item.description)}
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
        </div>
      </section>
{/* SOLO WORK */}
      <section id="cello" style={{ padding: "3rem 0", background: "var(--surface)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <FadeIn>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Portfolio</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, marginBottom: "3.5rem", lineHeight: 1.2 }}>
              Solo Work
            </h2>
          </FadeIn>
        </div>

        {/* Horizontal scroll */}
        <div style={{ position: "relative" }}>
          <button onClick={() => scroll(soloRef, "left")} style={{ position: "absolute", left: "0.5rem", top: "45%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(8,10,15,0.8)", border: "1px solid rgba(201,169,110,0.4)", color: "var(--gold)", width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button onClick={() => scroll(soloRef, "right")} style={{ position: "absolute", right: "0.5rem", top: "45%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(8,10,15,0.8)", border: "1px solid rgba(201,169,110,0.4)", color: "var(--gold)", width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div ref={celloRef} style={{ display: "flex", gap: "1.5rem", overflowX: "auto", padding: "0 2rem 2rem", scrollbarWidth: "none", cursor: "grab", justifyContent: "center" }}
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
          {SOLO_ITEMS.map((item, i) => (
            <div key={i}
              onClick={() => setActiveVideo(`solo|${i}|${item.title}`)}
              style={{ flexShrink: 0, width: "280px", cursor: "pointer", position: "relative", overflow: "hidden", border: "1px solid rgba(201,169,110,0.15)", transition: "border-color 0.3s, transform 0.3s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.5)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-6px)"; const o = (e.currentTarget as HTMLDivElement).querySelector(".solo-overlay") as HTMLDivElement; if (o) o.style.opacity = "1"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,169,110,0.15)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)"; const o = (e.currentTarget as HTMLDivElement).querySelector(".solo-overlay") as HTMLDivElement; if (o) o.style.opacity = "0"; }}
            >
              <img src={item.cover} alt={item.title} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }} />
              <div className="solo-overlay" style={{ position: "absolute", inset: 0, background: "rgba(8,10,15,0.75)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", opacity: 0, transition: "opacity 0.3s" }}>
                <div style={{ width: "56px", height: "56px", borderRadius: "50%", border: "2px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                  <div style={{ width: 0, height: 0, borderTop: "9px solid transparent", borderBottom: "9px solid transparent", borderLeft: "16px solid var(--gold)", marginLeft: "4px" }} />
                </div>
                <p style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>Listen</p>
              </div>
              <div style={{ padding: "1rem 1.2rem", background: "var(--surface)" }}>
                <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.3rem" }}>{item.year}</p>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 400, color: "var(--text)" }}>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>
      {/* CELLO RECORDINGS */}
      <section id="solo" style={{ padding: "3rem 0", background: "var(--bg)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <FadeIn>
            <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Portfolio</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 300, marginBottom: "3.5rem", lineHeight: 1.2 }}>
              Remote Cello Recording
            </h2>
          </FadeIn>
        </div>
        <div style={{ position: "relative" }}>
          <button onClick={() => scroll(celloRef, "left")} style={{ position: "absolute", left: "0.5rem", top: "45%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(8,10,15,0.8)", border: "1px solid rgba(201,169,110,0.4)", color: "var(--gold)", width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button onClick={() => scroll(celloRef, "right")} style={{ position: "absolute", right: "0.5rem", top: "45%", transform: "translateY(-50%)", zIndex: 10, background: "rgba(8,10,15,0.8)", border: "1px solid rgba(201,169,110,0.4)", color: "var(--gold)", width: "40px", height: "40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div ref={celloRef} style={{ display: "flex", gap: "1.5rem", overflowX: "auto", padding: "0 2rem 2rem", scrollbarWidth: "none", cursor: "grab" }}
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
        const type = parts[0];

        if (type === "solo") {
          const item = SOLO_ITEMS[parseInt(parts[1])];
          return (
            <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
              onClick={() => setActiveVideo(null)}
            >
              <div style={{ width: "100%", maxWidth: "700px", background: "var(--surface)", border: "1px solid rgba(201,169,110,0.2)" }}
                onClick={e => e.stopPropagation()}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
                  <img src={item.cover} alt={item.title} style={{ width: "100%", aspectRatio: "1/1", objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "2rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "1.5rem" }}>
                        <div>
                          <p style={{ fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.4rem" }}>{item.year}</p>
                          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 300 }}>{item.title}</h3>
                        </div>
                        <button onClick={() => setActiveVideo(null)} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: "1.5rem", lineHeight: 1 }}>×</button>
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        {item.tracks.map((track, ti) => (
                          <div key={ti}>
                            <p style={{ fontSize: "0.78rem", color: "var(--muted)", marginBottom: "0.5rem", letterSpacing: "0.05em" }}>{track.name}</p>
                            <audio controls src={track.src} style={{ width: "100%", accentColor: "var(--gold)" }} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        const isYoutube = parts[0] === "yt";
        const videoSrc = isYoutube ? parts[1] : parts[0];
        const videoTitle = isYoutube ? parts[2] : parts[1];
        const videoDesc = isYoutube ? parts[3] : parts[2];
        const itemIndex = !isYoutube ? PORTFOLIO_ITEMS.findIndex(i => i.video === parts[0]) : -1;
        const portfolioItem = itemIndex >= 0 ? PORTFOLIO_ITEMS[itemIndex] : null;
        return (
          <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}
            onClick={() => setActiveVideo(null)}
          >
            <div style={{ width: "100%", maxWidth: "900px", background: "var(--surface)", border: "1px solid rgba(201,169,110,0.2)", maxHeight: "90vh", overflowY: "auto" }}
              onClick={e => e.stopPropagation()}
            >
              {isYoutube ? (
                <div style={{ position: "relative", paddingBottom: "56.25%" }}>
                  <iframe style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none" }}
                    src={`https://www.youtube.com/embed/${videoSrc}?autoplay=1`}
                    allow="autoplay; encrypted-media" title={videoTitle} />
                </div>
              ) : (
                <video src={videoSrc} controls autoPlay style={{ width: "100%", display: "block", maxHeight: "50vh", background: "#000" }} />
              )}
              <div style={{ padding: "1.5rem 2rem 2rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.5rem" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", fontWeight: 300 }}>{videoTitle}</h3>
                  <button onClick={() => setActiveVideo(null)} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: "1.5rem", lineHeight: 1, padding: "0 0.5rem" }}>×</button>
                </div>
                {videoDesc && <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.9rem", marginBottom: "1.5rem" }}>{videoDesc}</p>}
                {portfolioItem && portfolioItem.tracks && portfolioItem.tracks.length > 0 && (
                  <div style={{ borderTop: "1px solid rgba(201,169,110,0.15)", paddingTop: "1.5rem" }}>
                    <p style={{ fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: "1rem" }}>Soundtrack</p>
                    {portfolioItem.tracks.map((track, ti) => (
                      <div key={ti} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "0.6rem 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                        <span style={{ fontSize: "0.75rem", color: "var(--muted)", width: "20px", textAlign: "right" }}>{ti + 1}</span>
                        <span style={{ fontSize: "0.85rem", color: "var(--text)", flex: 1 }}>{track.name}</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--muted)" }}>{track.duration}</span>
                        <audio controls src={track.src} style={{ height: "28px", accentColor: "var(--gold)" }} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}
          </main>
  );
}