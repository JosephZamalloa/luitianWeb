"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const albums = [
  {
    title: "K TE KIERO",
    year: "2026",
    type: "SINGLE",
    featured: true,
    img: "/album-k-te-kiero.jpg",
    url: "https://open.spotify.com/intl-es/album/44n44Ftfsd0eN0qZmbbbYW?si=ZfpwjQ9MTkWOrY9_z53U1Q",
  },
  {
    title: "NO ERES FÁCIL",
    year: "2025",
    type: "SINGLE",
    featured: false,
    img: "/album-no-eres-facil.jpg",
    url: "https://open.spotify.com/album/324x3jUf9THbL1YeuiCn50",
  },
  {
    title: "OTRA VEZ",
    year: "2025",
    type: "SINGLE",
    featured: false,
    img: "/album-otra-vez.jpg",
    url: "https://open.spotify.com/album/1ojJewOvLeHndGLBgMWjbJ",
  },
  {
    title: "ERAMOS 2",
    year: "2025",
    type: "SINGLE",
    featured: false,
    img: "/album-eramos-2.jpg",
    url: "https://open.spotify.com/album/56cAveNbH1tbFHXhEj5V6H",
  },
  {
    title: "BIXOTOMIA",
    year: "2024",
    type: "SINGLE",
    featured: false,
    img: "/album-bixotomia.jpg",
    url: "https://open.spotify.com/album/2gZwZaHMCVX7emlkouOK03",
  },
  {
    title: "TOA",
    year: "2024",
    type: "SINGLE",
    featured: false,
    img: "/album-toa.jpg",
    url: "https://open.spotify.com/album/13v7wFD3sH8gtIbS46b3DG",
  },
];

const gallery = [
  { src: "/gallery-2.webp", label: "SANTIAGO 2024" },
  { src: "/gallery-1.webp", label: "BEHIND THE LENS" },
  { src: "/gallery-3.webp", label: "EN LA NOCHE" },
  { src: "/gallery-4.webp", label: "CIUDAD 2025" },
  { src: "/gallery-0.webp", label: "CHICAGO VIBES" },
];

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [lightbox, setLightbox] = useState<{ open: boolean; idx: number }>({
    open: false,
    idx: 0,
  });
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);
    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    const squares = Array.from({ length: 18 }, () => ({
      x: Math.random() * W,
      y: H + Math.random() * H,
      size: 20 + Math.random() * 40,
      speed: 0.3 + Math.random() * 0.7,
      rot: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.015,
      alpha: 0.05 + Math.random() * 0.12,
    }));
    let raf: number;
    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      squares.forEach((s) => {
        s.y -= s.speed;
        s.rot += s.rotSpeed;
        if (s.y < -20) {
          s.y = H + 20;
          s.x = Math.random() * W;
        }
        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);
        ctx.strokeStyle = `rgba(204,0,255,${s.alpha})`;
        ctx.lineWidth = 1;
        ctx.strokeRect(-s.size / 2, -s.size / 2, s.size, s.size);
        ctx.restore();
      });
      raf = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!lightbox.open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight")
        setLightbox((l) => ({ ...l, idx: (l.idx + 1) % gallery.length }));
      if (e.key === "ArrowLeft")
        setLightbox((l) => ({
          ...l,
          idx: (l.idx - 1 + gallery.length) % gallery.length,
        }));
      if (e.key === "Escape") setLightbox({ open: false, idx: 0 });
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightbox.open]);

  return (
    <>
      {/* NAV */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navScrolled ? "bg-black/85 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-10 py-5">
          <span className="font-bebas text-2xl tracking-[4px] text-white">
            LUITIAN
          </span>
          <div className="flex gap-7 items-center">
            {[
              ["#music", "SENCILLOS"],
              ["#gallery", "GALERÍA"],
              ["#contact", "CONTACTO"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="font-mono text-[10px] tracking-[2px] text-white/70 hover:text-[#cc00ff] transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <Link
              href="/links"
              className="font-mono text-[10px] tracking-[2px] text-[#cc00ff] border border-[#cc00ff]/40 px-3 py-1.5 hover:bg-[#cc00ff]/10 transition-colors duration-200"
            >
              LINKS
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen bg-black overflow-hidden flex items-end pb-24">
        <img
          src="/artist-hero.jpg"
          alt="LUITIAN"
          className="hero-img"
          style={{ zIndex: 1 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,.3) 0%, rgba(0,0,0,.1) 30%, rgba(0,0,0,.7) 75%, #000 100%)",
            zIndex: 2,
          }}
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 3, width: "100%", height: "100%" }}
        />
        <div className="relative w-full" style={{ zIndex: 4 }}>
          <div className="max-w-7xl mx-auto px-10">
            <p className="font-mono text-[10px] tracking-[4px] text-white/40 mb-4">
              ÚLTIMO SENCILLO — 2026
            </p>
            <h1
              className="font-bebas leading-none text-white"
              style={{
                fontSize: "clamp(80px, 14vw, 180px)",
                WebkitTextStroke: "1.5px white",
              }}
            >
              <span className="block">K TE</span>
              <span
                className="block text-[#cc00ff]"
                style={{
                  animation: "kiero-pulse 3s ease-in-out infinite",
                  WebkitTextStroke: "1.5px #cc00ff",
                }}
              >
                KIERO
              </span>
            </h1>
            <button
              onClick={() =>
                window.open(
                  "https://open.spotify.com/artist/5ODu8L4V0IIy2kvPivKWQU",
                  "_blank",
                )
              }
              className="mt-8 font-mono text-[10px] tracking-[3px] text-white bg-transparent border border-white/30 px-8 py-3.5 hover:border-[#cc00ff]/60 hover:text-[#cc00ff] transition-all duration-200 cursor-pointer"
            >
              ESCUCHAR AHORA
            </button>
          </div>
        </div>
      </section>

      {/* SENCILLOS */}
      <section id="music" className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2
            className="font-bebas text-white tracking-[6px] mb-12"
            style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
          >
            SENCILLOS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
            {albums.map((a, i) => (
              <a
                key={i}
                href={a.url}
                target="_blank"
                rel="noreferrer"
                className="group block no-underline album-card"
              >
                <div
                  className={`relative aspect-square overflow-hidden border transition-all duration-300 ${a.featured ? "border-[#cc00ff]/40" : "border-white/[0.07]"} group-hover:border-[#cc00ff]/40`}
                >
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover"
                    style={{ filter: "grayscale(20%)" }}
                  />
                  <div className="play-overlay absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <div className="w-11 h-11 rounded-full border border-white/50 flex items-center justify-center">
                      <svg
                        width="9"
                        height="11"
                        viewBox="0 0 9 11"
                        fill="white"
                      >
                        <path d="M0 0L9 5.5L0 11Z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="font-bebas text-base tracking-[2px] text-white mt-2.5 mb-0.5">
                  {a.title}
                </p>
                <p className="font-mono text-[10px] text-white/40">
                  {a.year} — {a.type}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* GALERÍA */}
      <section id="gallery" className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-10">
          <h2
            className="font-bebas text-white tracking-[6px] mb-12"
            style={{ fontSize: "clamp(36px, 6vw, 64px)" }}
          >
            GALERÍA
          </h2>
          {/* Row 1: tall left + 2 stacked right */}
          <div className="grid grid-cols-2 gap-2.5 mb-2.5">
            {/* Tall image */}
            <div
              onClick={() => setLightbox({ open: true, idx: 0 })}
              className="gallery-item relative overflow-hidden cursor-pointer border border-white/5 row-span-2"
              style={{ height: 500 }}
            >
              <img
                src={gallery[0].src}
                alt={gallery[0].label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                style={{ objectPosition: "center top" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <span className="absolute bottom-3 left-4 font-mono text-[9px] tracking-[2px] text-white/50 z-20">
                {gallery[0].label}
              </span>
            </div>
            {/* Top right */}
            <div
              onClick={() => setLightbox({ open: true, idx: 1 })}
              className="gallery-item relative overflow-hidden cursor-pointer border border-white/5"
              style={{ height: 242 }}
            >
              <img
                src={gallery[1].src}
                alt={gallery[1].label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                style={{ objectPosition: "center 20%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <span className="absolute bottom-3 left-4 font-mono text-[9px] tracking-[2px] text-white/50 z-20">
                {gallery[1].label}
              </span>
            </div>
            {/* Bottom right */}
            <div
              onClick={() => setLightbox({ open: true, idx: 2 })}
              className="gallery-item relative overflow-hidden cursor-pointer border border-white/5"
              style={{ height: 242 }}
            >
              <img
                src={gallery[2].src}
                alt={gallery[2].label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <span className="absolute bottom-3 left-4 font-mono text-[9px] tracking-[2px] text-white/50 z-20">
                {gallery[2].label}
              </span>
            </div>
          </div>
          {/* Row 2: wide + small */}
          <div className="grid grid-cols-2 gap-2.5">
            <div
              onClick={() => setLightbox({ open: true, idx: 3 })}
              className="gallery-item relative overflow-hidden cursor-pointer border border-white/5 col-span-2"
              style={{ height: 260 }}
            >
              <img
                src={gallery[3].src}
                alt={gallery[3].label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                style={{ objectPosition: "center 30%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <span className="absolute bottom-3 left-4 font-mono text-[9px] tracking-[2px] text-white/50 z-20">
                {gallery[3].label}
              </span>
            </div>
            <div
              onClick={() => setLightbox({ open: true, idx: 4 })}
              className="gallery-item relative overflow-hidden cursor-pointer border border-white/5 col-span-2"
              style={{ height: 300 }}
            >
              <img
                src={gallery[4].src}
                alt={gallery[4].label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                style={{ objectPosition: "center 25%" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <span className="absolute bottom-3 left-4 font-mono text-[9px] tracking-[2px] text-white/50 z-20">
                {gallery[4].label}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="bg-black border-t border-white/[0.07] py-12"
      >
        <div className="max-w-7xl mx-auto px-10 flex justify-between items-center flex-wrap gap-4">
          <span className="font-bebas text-xl tracking-[4px] text-white">
            LUITIAN
          </span>
          <p className="font-mono text-[10px] text-white/30">
            © 2026 LUITIAN. ALL RIGHTS RESERVED.
          </p>
          <a
            href="https://instagram.com/off_luitian/"
            target="_blank"
            rel="noreferrer"
            className="font-mono text-[10px] tracking-[2px] text-white/50 hover:text-[#cc00ff] transition-colors duration-200 no-underline"
          >
            @OFF_LUITIAN
          </a>
        </div>
      </footer>

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-[9999] bg-black/[0.96] backdrop-blur-xl flex items-center justify-center"
          onClick={(e) => {
            if (e.target === e.currentTarget)
              setLightbox({ open: false, idx: 0 });
          }}
        >
          <span className="absolute top-7 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[3px] text-white/35">
            {lightbox.idx + 1} / {gallery.length}
          </span>
          <img
            src={gallery[lightbox.idx].src}
            alt={gallery[lightbox.idx].label}
            className="max-w-[88vw] max-h-[82vh] object-contain rounded-sm"
            style={{
              boxShadow:
                "0 0 80px rgba(204,0,255,.15), 0 30px 80px rgba(0,0,0,.8)",
            }}
          />
          <button
            onClick={() =>
              setLightbox((l) => ({
                ...l,
                idx: (l.idx - 1 + gallery.length) % gallery.length,
              }))
            }
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#cc00ff]/15 hover:border-[#cc00ff]/40 transition-all duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <button
            onClick={() =>
              setLightbox((l) => ({ ...l, idx: (l.idx + 1) % gallery.length }))
            }
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#cc00ff]/15 hover:border-[#cc00ff]/40 transition-all duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setLightbox((l) => ({ ...l, idx: i }))}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${i === lightbox.idx ? "bg-[#cc00ff] scale-125" : "bg-white/25"}`}
              />
            ))}
          </div>
          <span className="absolute bottom-16 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[3px] text-white/45 whitespace-nowrap">
            {gallery[lightbox.idx].label}
          </span>
          <button
            onClick={() => setLightbox({ open: false, idx: 0 })}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-[#cc00ff]/15 hover:border-[#cc00ff]/40 transition-all duration-200"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
